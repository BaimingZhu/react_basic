import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    {id : '01', content: "01content"},
    {id : '02', content: "02content"},
    {id : '03', content: "03content"},
]

export default class Detail extends Component {
    render() {
        const search      = this.props.location.search.substr(1)
        const {id, title} = qs.parse(search)
        const findresult  = DetailData.find( v => v.id == id)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findresult.content}</li>
            </ul>
        )
    }
}
