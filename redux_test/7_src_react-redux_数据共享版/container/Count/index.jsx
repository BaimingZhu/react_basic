import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Count extends Component {
    state = { count : 0 }

    //加法
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)
    }
    //减法
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.jia(value * 1)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500) 
    }

  render() {
    return (
      <div>
          <h2>我是Person组件, 下方组件总人数为：{this.props.personNum}</h2>
          <h3>当前求和为：{this.props.count}</h3>
          <select name="number" ref={c => this.selectNumber = c}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	//映射UI组件的状态
	store => ({count:store.count, personNum : store.personArr.length}),
	//映射UI组件方法
	{
		jia  : createIncrementAction,
		jian : createDecrementAction,
		jiaAsync : createIncrementAsyncAction,
	}
	)(Count)

