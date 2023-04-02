import React, { Component } from 'react'

export default class Demo5 extends Component {
    render() {
        const MyContext=React.createContext()
        const {Provider}=MyContext
        return (
            <>
                用于祖先组件和后代组件之间的通信

            </>
        )
    }
}
