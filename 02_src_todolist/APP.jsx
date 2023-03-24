import React, { Component } from 'react'
import Header from './components/Header'
import MyBody from './components/MyBody'
import Footer from './components/Footer'
export default class APP extends Component {
  state = {
    todos: [
      { id: "001", content: "吃饭", done: true },
      { id: "002", content: "睡觉", done: true },
      { id: "003", content: "打豆豆", done: false }]
  }

  // 添加Todo
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos]
    this.setState({
      todos: newTodos
    })
  }
  // 修改todo状态
  changeDone = (id, done) => {
    const newTodos = this.state.todos.map(item => {
      if (item.id === id) item.done = done
      return item
    })
    this.setState({
      todos: newTodos
    })
  }
  // 删除todo
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  // 全选
  checkedAll = (done) => {
    const newTodos = this.state.todos.map(item => {
      item.done = done
      return item
    })
    this.setState({
      todos: newTodos
    })
  }
// 删除所有已完成
  deleteDone=()=>{
    const newTodos=this.state.todos.filter(item=>!item.done)
    this.setState({
      todos:newTodos
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <MyBody todos={todos} changeDone={this.changeDone} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkedAll={this.checkedAll} deleteDone={this.deleteDone}/>
      </div>
    )
  }
}
