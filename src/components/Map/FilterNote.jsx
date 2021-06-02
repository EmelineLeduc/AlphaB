import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const labels = {
  1: "A vos risques et périls",
  2: "Peut mieux faire",
  3: "Pas mal",
  4: "Presque parfait",
  5: "Le meilleur",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function FilterNote(props) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-Note" gutterBottom>
        Filtre par note
      </Typography>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          // eslint-disable-next-line react/prop-types
          props.changeRating(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
