import { connect } from 'react-redux'
import { createDecrementAction,
         createIncrementAction, 
         createAsyncIncrementAction 
} from '../../redux/count_action'
import React, { Component } from 'react'
// 定义UI组件
class Count extends Component {
    increment=()=>{
        this.props.jia(1)
    }
    decrement=()=>{
        this.props.jian(1)
    }
    asyncAdd=()=>{
        this.props.AsyncJia(1)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.asyncAdd}>Async+</button>
            </div>
        )
    }
}


// 传递的props
// const mapStateToProps = state => ({ count: state })
// mapDispatchToProps一般写法
// const mapDispatchToProps = dispatch => (
//     {
//         jia: data => { dispatch(createIncrementAction(data)) },
//         jian: data => { dispatch(createDecrementAction(data)) },
//         AsyncJia: data => {
//             return () => {
//                 setTimeout(() => {
//                     dispatch(createIncrementAction(data))
//                 }, 500);
//             }
//         }
//     })

// 建立连接
export default connect(
    state => ({ count: state }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        AsyncJia:createAsyncIncrementAction
    }
)(Count)