import React, { Component } from 'react'

export default class Footer extends Component {

  checkedAll = (e) => {
    this.props.checkedAll(e.target.checked)
  }
  deleteDone = () => {
    this.props.deleteDone()
  }
  render() {
    let doneCount = this.props.todos.reduce((pre, cur) => { return pre + (cur.done ? 1 : 0) }, 0)
    const { todos } = this.props
    return (
      <div>
        <input type="checkbox" checked={doneCount === todos.length ? true : false} onChange={this.checkedAll} />
        已完成/总数 {doneCount}/{todos.length}
        <button onClick={this.deleteDone} style={{ backgroundColor: "red" }}>删除所有已完成</button>
      </div>
    )
  }
}
