import React, { Component } from 'react'
import Demo1 from './components/1_setState'
import Demo2 from './components/2_laztLoad'
import Demo3 from './components/3_hooks'
import Demo4 from './components/4_fragment'

export default class APP extends Component {
  render() {
    return (
      <div>
        <Demo1/>
        <hr />
        <Demo2/>
        <hr />
        <Demo3/>
        <hr />
        <Demo4/>
      </div>
    )
  }
}
