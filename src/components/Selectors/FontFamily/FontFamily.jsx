/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  inputLabel: {
    fontSize: '16px',
  },
  menuItem: {
    fontSize: '16px',
  },
  select: {
    fontSize: '16px',
  },
}));

export default function Police(props) {
  const classes = useStyles();
  const [police, setPolice] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    // eslint-disable-next-line react/prop-types
    props.onChangePolice(event.target.value);
    setPolice(event.target.value);
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
        <InputLabel className={classes.inputLabel} id="demo-controlled-open-select-label">
          Selectionner{' '}
        </InputLabel>
        <Select
          className={classes.select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={police}
          onChange={handleChange}>
          <MenuItem className={classes.menuItem} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'"Verdana", sans serif'}>
            <Typography className={classes.menuItem} style={{ fontFamily: '"Verdana", sans serif' }}>
              Police Verdana
            </Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={'"Tahoma", sans serif'}>
            <Typography style={{ fontFamily: '"Tahoma", serif' }}>Police Tahoma</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem} value={'"Comic sans MS", sans serif'}>
            <Typography style={{ fontFamily: '"Comic sans MS", sans serif' }}>Police Comic sans MS</Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
