import { Component } from "react";
import styles from "./styles.module.css";
import Phone from "../Phone";

export default class Contact extends Component<ContactProps> {
  constructor(props: ContactProps) {
    super(props);
  }
  render() {
    const { name, email, phone, onDeleteContact, favorite, onToggleFavorite } =
      this.props;
    return (
      <li
        className={`
          ${styles.contact}
          ${favorite ? styles.favorite : ""}
        `}
      >
        {" "}
        <div>
          <h4>Name: {name}</h4>
          {email && <p>Email: {email}</p>}
          {phone && <Phone phone={phone} />}
        </div>
        <div>
          {" "}
          <button onClick={onDeleteContact}>Delete Contact</button>
          <button onClick={onToggleFavorite}>
            {favorite ? "Unmark" : "Mark"}
          </button>
        </div>
      </li>
    );
  }
}
