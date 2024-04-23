// import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import customProduce from "../utils/customProduce";
import Serializable from "./Serializable";
import Modal from "./Modal";

// We have to serialize ContactApp because it has state
export default class ContactApp extends Serializable {
  constructor() {
    super();
    this.state = this.initialState();
    this.onDelete = this.onDelete.bind(this);
  }
  getKey() {
    return "contact-app";
  }
  saveState() {
    // return this.state;
    const { nextId, contacts } = this.state;
    return { nextId, contacts };
  }
  initialState() {
    return {
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
  onDelete(targetId) {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(({ id }) => {
        return id !== targetId;
      }),
      deleting: null,
    });
  }
  selectItemToDelete(contactId) {
    this.setState({
      deleting: this.state.contacts.find((contact) => contact.id === contactId),
    });
  }
  render() {
    const { contacts, nextId, deleting } = this.state;
    const filteredContacts = contacts.reduce(
      (acc, curr) => {
        curr.isFavorite ? acc.favorites.push(curr) : acc.others.push(curr);
        return acc;
      },
      { favorites: [], others: [] }
    );
    return (
      <>
        {deleting && (
          <Modal
            title={`Delete ${deleting.name}?`}
            message="Are you sure you want to delete this contact?"
            onDismiss={() => this.setState({ deleting: null })}
            onDelete={() => {
              this.onDelete(deleting.id);
            }}
          />
        )}
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
            onDeleteContact={(targetId) => {
              this.selectItemToDelete(targetId);
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
      </>
    );
  }
}
