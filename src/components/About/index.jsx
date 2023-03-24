import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import Home from '../Home'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="route">
          <MyNavLink to={`/about/news/1/你好胖`}>News</MyNavLink>
          {/* 传递search参数，正常注册路由 */}
          <MyNavLink to="/about/msg?id=1&info=yes">Messages</MyNavLink>
          <MyNavLink to={
            {
              pathname:"/about/state",
              state:{
                id:1,
                msg:"12311"
              }
          }}>State</MyNavLink>
        </div>
        <Switch>
          {/* 传递params参数 */}
          <Route path="/about/news/:id/:info" component={Home}></Route>
          <Route path="/about/msg" component={Home}></Route>
          <Route path="/about/state" component={Home}></Route>
          <Redirect to="/about/news"></Redirect>
        </Switch>
      </div>
    )
  }
}
