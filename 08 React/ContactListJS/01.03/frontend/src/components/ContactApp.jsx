import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { produce } from "immer";

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
            // this.setState({
            //   contacts: [
            //     ...this.state.contacts,
            //     { ...contact, id: this.state.nextId },
            //   ],
            //   nextId: this.state.nextId + 1,
            // });
            this.setState(
              produce((state) => {
                state.contacts.push({ ...contact, id: state.nextId });
                state.nextId++;
              })
            );
          }}
        />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={(id) => {
            this.setState({
              // contacts: this.state.contacts.filter((_, i) => i !== index),
              // contacts: this.state.contacts.filter(
              //   (contact) => contact.id !== id
              // ),
              contacts: produce(this.state.contacts, (draft) => {
                const index = draft.findIndex((contact) => contact.id === id);
                draft.splice(index, 1);
              }),
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
              // contacts: this.state.contacts.map((contact) =>
              //   contact.id === id
              //     ? { ...contact, favorite: !contact.favorite }
              //     : contact
              // ),
              contacts: produce(this.state.contacts, (draft) => {
                const contact = draft.find((contact) => contact.id === id);
                contact.favorite = !contact.favorite;
              }),
            });
          }}
        />
      </div>
    );
  }
}
