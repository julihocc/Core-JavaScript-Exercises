import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import customProduce from "../utils/customProduce";

export default class ContactApp extends Component {
  constructor() {
    super();
    this.state = {
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
              contacts: customProduce(this.state.contacts, (draft) => {
                draft.push({ ...contact, id: this.state.nextId });
                return draft;
              }),
              nextId: this.state.nextId + 1,
            });
          }}
        />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={(id) => {
            this.setState({
              contacts: customProduce(this.state.contacts, (draft) => {
                return draft.filter((contact) => contact.id !== id);
              }),
            });
          }}
          onToggleFavorite={(id) => {
            this.setState({
              contacts: customProduce(this.state.contacts, (draft) => {
                const contact = draft.find((contact) => contact.id === id);
                if (contact) {
                  contact.favorite = !contact.favorite;
                }
                return draft;
              }),
            });
          }}
        />
      </div>
    );
  }
}
