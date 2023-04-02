import React, { Component } from 'react'

export default class Demo2 extends Component {
  render() {
    return (
      <div>
        <p>路由组件懒加载</p>
        引入组件
       const Home=lazy(()=》import('url'))
      </div>
    )
  }
}
