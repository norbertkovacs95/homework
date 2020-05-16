import React, { useState, useEffect } from "react";
import "./Blog.css";

export default function Blog(props) {
    const { tags } = props;
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