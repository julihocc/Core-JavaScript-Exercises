import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import ContactContainer from "./ContactContainer";
import CounterContainer from "./CounterContainer";
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { title: "Contact List", component: ContactContainer },
    { title: "Counters", component: CounterContainer },
  ];

  const handleTabSelect = (index) => {
    setCurrentTab(index);
  };

  const getCurrentTab = () => {
    const currentLocation = window.location.hash || "#0";
    return parseInt(currentLocation.slice(1));
  };

  // Initialize current tab from URL hash
  useEffect(() => {
    const initialTab = getCurrentTab();
    setCurrentTab(initialTab);
  }, []);

  // Update URL hash when the current tab changes
  useEffect(() => {
    window.location.hash = currentTab;
  }, [currentTab]);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentTab(getCurrentTab());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="App">
      <Tab tabs={tabs} currentTab={currentTab} onTabSelect={handleTabSelect} />
    </div>
  );
}

export default App;
