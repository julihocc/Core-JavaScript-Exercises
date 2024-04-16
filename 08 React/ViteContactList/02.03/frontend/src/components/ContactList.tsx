import { Component } from "react";
import Contact from "./Contact";

// const sortByFavorite = (a, b) =>
//   a.favorite !== b.favorite ? a.favorite : -(a.name < b.name);

const sortByFavorite = (a: ContactType, b: ContactType) =>
  b.favorite ? 1 : -1;

export default class ContactList extends Component<ContactListProps> {
  constructor(props: ContactListProps) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.contacts
          .toSorted(sortByFavorite)
          .map((contact: ContactType) => {
            console.log(contact);
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
