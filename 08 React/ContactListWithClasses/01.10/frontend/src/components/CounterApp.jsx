import { Component } from "react";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

export default class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      counters: [0, 0, 0],
    };
  }
  render() {
    const counter = <Counter id="unique-counter" />;
    return (
      <div>
        {this.state.counters.map((count, index) => (
          <ErrorBoundary
            key={`eb-${index}`}
            onReload={() => {
              Counter.reset(`counter-${index}`);
            }}
          >
            <Counter id={`counter-${index}`} />
          </ErrorBoundary>
        ))}
        <hr />
        {counter}
        {counter}
      </div>
    );
  }
}
