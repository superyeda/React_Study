import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {

    // 修改状态
    changeDone=(e)=>{
        const {id}=this.props.todo
        this.props.changeDone(id,e.target.checked)
    }
    // 删除Todo
    deleteTodo=()=>{
        if(!window.confirm("确实删除吗？"))return
        const {id}=this.props.todo
        this.props.deleteTodo(id)
    }
    render() {
        const { todo } = this.props
        return (
            <div className='item'>
                <input type="checkbox" checked={todo.done ? true : false} onChange={this.changeDone} />
                {todo.content}
                <button onClick={this.deleteTodo} style={{ backgroundColor: "red" }}>删除</button>
            </div>
        )
    }
}
