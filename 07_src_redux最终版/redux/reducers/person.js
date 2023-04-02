import {ADD_PEOPLE} from '../constant'

export default function peopleReducer(preState=[],action){
    const {type,data}=action
    switch(type){
        case ADD_PEOPLE:
            // reducer必须是纯函数
            return [data,...preState]
        default:
            return preState
    }
}