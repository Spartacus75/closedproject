import Switch from './Switch'
import {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'

export default function SelectMarker(){

//liste des markers sous forme de tableau

const isPortShown = useSelector(state => state.isPortShown)
const isProjectShown = useSelector(state => state.isProjectShown)

const dispatch = useDispatch()

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


const handleChangePort = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
  dispatch(
    {
      type: event.target.checked? 'SHOW_PORT' : 'HIDE_PORT',
      payload: event.target.checked
    }
  )
};

const handleChangeProject = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
  dispatch(
    {
      type: event.target.checked? 'SHOW_PROJECT' : 'HIDE_PROJECT',
      payload: event.target.checked
    }
  )
};


console.log(state)


  return (
    <div style={styles.selector}>

          <div style={styles.ligneCSS}>
          Show/Hide Port Of Entry
          <Switch
            checked={state.checkedPort}
            onChange={handleChangePort}
            name="checkedPort"
          />
          </div>

          <div style={styles.ligneCSS}>
          Show/Hide Project
          <Switch
            checked={state.checkedProject}
            onChange={handleChangeProject}
            name="checkedProject"
          />
          </div>



    </div>
  )
}
