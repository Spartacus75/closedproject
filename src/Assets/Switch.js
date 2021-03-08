import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {

const {checked, onChange, name} = props

/*  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });*/

/*
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
*/

//console.log(state.checkedA)

  return (
    <div>
      <Switch
        checked={checked}
        onChange={onChange}
        name={name}
        //inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

    </div>
  );
}
