import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h1>我是父组件</h1>
        <A render={(name) => <B name={name}/>} />
      </div>
    )
  }
}


class A extends Component {
  state = {name : 'ZHU'}
  render() {
    const {name} = this.state
    return (
      <div  className='a'>
        <h1>我是A组件</h1>
        {this.props.render(name)}
      </div>
    )
  }
}


class B extends Component {
  render() {
    return (
      <div  className='b'>
        <h1>我是B组件</h1>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

