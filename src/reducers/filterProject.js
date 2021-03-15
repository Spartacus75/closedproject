const initialState = {filterProject:{
  projectName: '',
  projectSize:'',
  projectScope:'',
  generation: '',
  hubHeight:'',
  blade: '',
  tower: '',
  fromNacelle: '',
  fromBlade: '',
  fromTower:'',
  pmLOGBudget: '',
  pmBudget:'',
  logBudget:''

}}


const filterProject = (state = initialState, action) => {
  let nextState
  switch (action.type) {

    case 'CHANGE_NAME':
      state.filterProject['projectName'] = action.payload
      nextState = {...state, projectName: filterProject['projectName']}
      return nextState || state

    case 'CHANGE_SIZE':
      state.filterProject['projectSize'] = action.payload
      nextState = {...state, projectSize: filterProject['projectSize']}
      return nextState || state

    case 'CHANGE_SCOPE':
      state.filterProject['projectScope'] = action.payload
      nextState = {...state, projectScope: filterProject['projectScope']}
      return nextState || state

    case 'CHANGE_GENERATION':
      state.filterProject['generation'] = action.payload
      nextState = {...state, generation: filterProject['generation']}
      return nextState || state

    case 'CHANGE_HEIGHT':
      state.filterProject['hubHeight'] = action.payload
      nextState = {...state, hubHeight: filterProject['hubHeight']}
      return nextState || state

    case 'CHANGE_BLADE':
      state.filterProject['blade'] = action.payload
      nextState = {...state, blade: filterProject['blade']}
      return nextState || state

    case 'CHANGE_FROMBLADE':
      state.filterProject['fromBlade'] = action.payload
      nextState = {...state, fromBlade: filterProject['fromBlade']}
      return nextState || state

    case 'CHANGE_FROMNACELLE':
      state.filterProject['fromNacelle'] = action.payload
      nextState = {...state, fromNacelle: filterProject['fromNacelle']}
      return nextState || state

    case 'CHANGE_FROMTOWER':
      state.filterProject['fromTower'] = action.payload
      nextState = {...state, fromTower: filterProject['fromTower']}
      return nextState || state

    case 'CHANGE_PMLOGBUDGET':
      state.filterProject['pmLOGBudget'] = action.payload
      nextState = {...state, pmLOGBudget: filterProject['pmLOGBudget']}
      return nextState || state

    case 'CHANGE_PMBUDGET':
      state.filterProject['pmBudget'] = action.payload
      nextState = {...state, pmBudget: filterProject['pmBudget']}
      return nextState || state

    case 'CHANGE_LOGBUDGET':
      state.filterProject['logBudget'] = action.payload
      nextState = {...state, logBudget: filterProject['logBudget']}
      return nextState || state

  default:
      console.log('rien n est fait')
      return state
  }
}

export default filterProject
