import counterReducer from './counter'
import portShowndReducer from './isPortShown'
import projectShowndReducer from './isProjectShown'
import filterProject from './filterProject'
import {combineReducers} from 'redux'

const allReducers = combineReducers(
{
  counter: counterReducer,
  isPortShown: portShowndReducer,
  isProjectShown: projectShowndReducer,
  filterProject: filterProject
})
export default allReducers
