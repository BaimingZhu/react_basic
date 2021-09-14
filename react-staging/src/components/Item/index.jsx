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

    //标识鼠标移入移出的回调
    handleDelete = (id) => {
        // console.log('通知删除id', id)
        if(window.confirm('确认删除吗？')){
            this.props.deleteTodo(id)
        }
    } 

    render() {
        const {name, id, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : 'white'}} onMouseEnter={this.handelMouse(true)} onMouseLeave={this.handelMouse(false)}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handelCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
        </li>
        )
    }
}
