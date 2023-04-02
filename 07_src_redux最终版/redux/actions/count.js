import {INCREMENT,DECREMENT} from '../constant'
// 创建Action对象
export const increment=data=>({type:INCREMENT,data})
export const decrement=data=>({type:DECREMENT,data})
export const incrementAsync=data=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(increment(data))
        }, 500);
    }
}