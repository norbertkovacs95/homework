import React from "react";
import "./Tag.css";

export default function Tag(props) {
    const { tag } = props;
    return <h4>{tag.html}</h4>;
}