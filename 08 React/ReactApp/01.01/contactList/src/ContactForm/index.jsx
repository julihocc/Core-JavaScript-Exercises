import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import getClassNames from "../utils/getClassNames";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const nameRegex = /^[a-zA-Z\s]*$/;
  const phoneRegex = /^\d{0,10}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameIsValid && phoneIsValid) {
      onAddContact({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    } else {
      console.error("Form data not valid");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        setNameIsValid(nameRegex.test(value));
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        setPhoneIsValid(phoneRegex.test(value));
        break;
      default:
        // Handle unexpected input names
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        className={getClassNames(styles.input, {
          [styles.error]: !nameIsValid,
        })}
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleInputChange}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        className={getClassNames(styles.inputElement, {
          [styles.error]: !phoneIsValid,
        })}
        name="phone"
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!nameIsValid || !phoneIsValid}>
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
