import React from "react";

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import "./Blog.css";
import Header from '../../Header/Header';
import Tag from './Tag/Tag';

export default function Blog(props) {
    const { blog } = props;

   return (
       <Paper className="blogContainer"> 
           <Header title={blog.name} color={"primary"} variant="h6"/>
           <List className="tagContainer">
                {blog.tags.map(tag => <Tag tag={tag}/>)}
           </List>
       </Paper>
   );
}