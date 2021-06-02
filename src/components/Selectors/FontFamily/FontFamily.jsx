/* eslint-disable react/prop-types */
import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
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

export default function FontFamily(props) {
  const classes = useStyles();
  const [fontFamily, setFontFamily] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    // eslint-disable-next-line react/prop-types
    props.onChangeFontFamily(event.target.value);
    setFontFamily(event.target.value);
    console.log(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h4>Police</h4>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          id="demo-controlled-open-select-label"
        >
          Selectionner{" "}
        </InputLabel>
        <Select
          className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fontFamily}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'"Verdana", sans serif'}>
            <Typography
              className={classes.menuItem}
              style={{ fontFamily: '"Verdana", sans serif' }}
            >
              Police Verdana
            </Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={'"Tahoma", sans serif'}>
            <Typography style={{ fontFamily: '"Tahoma", serif' }}>
              Police Tahoma
            </Typography>
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            value={'"Comic sans MS", sans serif'}
          >
            <Typography style={{ fontFamily: '"Comic sans MS", sans serif' }}>
              Police Comic sans MS
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
