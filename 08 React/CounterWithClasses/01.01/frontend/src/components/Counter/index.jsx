import React from "react";
import { CounterContext } from "../../state";

class Counter extends React.Component {
  static contextType = CounterContext;

  constructor(props) {
    console.log("Counter initialized");
    console.log("Counter.contextType", Counter.contextType);
    super(props);
    console.log("this.context", this.context);
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler = () => {
    // const [counts, setCount] = this.context;
    console.log("Counter.addHandler()");
    console.log("this.context", this.context);
    const { providerState, setIndexedState } = this.context;
    const { index } = this.props;
    console.log(providerState);
    setIndexedState(index, providerState[index] + 1);
  };

  render() {
    // const [counts] = this.context;
    console.log("Counter.render()");
    console.log("this.props", this.props);
    console.log("this.context", this.context);
    const { init, index } = this.props;
    const { providerState } = this.context;
    return (
      <div>
        <h1>Hello {init}</h1>
        {/* <h2>{counts[index]}</h2> */}
        <h2>{providerState[index]}</h2>
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}

export default Counter;
