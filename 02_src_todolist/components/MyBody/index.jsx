import React, { Component } from 'react'
import Item from '../Item'

export default class MyBody extends Component {

    // 修改todo状态
    changeDone=(id,done)=>{
        this.props.changeDone(id,done)
    }
    // 删除TODO
    deleteTodo=(id)=>{
        this.props.deleteTodo(id)
    }
    render() {
        const { todos } = this.props
        return (
            <div>
                {
                    todos.map(item => {
                        return <Item todo={item} key={item.id} changeDone={this.changeDone} deleteTodo={this.deleteTodo}></Item>
                    })
                }
            </div>
        )
    }
}
