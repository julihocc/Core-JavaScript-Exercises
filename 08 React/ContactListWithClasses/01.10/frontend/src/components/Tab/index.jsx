import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./Tab.module.css";
import getClassNames from "../../utils/getClassNames";
import ErrorBoundary from "../ErrorBoundary";

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tabs, currentTab, onTabSelect } = this.props;
    return (
      <>
        <nav className={styles.tabNav}>
          {tabs.map((item, index) => (
            <h3
              key={index}
              className={getClassNames(styles.tabItem, {
                [styles.tabActive]: index === currentTab,
              })}
              onClick={() => onTabSelect(index)}
            >
              {item.title}
            </h3>
          ))}
        </nav>
        {tabs.map((tab, index) => {
          const TabComponent = tab.component;
          const isActive = index === currentTab;
          const style = isActive ? {} : { display: "none" };
          return (
            <div key={index} style={style}>
              <h2 className="display-4">{tab.title}</h2>
              {/* <TabComponent /> */}
              <ErrorBoundary>
                {/* No reload option provided */}
                <TabComponent />
              </ErrorBoundary>
            </div>
          );
        })}
      </>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentTab: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
};
