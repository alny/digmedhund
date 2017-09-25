import constants from '../constants'

var initialState = {
  all: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.FETCH_WORK:
    console.log('FETCH_WORK:' + JSON.stringify(action.payload))
    updated['all'] = action.payload
    return updated

    default:
      return state
  }
}
