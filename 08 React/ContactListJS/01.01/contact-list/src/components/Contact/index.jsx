import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Phone from "../Phone";

export default class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, email, phone, onDeleteContact, favorite, onToggleFavorite } =
      this.props;
    return (
      <div>
        <li
          className={`
          ${styles.contact}
          ${favorite ? styles.favorite : ""}
        `}
        >
          <h4>Name: {name}</h4>
          {email && <p>Email: {email}</p>}
          {phone && <Phone phone={phone} />}
        </li>
        <button onClick={onDeleteContact}>Delete Contact</button>
        <button onClick={onToggleFavorite}>
          {favorite ? "Unmark" : "Mark"}
        </button>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.bool,
};
