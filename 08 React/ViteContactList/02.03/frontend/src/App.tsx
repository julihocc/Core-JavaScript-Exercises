import { Component } from "react";
import { produce } from "immer";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
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
        <h1>Contact List</h1>
        <ContactForm
          onAddContact={(contact) => {
            console.log(contact);
            this.setState(
              produce((draft: AppState) => {
                draft.contacts.push({
                  ...contact,
                  id: draft.nextId,
                  favorite: false,
                });
                draft.nextId += 1;
              })
            );
          }}
        />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={(id) => {
            // this.setState({
            //   contacts: this.state.contacts.filter(
            //     (contact) => contact.id !== id
            //   ),
            // });
            this.setState(
              produce((draft) => {
                const index = draft.contacts.findIndex(
                  (contact: ContactType) => contact.id === id
                );
                if (index !== -1) {
                  draft.contacts.splice(index, 1);
                }
              })
            );
          }}
          // onToggleFavorite={(id) => {
          //   this.setState({
          //     contacts: this.state.contacts.map((contact) =>
          //       contact.id === id
          //         ? { ...contact, favorite: !contact.favorite }
          //         : contact
          //     ),
          //   });
          // }}
          onToggleFavorite={(id) => {
            this.setState(
              produce((draft) => {
                const contact = draft.contacts.find(
                  (contact: ContactType) => contact.id === id
                );
                if (contact) {
                  contact.favorite = !contact.favorite;
                }
              })
            );
          }}
        />
      </div>
    );
  }
}

export default App;
