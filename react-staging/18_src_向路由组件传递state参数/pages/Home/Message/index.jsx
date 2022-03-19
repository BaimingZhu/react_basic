import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {
  state = {
    messageArr:[
      {id:'01', title:'消息1'},
      {id:'02', title:'消息2'},
      {id:'03', title:'消息3'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
            <ul>
                {
                    messageArr.map((msgObj) => {
                        return (
                        <li key={msgObj.id}>
                            {/* <a href="/">{msgObj.title}</a>&nbsp;&nbsp; */}
                            <Link to={{pathname:'/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
                        </li>
                        ) 
                    })
                }
            </ul>
            <hr/>
            {/* <Detail></Detail> */}
            <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
