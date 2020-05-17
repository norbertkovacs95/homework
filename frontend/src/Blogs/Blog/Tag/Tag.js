import React from "react";
import "./Tag.css";

import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default function Tag(props) {
  const { tag } = props;
  return (
    <ListItem>
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography variant="h6" style={{ color: "#000000" }}>
            {tag.html}
          </Typography>
        }
      />
    </ListItem>
  );
}
