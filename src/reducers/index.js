import counterReducer from './counter'
import portShowndReducer from './isPortShown'
import projectShowndReducer from './isProjectShown'
import toggleFavorite from './toggleFavorite'
import {combineReducers} from 'redux'

const allReducers = combineReducers(
{
  counter: counterReducer,
  isPortShown: portShowndReducer,
  isProjectShown: projectShowndReducer,
  favoritesProject: toggleFavorite
})
export default allReducers
