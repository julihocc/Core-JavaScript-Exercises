import { Component } from 'react';
import Counter from './Counter';

export default class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      counters: [0, 0, 0],
    };
  }
  render() {
    return (
      <div>
        {this.state.counters.map((count, index) => (
          <Counter
            key={index}
            count={count}
            onIncrement={() => {
              const counters = [...this.state.counters];
              counters[index] += 1;
              this.setState({ counters });
            }}
            onDecrement={() => {
              const counters = [...this.state.counters];
              counters[index] -= 1;
              this.setState({ counters });
            }}
          />
        ))}
      </div>
    );
  }
}