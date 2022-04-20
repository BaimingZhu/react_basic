import {ADD_PERSON} from '../constant'

const initState = [{id:'001', name:'tom', age:18}]//初始化状态
export default function personReducer(preState = initState, action) {
    // console.log('--personReducer----->', preState)
    const {type, data} = action
    switch(type) {
        case ADD_PERSON :
            return [data, ...preState]
        default:
			return preState
    }
}