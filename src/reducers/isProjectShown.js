const projectShownReducer = (state = {value: true, data: []}, action) => {
  switch(action.type){
      case 'SHOW_PROJECT':
          return {...state, value: true, data: action.payload}
      case 'HIDE_PROJECT':
          return {...state, value: false, data: []}
      default:
          return state
  }
}
export default projectShownReducer
