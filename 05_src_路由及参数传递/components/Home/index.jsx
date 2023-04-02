import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    // 接收params参数
    console.log("接收的params参数",this.props.match.params);
    // 接收search参数
    console.log("接收的search参数",this.props.location.search);
    // 接收state参数
    console.log("接收的state参数",this.props.location.state);
    return (
      <div>
        HOME
      </div>
    )
  }
}
