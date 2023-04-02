import { connect } from 'react-redux'
import { decrement,
         increment, 
         incrementAsync 
} from '../../redux/actions/count'
import React, { Component } from 'react'
// 定义UI组件
class Count extends Component {
    increment=()=>{
        this.props.increment(1)
    }
    decrement=()=>{
        this.props.decrement(1)
    }
    asyncAdd=()=>{
        this.props.incrementAsync(1)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>人数：{this.props.propleNum}</h1>
                <h1>当前求和为：{this.props.count}</h1>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.asyncAdd}>Async+</button>
            </div>
        )
    }
}
// 建立连接
export default connect(
    state => ({ count: state.count,propleNum:state.people.length }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)