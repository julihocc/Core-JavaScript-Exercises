import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./ContactForm.module.css";
import getClassNames from "../../utils/getClassNames";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  render() {
    const { name, email, phone } = this.state;
    const { onAddContact } = this.props;
    return (
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("onSubmint: ", this.state);
          onAddContact(this.state);
          this.setState({ name: "", email: "", phone: "" });
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          className={getClassNames(styles.input, {
            [styles.error]: !this.state.nameIsValid,
          })}
          onChange={({ target }) => {
            // this.setState({ name: target.value });
            const nameRegex = /^[a-zA-Z\s]*$/;
            if (nameRegex.test(target.value)) {
              this.setState({ name: target.value });
              this.setState({ nameIsValid: true });
            } else {
              console.error("Invalid name");
              this.setState({ nameIsValid: false });
            }
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            this.setState({ email: target.value });
          }}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          className={getClassNames(styles.inputElement, {
            [styles.error]: !this.state.phoneIsValid,
          })}
          onChange={({ target }) => {
            const phoneRegex = /^\d{0,10}$/;
            if (phoneRegex.test(target.value)) {
              this.setState({ phone: target.value, phoneIsValid: true });
            } else {
              console.error("Invalid phone number");
              this.setState({ phoneIsValid: false });
            }
          }}
        />
        {/* FIXME The button should disable if any data is not valid and the styling should reflect this condition */}
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
