import Serializable from "./Serializable";

export default class Counter extends Serializable {
  static reset(id) {
    localStorage.removeItem(id);
  }
  constructor(props) {
    super(props);
    // this.state = { count: 0 }
    this.state = this.initialState();
  }
  getKey() {
    return this.props.id;
  }
  saveState() {
    return this.state;
  }
  initialState() {
    return { count: 0 };
  }
  render() {
    if (this.state.count < 0) {
      throw new Error("Negative count!");
    }
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
