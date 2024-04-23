import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Modal from "../Modal";
// import customProduce from "../utils/customProduce";
import useSerializable from "../Serializable";
import { produce } from "immer";

function ContactContainer() {
  const [storedState, setStoredState] = useSerializable("contact-app", () => ({
    nextId: 4,
    contacts: [
      {
        name: "Jane Doe",
        email: "jane@doe.com",
        phone: "0987654321",
        favorite: false,
        id: 1,
      },
      { name: "John Smith", phone: "1234567890", favorite: false, id: 2 },
      { name: "John Doe", email: "john@doe.com", favorite: true, id: 3 },
    ],
  }));

  const [deleting, setDeleting] = useState(null);

  const handleAddContact = (newContact) => {
    setStoredState(
      produce(storedState, (draft) => {
        draft.contacts.push({ ...newContact, id: draft.nextId });
        draft.nextId++;
      })
    );
  };

  const handleDeleteContact = (targetId) => {
    setStoredState(
      produce(storedState, (draft) => {
        draft.contacts = draft.contacts.filter(
          (contact) => contact.id !== targetId
        );
      })
    );
  };

  const handleToggleFavorite = (id) => {
    setStoredState(
      produce(storedState, (draft) => {
        const contact = draft.contacts.find((contact) => contact.id === id);
        if (contact) {
          contact.favorite = !contact.favorite;
        }
      })
    );
  };

  const selectItemToDelete = (contactId) => {
    setDeleting(
      storedState.contacts.find((contact) => contact.id === contactId)
    );
  };

  const filteredContacts = storedState.contacts.reduce(
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
          onDismiss={() => setDeleting(null)}
          onDelete={() => handleDeleteContact(deleting.id)}
        />
      )}

      <div>
        <ContactForm onAddContact={handleAddContact} />
        <ContactList
          contacts={storedState.contacts}
          onDeleteContact={selectItemToDelete}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </>
  );
}

export default ContactContainer;
