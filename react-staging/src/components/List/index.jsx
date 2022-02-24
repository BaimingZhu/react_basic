import React, { Component } from "react";
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
	state = {//初始化状态，
		users:[],//users初始化值为数组
		isFirst:true,//是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'', //储存有关请求错误的信息

	}

	componentDidMount(){
		var that = this
		this.token = PubSub.subscribe('changeState', function(msg, data){
			console.log('------->', msg, data)
			that.setState(data)
		})
	}

	render() {
		const {users, isFirst, isLoading, err} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading.......</h2> : 
					err ? <h2 style={{color: 'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a href={userObj.html_url} target="_blank" rel="noreferrer">
									<img
										alt="head_portrait"
										src={userObj.avatar_url}
										style={{ width: "100px" }}
									/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		);
	}
}
