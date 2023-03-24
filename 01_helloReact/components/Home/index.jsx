import { Component } from "react";
import "./index.css"
import Hello from "../Hello";
export default class Home extends Component{
    render(){
        return (
            <div>
                <Hello></Hello>
                <h2>我是首页</h2>
            </div>
        )
    }
}