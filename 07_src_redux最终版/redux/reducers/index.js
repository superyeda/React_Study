// 汇总所有reducer
import people from './person'
import count from './count'
import {combineReducers} from 'redux'

const allReducer=combineReducers({
    count,
    people
})

export default allReducer