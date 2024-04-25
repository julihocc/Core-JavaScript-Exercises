import React from "react";
import Counter from "../Counter";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleOnChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <input
          value={inputValue}
          onChange={this.handleOnChangeInput}
          type="text"
        />
        <Counter init={inputValue} index={0} />
        <Counter init={inputValue} index={1} />
        <Counter init={inputValue} index={2} />
      </>
    );
  }
}

export default CounterApp;
