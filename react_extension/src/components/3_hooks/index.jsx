import React from 'react'
//类式组件
// export default class Count extends React.Component {

//     state = { count : 0}

//     myRef = React.createRef()

//     show = () => {
// 		alert(this.myRef.current.value)
// 	}

//     addCount = () => {
//         this.setState( state => ({count : state.count + 1}))
//     }
//     unMount = () => {
//         window.root.unmount()
//     }

//     componentDidMount = () => {
// 		this.timer = setInterval(()=>{
// 			this.setState( state => ({count : state.count + 1}))
// 		}, 1000)
// 	}

//     componentWillUnmount = () => {
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h1>当前求和为：{this.state.count}</h1>
//                 <button onClick={this.addCount}>点我+1</button>
//                 <button onClick={this.unMount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }


// 函数式组件
function Count() {
    const [count, setCount] = React.useState(0)
    const addCount = () => {
        setCount(count + 1)
    }

    const myRef = React.useRef()

    const show = () => {
        alert(myRef.current.value)
    }
    
    React.useEffect( () => {
        let timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return ()=>{
			clearInterval(timer)
		}
    }, [count])

    //卸载组件的回调
	function unmount(){
        window.root.unmount()
	}

    return (
        <div>
            <input type="text" ref={myRef} />
            <h1>当前求和为：{count}</h1>
            <button onClick={addCount}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我展示数据</button>
        </div>
    )
}
export default Count