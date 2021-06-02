import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  inputLabel: {
    fontSize: "16px",
  },
  menuItem: {
    fontSize: "16px",
  },
  select: {
    fontSize: "16px",
  },
}));

export default function LetterSpacing(props) {
  const classes = useStyles();
  const [letterSpacing, setLetterSpacing] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    // eslint-disable-next-line react/prop-types
    props.letterSpacingModifier(event.target.value);
    setLetterSpacing(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h4>Inter-lettre</h4>
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
          value={letterSpacing}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={".1rem"}>
            1
          </MenuItem>
          <MenuItem className={classes.menuItem} value={".2rem"}>
            2
          </MenuItem>
          <MenuItem className={classes.menuItem} value={".3rem"}>
            3
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
