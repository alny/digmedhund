import { combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { workReducer } from '../reducers'

var store;

export default {

  configureStore: () => {

      const reducers = combineReducers({
        work: workReducer

      })

      store = createStore(
        reducers,
        applyMiddleware(thunk)
      )
      return store
  },

  currentStore: () => {
    return store
  }
}
