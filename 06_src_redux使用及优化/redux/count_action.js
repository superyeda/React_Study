import {INCREMENT,DECREMENT} from './constant'
// 创建Action对象
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
export const createAsyncIncrementAction=data=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, 500);
    }
}