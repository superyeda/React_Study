import React, { Component } from 'react'
import Count from './container/Count'
import Person from './container/Person'
export default class APP extends Component {
  render() {
    return (
      <div>
        {/* 容器组件与store建立连接 */}
          {/* <Count store={store}/> */}
          <Count/>
          <hr />
          <Person/>
      </div>
    )
  }
}
