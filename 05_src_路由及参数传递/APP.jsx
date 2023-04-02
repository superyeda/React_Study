import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'
export default class APP extends Component {
  render() {
    return (
      <div>
          <div className="route">
            <MyNavLink to='/home'>Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
          <div className="content">
            {/* Route单一匹配提高效率 */}
            <Switch>
              {/* exact精准匹配 */}
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/home"/>
            </Switch>
          </div>
      </div>
    )
  }
}
