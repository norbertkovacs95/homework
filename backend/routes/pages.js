const express = require("express");
const router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");
const BASE_URL = require("../config").baseUrl;

const Tag = require("../models/tag");
const Blog = require("../models/blog");


/* GET blogs for :page */
router.get(
  "/:page",
  parsePages,
  queryDatabase,
  parseAndCreateBlogs,
  (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(res.data.tags);
  }
);

module.exports = router;

//Parse pages and return the found articles
async function parsePages(req, res, next) {
  res.data = {};
  let pages = req.params.page;
  let blogs = [];

  for (let i = 1; i <= pages; i++) {
    try {
      const { data } = await axios.get(`${BASE_URL}/page/${i}`);
      const $ = cheerio.load(data);
      blogs = blogs.concat(
        $(".post-title > a")
          .toArray()
          .map((title) => ({
            ref: title.attribs.href,
            name: title.firstChild.data,
          }))
      );
    } catch (err) {
      if ((err.response.status = 404 && blogs.length !== 0)) {
        req.data.blogs = blogs;
        return next();
      }
      return next(err.response);
    }
  }

  res.data.blogs = blogs;
  return next();
}

//Query database for already found articles
async function queryDatabase(req, res, next) {
  const blogs = res.data.blogs;

  try {
    //const deleted = await Blog.remove({});
    const blogDocs = await Blog.find(
            { name: { $in: blogs.map((blog) => blog.name) }
        })
        .populate("tags")
        .exec();
    res.data.blogDocs = blogDocs;
    return next();
  } catch (err) {
    return next(err);
  }
}

//Parse articles and save their tags
async function parseAndCreateBlogs(req, res, next) {
  const blogs = res.data.blogs;
  const blogDocs = res.data.blogDocs;

  if (blogs.length === blogDocs.length) {
    res.data.tags = blogDocs.map((blogDoc) => ({
      name: blogDoc.name,
      tags: blogDoc.tags,
    }));
    return next();
  }

  let tags = [];
  blogNames = blogDocs.map((blog) => blog.name);

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    try {
      if (blogNames.includes(blog.name)) {
        tags.push(
          blogDocs.filter((blogDoc) => blogDoc.name === blog.name)[0].tags
        );
        continue;
      }

      const { data } = await axios.get(`${BASE_URL}${blog.ref}`);
      const $ = cheerio.load(data);
      const blogDoc = await Blog.create(blog);
      const tagsPerBlog = $("article :header")
        .toArray()
        .map((tag) => ({
          tagType: tag.name,
          html: getInnerText(tag),
          blog: blogDoc._id,
        }));

      const tagDocs = await Tag.create(tagsPerBlog);
      blogDoc.tags = tagDocs.map((tagDoc) => tagDoc._id);
      blogDoc.save();
      tags.push({ name: blog.name, tags: tagDocs });
    } catch (err) {
      return next(err);
    }
  }

  res.data.tags = tags;
  next();
}

//Helper function to retrive inner html
function getInnerText(tag) {
    let node = tag;
    while(node.type === "tag") 
        node = node.lastChild;
    return node.data;
}