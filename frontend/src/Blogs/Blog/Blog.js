import React from "react";
import Paper from '@material-ui/core/Paper';

import "./Blog.css";
import Title from './Title/Title';
import Tag from './Tag/Tag';

export default function Blog(props) {
    const { blog } = props;

   return (
       <Paper>
           <Title title={blog.name}/>
           <div className="blogsContainer">
                {blog.tags.map(tag => <Tag tag={tag}/>)}
           </div>
       </Paper>
   );
}