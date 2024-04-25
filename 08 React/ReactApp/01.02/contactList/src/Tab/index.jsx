import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tab.module.css";
import getClassNames from "../utils/getClassNames";

export default function Tab({ tabs, currentTab: initialTab, onTabSelect }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  return (
    <>
      <nav className="nav nav-tabs">
        {tabs.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${index === activeTab ? "active" : ""}`}
              href="#" // Prevent default navigation to support event handling
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(index);
                onTabSelect(index); // Notify the parent component
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </nav>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade show ${
              index === activeTab ? "active" : ""
            }`}
          >
            <h2 className="display-4">{tab.title}</h2>
            <tab.component />
          </div>
        ))}
      </div>
    </>
  );
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired, // Assuming each tab has a component
    })
  ).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
};
