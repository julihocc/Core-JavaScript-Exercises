import { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        {/* <div className="square"></div> */}
        <div className="square" />
      </div>
    );
  }
}
