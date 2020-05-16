import React from "react";
import "./Title.css";

export default function Title(props) {
  const { title } = props;
  return <h3>{title}</h3>;
}
