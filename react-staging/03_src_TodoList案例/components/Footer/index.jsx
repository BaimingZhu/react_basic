import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	//全选checkall的回调
	handleCheckAll = (event) => {

		this.props.checkAllTodos(event.target.checked)
	}

	handelChearAllDone = () => {
		if(window.confirm('是都清除已完成的任务？')){
			this.props.clearAllDone()
		}
	}

    render() {
		const {todos} = this.props
		//已完成的个数
		const doneCount = todos.reduce((o, todo) => {
			todo.done && o++
			return o
		}, 0)
		//总数
		const total = todos.length
        return (
            <div className="todo-footer">
				<label>
					<input type="checkbox" checked={(doneCount === total && total != 0) ? true : false} onChange={this.handleCheckAll}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handelChearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
        )
    }
}
