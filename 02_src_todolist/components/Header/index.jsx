import React, { Component } from 'react'

export default class Header extends Component {
  addTodo=(e)=>{
    if(e.keyCode!==13)return
    if(!e.target.value){
      alert("请输入内容")
      return
    }
    const newTodo={id:new Date().getTime(),content:e.target.value,done:false}
    this.props.addTodo(newTodo)
    e.target.value=""
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='请输入内容' onKeyUp={this.addTodo}/>
      </div>
    )
  }
}
