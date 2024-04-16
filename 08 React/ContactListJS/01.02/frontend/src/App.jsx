import { Component } from "react";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
import Tab from "./components/Tab";
import ContactApp from "./components/ContactApp";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab :0
    }
    this.tabs = [{ title: "Contact App", component: ContactApp}, { title: "Other tab", component: null}];
  }
  render() {
    return (
      <>
        <Tab tabs={this.tabs} currentTab = {this.state.currentTab}/>
      </>
    );
  }
}

export default App;
