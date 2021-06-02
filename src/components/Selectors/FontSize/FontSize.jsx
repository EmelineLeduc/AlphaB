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

export default function FontSize(props) {
  const classes = useStyles();
  const [fontSize, setFontSize] = React.useState("");
  const [openSelectLine, setOpenSelectLine] = React.useState(false);

  const handleChange = (event) => {
    setFontSize(event.target.value);
    // eslint-disable-next-line react/prop-types
    props.onChangeFontSize(event.target.value);
  };

  const handleCloseSelectLine = () => {
    setOpenSelectLine(false);
  };

  const handleOpenSelectLine = () => {
    setOpenSelectLine(true);
  };

  return (
    <div>
      <h4>Taille</h4>
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
          open={openSelectLine}
          onClose={handleCloseSelectLine}
          onOpen={handleOpenSelectLine}
          value={fontSize}
          onChange={handleChange}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={18}>
            18
          </MenuItem>
          <MenuItem className={classes.menuItem} value={20}>
            20
          </MenuItem>
          <MenuItem className={classes.menuItem} value={22}>
            22
          </MenuItem>
          <MenuItem className={classes.menuItem} value={24}>
            24
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
