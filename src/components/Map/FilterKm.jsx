import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}km`;
}

function FilterKm(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
    props.changeRadius(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Distance en km
      </Typography>
      <Slider
        defaultValue={value}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={10}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default FilterKm;
