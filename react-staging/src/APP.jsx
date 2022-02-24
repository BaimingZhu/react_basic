import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class APP extends Component {

	state = {//初始化状态，
		users:[],//users初始化值为数组
		isFirst:true,//是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'', //储存有关请求错误的信息

	}

	//更新AppState
	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}
	render() {
		// const {state} = this.state
		return (
			<div className="container">
				
				<Search updateAppState={this.updateAppState}></Search>
				<List {...this.state}></List>
			</div>
		);
	}
}
