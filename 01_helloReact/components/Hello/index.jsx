import { Component } from "react";
import hello from './index.module.css'
export default class Hello extends Component{
    render(){
        return (
            <div className={hello.hi}>
                <h2>Hello,React</h2>
            </div>
        )
    }
}