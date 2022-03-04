import React, { Component } from "react";

export default class APP extends Component {

	//更新AppState
	updateAppState = (stateObj) => {
		this.setState(stateObj)
	}
	render() {
		// const {state} = this.state
		return (
			<div className="container">
				App.....
			</div>
		);
	}
}
