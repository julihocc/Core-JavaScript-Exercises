import { useState, useEffect, useReducer } from "react";
import Tab from "./Tab";
import ContactContainer from "./ContactContainer";
import CounterContainer from "./CounterContainer";
// import "bootstrap/dist/css/bootstrap.min.css";w

import "./App.css";

function App() {
  // const [currentTab, setCurrentTab] = useState(0);

  const tabReducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
      case "SET_TAB":
        console.log("SET_TAB", action.index);
        return action.index;
      default:
        console.log("default", state);
        return state;
    }
  };

  const [currentTab, dispatchTabChange] = useReducer(tabReducer, 0);

  const tabs = [
    { title: "Contact List", component: ContactContainer },
    { title: "Counters", component: CounterContainer },
  ];

  const handleTabSelect = (index) => {
    // setCurrentTab(index);
    dispatchTabChange({ type: "SET_TAB", index });
  };

  const getCurrentTab = () => {
    console.log("window.location.hash", window.location.hash);
    const currentLocation = window.location.hash || "#0";
    return parseInt(currentLocation.slice(1));
  };

  // Initialize current tab from URL hash
  useEffect(() => {
    const initialTab = getCurrentTab();
    // setCurrentTab(initialTab);
    dispatchTabChange({ type: "SET_TAB", index: initialTab });
  }, []);

  // // Update URL hash when the current tab changes
  // useEffect(() => {
  //   window.location.hash = currentTab;
  // }, [currentTab]);

  // Handle hash changes

  const handleHashChange = () => {
    // setCurrentTab(getCurrentTab());
    // dispatchTabChange({ type: "SET_TAB", index: getCurrentTab() });
    console.log("handleHashChange");
    console.log("currentTab:before", currentTab);
    const newTab = parseInt(window.location.hash.slice(1)) || 0;
    console.log("newTab", newTab);
    dispatchTabChange({ type: "SET_TAB", index: newTab });
  };

  useEffect(() => {
    window.location.hash = currentTab;

    window.addEventListener("hashchange", handleHashChange);

    console.log("currentTab:after", currentTab);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentTab, dispatchTabChange]);

  return (
    <div className="App">
      {console.log("currentTab@return", currentTab)}
      <Tab tabs={tabs} currentTab={currentTab} onTabSelect={handleTabSelect} />
    </div>
  );
}

export default App;
