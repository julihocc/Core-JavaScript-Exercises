import { Component, createContext } from "react";

export const CounterContext = createContext([]);

export class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerState: [0, 0, 0],
    };
    this.setIndexedState = this.setIndexedState.bind(this);
    console.log("this.props.children", this.props.children);
  }

  setIndexedState = (index, value) => {
    const newState = [...this.state.providerState];
    newState[index] = value;
    this.setState({ providerState: newState });
  };

  render() {
    return (
      <CounterContext.Provider
        value={{
          providerState: this.state.providerState,
          setIndexedState: this.setIndexedState,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
