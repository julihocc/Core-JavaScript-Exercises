import { Component } from "react";

// this class should be abstract
export default class Serializable extends Component {
  componentDidMount() {
    this.setState(this.readFromLocalStorage());
  }
  readFromLocalStorage() {
    // the key should be implemented by the subclass
    // localStorage is local specific API to the browser
    const data = localStorage.getItem(this.getKey()); 
    return data && data !== "undefined"
      ? JSON.parse(data)
      : this.initialState();
  }
  writeToLocalStorage() {
    localStorage.setItem(this.getKey(), JSON.stringify(this.saveState()));
  }
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      this.writeToLocalStorage();
    }
  }
  // abstract getKey():string;
  // abstract saveState();
  // abstract initialState();
}
