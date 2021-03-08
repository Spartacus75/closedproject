import Switch from './Switch'
import {useState} from 'react'

export default function SelectMarker(){

//liste des markers sous forme de tableau

const styles = {
  selector: {
    backgroundColor: 'white',
    width: 'auto',
    position: 'absolute',
    zIndex: 1,
    margin: '50px',
    padding:'10px',
    borderRadius: '10px'
  },
  ligneCSS:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  }
}

const [state, setState] = useState({
  checkedPort: true,
  checkedProject: true
});


const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

console.log(state)


  return (
    <div style={styles.selector}>

          <div style={styles.ligneCSS}>
          Show/Hide Port Of Entry
          <Switch
            checked={state.checkedPort}
            onChange={handleChange}
            name="checkedPort"
          />
          </div>

          <div style={styles.ligneCSS}>
          Show/Hide Project
          <Switch
            checked={state.checkedProject}
            onChange={handleChange}
            name="checkedProject"
          />
          </div>



    </div>
  )
}
