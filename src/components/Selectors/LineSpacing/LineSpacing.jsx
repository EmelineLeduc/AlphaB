import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./LineSpacing.css";

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

export default function Interlignage(props) {
  const classes = useStyles();
  const [line, setLine] = React.useState("");
  const [openSelectLine, setOpenSelectLine] = React.useState(false);

  const handleChangeLineClick = (event) => {
    setLine(event.target.value);
    // eslint-disable-next-line react/prop-types
    props.onChangeLine(event.target.value);
  };

  const handleCloseSelectLine = () => {
    setOpenSelectLine(false);
  };

  const handleOpenSelectLine = () => {
    setOpenSelectLine(true);
  };

  return (
    <div>
      <h4>Interlignage</h4>
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
          value={line}
          onChange={handleChangeLineClick}
        >
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={1.5}>
            1.5
          </MenuItem>
          <MenuItem className={classes.menuItem} value={2}>
            2
          </MenuItem>
          <MenuItem className={classes.menuItem} value={2.5}>
            2.5
          </MenuItem>
          <MenuItem className={classes.menuItem} value={3}>
            3
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
