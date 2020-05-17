import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import "./Header.css";

export default function Header(props) {
  const { color, title, variant } = props;

  return (
    <AppBar position="static" color={color}>
      <Toolbar>
        <Typography className="autoMargin" variant={variant} style={{textAlign: 'center',margin:'auto'}}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
