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

export default function LineSpacing(props) {
  const classes = useStyles();
  const [wordSpace, setWordSpace] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setWordSpace(event.target.value);
    // eslint-disable-next-line react/prop-types
    props.onChangeWord(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h4>Inter-mot</h4>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          id="controlled-open-select-label"
        >
          Sélectionner
        </InputLabel>
        <Select
          className={classes.select}
          labelId="controlled-open-select-label"
          id="controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={wordSpace}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={3}>
            1
          </MenuItem>
          <MenuItem className={classes.menuItem} value={6}>
            2
          </MenuItem>
          <MenuItem className={classes.menuItem} value={9}>
            3
          </MenuItem>
          <MenuItem className={classes.menuItem} value={15}>
            4
          </MenuItem>
          <MenuItem className={classes.menuItem} value={20}>
            5
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
