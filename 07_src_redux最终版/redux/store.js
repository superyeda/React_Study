import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import allReducer from './reducers'
export default createStore(allReducer,applyMiddleware(thunk))