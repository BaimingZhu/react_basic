import {INCREMENT, DECREMENT} from '../constant'
export const createIncrementAction = (value) => ({type : INCREMENT, data : value})
export const createDecrementAction = (value) => ({type : DECREMENT, data : value})

export const createIncrementAsyncAction = (value, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type : INCREMENT, data : value})
        }, time)
    }
}