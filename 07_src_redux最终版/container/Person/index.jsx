import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'
class Person extends Component {
    addPeople=()=>{
        const name=this.name.value
        const age=this.age.value
        this.props.addPerson({name,age})
    }
    render() {
        return (
            <div>
                <h1>求和结果：{this.props.sum}</h1>
                <input ref={c=>this.name=c} type="text" placeholder='姓名' />
                <input ref={c=>this.age=c} type="text" placeholder='年龄' />
                <button onClick={this.addPeople}>添加</button>
                <ul>
                    {this.props.peopleList.map(item=><li>{item.name}---{item.age}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({peopleList:state.people,sum:state.count}),
    {
        addPerson,
    }
)(Person)