import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default class ContactApp extends Component {
  constructor() {
    super();
    this.state = {
      // contacts: [],
      nextId: 4,
      contacts: [
        {
          name: "Jane Doe",
          email: "jane@doe.com",
          phone: "0987654321",
          favorite: false,
          id: 1,
        },
        {
          name: "John Smith",
          phone: "1234567890",
          favorite: false,
          id: 2,
        },
        {
          name: "John Doe",
          email: "john@doe.com",
          favorite: true,
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <ContactForm
          onAddContact={(contact) => {
            console.log(contact);
            this.setState({
              contacts: [
                ...this.state.contacts,
                { ...contact, id: this.state.nextId },
              ],
              nextId: this.state.nextId + 1,
            });
          }}
        />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={(id) => {
            this.setState({
              // contacts: this.state.contacts.filter((_, i) => i !== index),
              contacts: this.state.contacts.filter(
                (contact) => contact.id !== id
              ),
            });
          }}
          onToggleFavorite={(id) => {
            // this.setState({
            //   contacts: this.state.contacts.map((contact, i) =>
            //     i === index
            //       ? { ...contact, favorite: !contact.favorite }
            //       : contact
            //   ),
            // });
            this.setState({
              contacts: this.state.contacts.map((contact) =>
                contact.id === id
                  ? { ...contact, favorite: !contact.favorite }
                  : contact
              ),
            });
          }}
        />
      </div>
    );
  }
}
