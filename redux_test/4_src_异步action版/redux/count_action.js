import {INCREMENT, DECREMENT} from './constant'
export const IncrementAction = (value) => ({type : INCREMENT, data : value})
export const DecrementAction = (value) => ({type : DECREMENT, data : value})

export const IncrementActionSync = (value, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type : INCREMENT, data : value})
        }, time)
    }
}