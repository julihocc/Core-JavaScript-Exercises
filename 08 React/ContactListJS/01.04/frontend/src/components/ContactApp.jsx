import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { produce } from "immer";
import customProduce from "../utils/customProduce";

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

            // // without immer
            // this.setState({
            //   contacts: [
            //     ...this.state.contacts,
            //     { ...contact, id: this.state.nextId },
            //   ],
            //   nextId: this.state.nextId + 1,
            // });

            // // with immer
            // this.setState(
            //   produce((draft) => {
            //     draft.contacts.push({ ...contact, id: draft.nextId });
            //     draft.nextId++;
            //   })
            // );

            // with customProduce
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
            // // without immer
            // this.setState({
            //   contacts: this.state.contacts.filter((contact) => contact.id !== id),
            // });

            // // with immer
            // this.setState(
            //   produce((draft) => {
            //     draft.contacts = draft.contacts.filter(
            //       (contact) => contact.id !== id
            //     );
            //   })
            // );
            // with customProduce
            this.setState({
              contacts: customProduce(this.state.contacts, (draft) => {
                return draft.filter((contact) => contact.id !== id);
              }),
            });
          }}
          onToggleFavorite={(id) => {
            // // without immer
            // this.setState({
            //   contacts: this.state.contacts.map((contact) =>
            //     contact.id === id
            //       ? { ...contact, favorite: !contact.favorite }
            //       : contact
            //   ),
            // });

            // // with immer
            // this.setState(
            //   produce((draft) => {
            //     const contact = draft.contacts.find(
            //       (contact) => contact.id === id
            //     );
            //     if (contact) {
            //       contact.favorite = !contact.favorite;
            //     }
            //   })
            // );

            // with customProduce
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
