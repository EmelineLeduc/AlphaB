/* eslint-disable react/prop-types */
import React from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem></ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.author} src={props.profile} />
        </ListItemAvatar>
        <ListItemText
          primary={`Note: ${props.noteUser}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.author} :
              </Typography>
              {props.text}
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}
