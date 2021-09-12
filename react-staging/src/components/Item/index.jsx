import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse: false}

    //处理勾选与未勾选的情况
    handelCheck = (id) => {
        return (event) => {
            // console.log(id, event.target.checked)
            const {checked} = event.target
            this.props.updateTodo(id, checked)
        }
    }


    //标识鼠标移入移出的回调
    handelMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    } 

    render() {
        const {name, id, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : 'white'}} onMouseEnter={this.handelMouse(true)} onMouseLeave={this.handelMouse(false)}>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={this.handelCheck(id)}/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
        </li>
        )
    }
}
