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
    this.handleHashChange = this.handleHashChange.bind(this);
  }
  onTabSelect = (index) => {
    console.log("onTabSelect", index);
    // this is moved to componentDidUpdate
    // window.location.hash = index;
    this.setState({ currentTab: index });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ currentTab: this.getCurrentTab() });
    // make sure to clean up the event listener when the component is unmounted
    window.addEventListener("hashchange", this.handleHashChange);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    window.location.hash = this.state.currentTab;
  }
  handleHashChange() {
    // FIXME maybe extra duplicate work, but just once
    // however not ideal
    console.log("handleHashChange");
    this.setState({ currentTab: this.getCurrentTab() });
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange);
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
