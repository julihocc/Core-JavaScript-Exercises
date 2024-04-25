import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tab.module.css";
import getClassNames from "../utils/getClassNames";

export default function Tab({ tabs, currentTab: initialTab, onTabSelect }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <>
      <nav className={styles.tabNav}>
        {tabs.map((item, index) => (
          <h3
            key={index}
            className={getClassNames(styles.tabItem, {
              [styles.tabActive]: index === activeTab,
            })}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </h3>
        ))}
      </nav>
      {tabs.map((tab, index) => (
        <div key={index} style={index === activeTab ? {} : { display: "none" }}>
          <h2 className="display-4">{tab.title}</h2>
          <tab.component />
        </div>
      ))}
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
