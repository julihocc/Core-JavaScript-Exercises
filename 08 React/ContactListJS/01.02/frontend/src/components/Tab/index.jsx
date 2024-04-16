import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./Tab.module.css";

// const info = [{title: "Contacts"}, {title: "Counters"}]

export default class Tab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tabs, currentTab } = this.props;
    const currentApp = tabs[currentTab];
    return (
      <>
        <nav className={styles.tabNav}>
          {tabs.map((item, index) => (
            <h3 key={index} className="tabItem">
              {item.title}
            </h3>
          ))}
        </nav>
        <h1>{currentApp.title}</h1>
        <currentApp.component />
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
};
