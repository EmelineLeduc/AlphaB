import React from "react";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  blue: {
    backgroundColor: "#0000FF",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
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

export default function Couleur(props) {
  const classes = useStyles();
  const [couleur, setCouleur] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCouleur(event.target.value);
    props.colorModifier(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h4>Couleur</h4>
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
          value={couleur}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"orange"}>
            {" "}
            <Avatar className={classes.orange}>Or</Avatar>
          </MenuItem>
          <MenuItem value={"blue"}>
            {" "}
            <Avatar className={classes.blue}>Bl</Avatar>
          </MenuItem>
          <MenuItem value={"purple"}>
            {" "}
            <Avatar className={classes.purple}>Vi</Avatar>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
