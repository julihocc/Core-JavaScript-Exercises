import React from "react";
import CounterDisplay from "./counterDisplay.js";
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this.#count = props.initialCount;
        this.state = { count: props.initialCount };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        // console.log("Incremented", this.#count);
        this.setState({ count: this.state.count + 1 });
    }
    decrement() {
        // this.#count--;
        this.setState({ count: this.state.count - 1 });
    }
    // forceUpdate() {
    //   this.render();
    // }
    get count() {
        return this.state.count;
    }
    render() {
        // return `Count: ${this.#count}`;
        // const child = React.createElement(
        //   "p",
        //   { className: "counter" },
        //   `Count: ${this.state.count}`
        // );
        const child = React.createElement(CounterDisplay, {
            count: this.state.count,
            className: "counter",
        });
        const incrementButton = React.createElement("button", {
            onClick: this.increment,
        }, "Increment");
        const decrementButton = React.createElement("button", {
            onClick: this.decrement,
        }, "Decrement");
        return React.createElement("div", 
        // null,
        { className: "container" }, child, incrementButton, decrementButton);
    }
}
