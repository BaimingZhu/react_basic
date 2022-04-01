import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
 
ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe((item)=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})