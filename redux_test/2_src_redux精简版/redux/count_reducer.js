//引入createStore, 专门用于创建redux中最为核心的store对象

const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
    // console.log('------->', preState)
    const {type, data} = action
    switch(type) {
        case 'increment' :
            return preState + data
        case 'decrement' :
            return preState - data
        default:
			return preState
    }
}