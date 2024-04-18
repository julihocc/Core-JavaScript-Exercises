import { Component } from "react";
import PropTypes from "prop-types";

export default class Phone extends Component {
  constructor() {
    super();
  }
  render() {
    const { phone } = this.props;
    const codeArea = phone.substring(0, 3);
    const rest = phone.substring(3);
    return <p>Phone: {`(${codeArea})${rest}`}</p>;
  }
}

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
};
