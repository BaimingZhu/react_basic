import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class APP extends Component {

	//更新AppState
	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}
	render() {
		// const {state} = this.state
		return (
			<div className="container">
				<Search></Search>
				<List></List>
			</div>
		);
	}
}
