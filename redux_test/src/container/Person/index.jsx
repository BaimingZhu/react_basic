import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPersonAction} from '../../redux/actions/person'


class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age  = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        // console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
  render() {
    return (
      <div>
          <h2>我是Person组件, 上方组件求和为：{this.props.count}</h2> 
          <input ref={c => this.nameNode = c} placeholder="输入名字"></input>
          <input ref={c => this.ageNode = c} placeholder="输入年龄"></input>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              this.props.personArr.map(v=> {
                return <li key={v.id}>{v.name}-----{v.age}</li> 
              })
            }
          </ul>
      </div>
    )
  }
}

export default connect(
  store => ({personArr: store.personArr, count : store.count}) ,
  {
    addPerson : addPersonAction
  }
)(Person)