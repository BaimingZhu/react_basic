import React from 'react'

//类式组件
// export default class Count extends React.Component {

//     state = { count : 0}
//     addCount = () => {
//         this.setState( state => ({count : state.count + 1}))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>当前求和为：{this.state.count}</h1>
//                 <button onClick={this.addCount}>点我+1</button>
//             </div>
//         )
//     }
// }


//函数式组件
function Count() {
    console.log('Count...')
    const [count, changeCount] = React.useState(0)
    const addCount = () => {
        changeCount(count + 1)
    }
    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <button onClick={addCount}>点我+1</button>
        </div>
    )
}
export default Count