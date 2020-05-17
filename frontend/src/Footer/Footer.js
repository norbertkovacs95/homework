import React from "react";
import "./Footer.css";

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Tag(props) {
  const { tag } = props;
  return (
    <div className="footer">
        <div className="githubPage">
            <GitHubIcon style={{marginLeft: "10px", marginRight: "5px"}} color="primary" fontSize="large"/>
            <Typography>
              <Link href="https://github.com/norbertkovacs95" >
              https://github.com/norbertkovacs95
              </Link>
            </Typography>
        </div>
        <Fab color="secondary"  href={'#'} className="fab" style={{marginRight: "10px"}}>
            <NavigationIcon />
        </Fab>
    </div>
  );
}