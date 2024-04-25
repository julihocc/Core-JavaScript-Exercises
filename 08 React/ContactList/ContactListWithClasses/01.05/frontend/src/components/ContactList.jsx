import PropTypes from "prop-types";

import { Component } from "react";
import Contact from "./Contact";

const sortByFavorite = (a, b) => (b.favorite ? 1 : -1);

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    console.log("ContactList constructor");
    console.log(props);
  }

  render() {
    console.log("ContactList render");
    const { contacts } = this.props;
    console.log("contacts", contacts);
    const sortedContacts = [...contacts].sort(sortByFavorite);
    return (
      <ul>
        {sortedContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              favorite={contact.favorite}
              onDeleteContact={() => {
                this.props.onDeleteContact(contact.id);
              }}
              onToggleFavorite={() => {
                this.props.onToggleFavorite(contact.id);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
  onToggleFavorite: PropTypes.func,
};
