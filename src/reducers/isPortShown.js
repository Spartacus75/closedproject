const portShownReducer = (state = {value: true, data: []}, action) => {
  switch(action.type){
      case 'SHOW_PORT':
          return {...state, value: true, data: action.payload}
      case 'HIDE_PORT':
          return {...state, value: false, data: []}
      default:
          return state
  }
}
export default portShownReducer
