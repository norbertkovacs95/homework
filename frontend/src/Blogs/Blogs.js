import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import "./Blogs.css";
import Blog from "./Blog/Blog";
import CustomSnackbar from '../CustomSnackbar/CustomSnackbar';
import { BASE_URL } from "../Shared/baseURL";

export default function Blogs(props) {
  const { pages } = props;
  const [blogs, setBlogs] = useState(null);
  const [errState, setErrState] = useState(null);

  const fetchBlogs = () => {
    setBlogs(null);
    setErrState(null);

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}api/pages/${pages}`);
        setBlogs(data);
      } catch (e) {
        setErrState(e);
      }
    };
    fetchData();
  };

  useEffect(fetchBlogs, [props.pages]);

  if(errState){
    return (
      <div>
          <CustomSnackbar severity="error" message="Something went wrong :(" open={true}/>
          {console.log(errState)}
      </div>
    );
  }
  else if (!blogs) {
    return <CircularProgress size={100} />;
  } else {
    return (
        <div className="container">
            <CustomSnackbar severity="success" message='Blogs parsed successfully' open={true}/>
            {blogs.map((blog) => <Blog blog={blog} />)}
        </div>
    )
  }
}
