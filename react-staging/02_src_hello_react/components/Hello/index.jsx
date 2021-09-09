import React,{Component} from 'react'
import hello from './index.module.css'//避免相同类名会覆盖的问题

export default class Hello extends Component{
    render(){
        return (
            <div>
                <h2 className={hello.title}>Hello,react</h2>
            </div>
        )
    }
}