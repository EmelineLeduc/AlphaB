/* eslint-disable react/prop-types */
import React from "react";
import COLOR_OPTIONS from "./ColorOptions";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

export default function Vowels(props) {
  const classes = useStyles();
  const [colorValue, setColorValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const textValue = props.value;
  const handleChange = (e) => {
    setColorValue(e.target.value);

    let newArea = [];

    if (textValue) {
      const valueEntered = textValue.split("");
      for (let i = 0; i < valueEntered.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(valueEntered[i])) {
          newArea.push(
            <span style={{ color: e.target.value }}>{valueEntered[i]}</span>
          );
        } else {
          newArea.push(valueEntered[i]);
        }
      }
    }
    console.log(newArea);
    return props.displayVowels(newArea);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h4>Couleur voyelle</h4>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          id="demo-controlled-open-select-label"
        >
          Selectionner
        </InputLabel>
        <Select
          className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={colorValue}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          {COLOR_OPTIONS.map((item) => (
            <MenuItem value={item.value} key={item.id}>
              <Avatar className={classes[item.class]}>{item.letter}</Avatar>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
