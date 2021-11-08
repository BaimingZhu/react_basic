import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class APP extends Component {

	state = {users:[]}//初始化状态，users初始化值为数组

	saveUsers = (users) => {
		this.setState({users: users})
	}
	render() {
		const {users} = this.state
		return (
			<div className="container">
				<Search saveUsers={this.saveUsers}></Search>
				<List users={users}></List>
			</div>
		);
	}
}
