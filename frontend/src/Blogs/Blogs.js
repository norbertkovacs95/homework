import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'
import "./Blogs.css";

export default function Blogs(props) {
    const { pages } = props;
    const [ tags, setTags ] = useState(null);

    useEffect(() => setTags(null), [props.pages]);
    setTimeout(() => setTags("asd"), 1000);

   if(!tags) {
        return <CircularProgress size={100}/>
    } else {
        return (
            <div>
                Hola, Pages: {pages}, Tags: {tags}
            </div>
        );
    }
}
