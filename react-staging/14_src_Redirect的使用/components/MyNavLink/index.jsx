import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
    render() {
        // console.log(this.props.children)
        return (
            <NavLink activeClassName="zhubaiming" className="list-group-item" {...this.props}/>
        )
    }
}
