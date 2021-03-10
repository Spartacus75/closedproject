import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {data}  from '../data.js'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const {value, onChange, donnee, filterType, label} = props

/*  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

*/
  return (
    <div>

      <FormControl variant="standard" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          //label={label}
        >
        <MenuItem value=''>***</MenuItem>
        {donnee.map(item => (<MenuItem value={item[filterType]}>{item[filterType]}</MenuItem>))}


        </Select>
      </FormControl>

    </div>
  );
}
