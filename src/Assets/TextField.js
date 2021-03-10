import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      //margin: theme.spacing(1),
      margin: '5px',
      width: 'auto',
    },
  },
}));

export default function BasicTextFields(props) {

  const {value, onChange, label} = props

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      />
    </form>

  );
}
