import { Component } from "react";
import Tab from "./components/Tab";
import ContactApp from "./components/ContactApp";
import CounterApp from "./components/CounterApp";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
    this.tabs = [
      { title: "Contact App", component: ContactApp },
      { title: "Other tab", component: CounterApp },
    ];
    this.onTabSelect = this.onTabSelect.bind(this);
    this.getCurrentTab = this.getCurrentTab.bind(this);
  }
  onTabSelect = (index) => {
    console.log("onTabSelect", index);
    // this.setState({ currentTab: index });
    window.location.hash = index;
  };
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("hashchange", () => {
      console.log("hashchange");
      this.setState({ currentTab: this.getCurrentTab() });
    });
  }
  getCurrentTab() {
    const currentLocation = window.location.hash || "#0";
    const loc = parseInt(currentLocation.slice(1));
    console.log("getCurrentTab", loc);
    return loc;
  }
  render() {
    return (
      <div className="App">
        <Tab
          tabs={this.tabs}
          currentTab={this.state.currentTab}
          onTabSelect={this.onTabSelect}
        />
      </div>
    );
  }
}

export default App;
