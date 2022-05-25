import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
	const [count, setCount] = useState(1)
	return (
		<div>
			<h1>我是Home的内容</h1>
			{count == 5 ? <Navigate to='/about' /> : <h4>当前的count为:{count}</h4>}
			<button onClick={() => setCount(count + 1)}>点我设置count+1</button>
		</div>
	)
}
