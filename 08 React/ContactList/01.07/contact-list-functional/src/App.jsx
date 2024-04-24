import { useEffect, useReducer, useCallback } from "react";
import ContactContainer from "./Components/ContactContainer";
import CounterContainer from "./Components/CounterContainer";
import Tab from "./Components/Tab";
import useSerializable from "./Hooks/useSerializable";

const LOCAL_STORAGE_KEY = "app-state";

import "./App.css";

function App() {
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

  const [appState, setAppState] = useSerializable(LOCAL_STORAGE_KEY, () => ({
    currentTab: 0,
  }));

  const [currentTab, dispatchTabChange] = useReducer(
    tabReducer,
    appState.currentTab
  );

  const tabs = [
    { title: "Contact List", component: ContactContainer },
    { title: "Counters", component: CounterContainer },
  ];

  const handleTabSelect = (index) => {
    dispatchTabChange({ type: "SET_TAB", index });
  };

  const getCurrentTab = () => {
    console.log("window.location.hash", window.location.hash);
    const currentLocation = window.location.hash || "#0";
    return parseInt(currentLocation.slice(1));
  };

  useEffect(() => {
    const initialTab = getCurrentTab();
    dispatchTabChange({ type: "SET_TAB", index: initialTab });
  }, []);

  useEffect(() => {
    window.location.hash = currentTab;
  }, [currentTab]);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ ...appState, currentTab })
    );
  }, [currentTab, appState]);

  const handleHashChange = useCallback(() => {
    console.log("handleHashChange");
    console.log("currentTab:before", currentTab);
    const newTab = parseInt(window.location.hash.slice(1)) || 0;
    console.log("newTab", newTab);
    dispatchTabChange({ type: "SET_TAB", index: newTab });
  }, [currentTab, dispatchTabChange]);

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  return (
    <div className="container">
      {console.log("currentTab@return", currentTab)}
      <Tab tabs={tabs} currentTab={currentTab} onTabSelect={handleTabSelect} />
    </div>
  );
}

export default App;
