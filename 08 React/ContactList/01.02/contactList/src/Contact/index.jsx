// import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import Phone from "../Phone";

const Contact = ({
  name,
  email,
  phone,
  onDeleteContact,
  favorite,
  onToggleFavorite,
}) => {
  return (
    <div>
      <li
        className={`        
        ${favorite ? styles.favorite : ""}
      `}
      >
        <h4>Name: {name}</h4>
        {email && <p>Email: {email}</p>}
        {phone && <Phone phone={phone} />}
      </li>
      <button onClick={onDeleteContact}>Delete Contact</button>
      <button onClick={onToggleFavorite}>{favorite ? "Unmark" : "Mark"}</button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  onDeleteContact: PropTypes.func,
  onToggleFavorite: PropTypes.func,
  favorite: PropTypes.bool,
};

export default Contact;
