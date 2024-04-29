import { useState, useReducer } from "react";
import { ContactForm } from "../ContactForm";
import { ContactList } from "../ContactList";
import { Modal } from "../Modal";
import { useSerializable } from "../../Hooks/useSerializable";
import { produce } from "immer";

const initialState = {
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
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return produce(state, (draft) => {
        draft.contacts.push({ ...action.newContact, id: draft.nextId });
        draft.nextId++;
      });
    case "delete":
      return produce(state, (draft) => {
        draft.contacts = draft.contacts.filter(
          (contact) => contact.id !== action.targetId
        );
      });
    case "toggleFavorite":
      return produce(state, (draft) => {
        const contact = draft.contacts.find(
          (contact) => contact.id === action.id
        );
        if (contact) {
          contact.favorite = !contact.favorite;
        }
      });
    default:
      throw new Error();
  }
}

export function ContactContainer() {
  const [storedState, dispatch] = useReducer(reducer, initialState);
  const [deleting, setDeleting] = useState(null);

  const handleAddContact = (newContact) => {
    dispatch({ type: "add", newContact });
  };

  const handleDeleteContact = (targetId) => {
    dispatch({ type: "delete", targetId });
    setDeleting(null);
  };

  const handleToggleFavorite = (id) => {
    dispatch({ type: "toggleFavorite", id });
  };

  const selectItemToDelete = (contactId) => {
    setDeleting(
      storedState.contacts.find((contact) => contact.id === contactId)
    );
  };

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

      <div className="container mt-3">
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
