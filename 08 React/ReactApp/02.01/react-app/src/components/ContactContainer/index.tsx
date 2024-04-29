import { useState, useReducer } from "react";
import { ContactForm } from "../ContactForm";
import { ContactList } from "../ContactList";
import { ContactDeletingModal } from "../ContactDeletingModal";
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

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "add":
      return produce(state, (draft) => {
        draft.contacts.push({ ...action.newContact, id: draft.nextId });
        if (draft.nextId) draft.nextId++;
      });
    case "delete":
      return produce(state, (draft) => {
        draft.contacts = draft.contacts.filter(
          (contact: IContact) => contact.id !== action.targetId
        );
      });
    case "toggleFavorite":
      return produce(state, (draft) => {
        const contact = draft.contacts.find(
          (contact: IContact) => contact.id === action.id
        );
        if (contact) {
          contact.favorite = !contact.favorite;
        }
      });
    default:
      return state;
  }
}

export function ContactContainer() {
  const [storedState, dispatch] = useReducer(reducer, initialState);
  const [deleting, setDeleting] = useState<IContact | null>({
    name: "",
    id: null,
  });

  const handleAddContact = (newContact: IContact) => {
    dispatch({ type: ActionType.ADD, newContact });
  };

  const handleDeleteContact = (targetId: ID) => {
    dispatch({ type: ActionType.DELETE, targetId });
    setDeleting(null);
  };

  const handleToggleFavorite = (id: ID) => {
    dispatch({ type: ActionType.TOGGLE_FAVORITE, id });
  };

  const selectItemToDelete = (contactId: ID) => {
    setDeleting(
      storedState.contacts.find((contact: IContact) => contact.id === contactId) || null
    );
  };

  return (
    <>
      {deleting && (
        <ContactDeletingModal
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
