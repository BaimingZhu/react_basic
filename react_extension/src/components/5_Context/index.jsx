import React, { Component } from "react";
import "./index.css";

const myContext = React.createContext();
const { Provider, Consumer } = myContext;

export default class A extends Component {
  state = { username: "ZHU", age: 18 };
  render() {
    const { username } = this.state;
    return (
      <div className="A">
        <h1> 我是A组件</h1>
        <h4>我的用户名是:{username}</h4>
        <Provider value={this.state}>
          <B></B>
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        <h1> 我是B组件</h1>
        <C></C>
      </div>
    );
  }
}

// class C extends Component {
//   static contextType = myContext;
//   render() {
// 	const {username, age} = this.context
//     return (
//       <div className="C">
// 		  <h4>我的用户名是:{username}, 我的年龄是{age}</h4>
//         <h1> 我是C组件</h1>
//       </div>
//     );
//   }
// }

function C() {
  return (
    <div className="C">
      <h4>
        <Consumer>
			{value => {
				const {username, age} = value
				return `我的用户名是:${username}, 我的年龄是${age}`
			}}
		</Consumer>
      </h4>
      <h1> 我是C组件</h1>
    </div>
  );
}
