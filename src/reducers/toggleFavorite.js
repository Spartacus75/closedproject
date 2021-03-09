const initialState = {favoritesProject:[]}


const toggleFavorite = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoritesProjectIndex = state.favoritesProject.findIndex(item => item.id === action.payload[0].id)
      //console.log('action.payload')
      //console.log(action.payload[0].id)
      if (favoritesProjectIndex !== -1) {
        console.log('suppression de la liste')
        nextState = {
          ...state,
          favoritesProject: state.favoritesProject.filter( (item, index) => index !== favoritesProjectIndex)
        }
      }
      else {
        console.log('ajoute dans la liste')
        nextState = {
          ...state,
          favoritesProject: [...state.favoritesProject, action.payload[0]]
        }
      }
      return nextState || state
  default:
  console.log('rien n est fait')
    return state
  }
}

export default toggleFavorite
