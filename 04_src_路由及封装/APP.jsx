import React, { Component } from 'react'
import { BrowserRouter,Route,HashRouter,NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'
export default class APP extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div className="route">
          
        <MyNavLink to='Home'>Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}
