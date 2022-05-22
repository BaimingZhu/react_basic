import React, { PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "宝马" };
  chageCar = () => {
    this.setState((state) => ({ carName: "奥迪" }));
  };
  render() {
    console.log("Parent render");
    const { carName } = this.state;
    return (
      <div className="A">
        <h1>我是父组件,车的名字是：{carName}</h1>
        <button onClick={this.chageCar}>点我换车</button>
        <Child carName={carName}></Child>
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log("Child render");
    return (
      <div className="B">
        <h1>我是子组件,车的名字是：{this.props.carName}</h1>
      </div>
    );
  }
}
