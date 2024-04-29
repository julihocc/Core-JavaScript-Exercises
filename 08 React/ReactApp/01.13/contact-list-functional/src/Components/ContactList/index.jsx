import {Contact} from "../Contact";

const sortByFavorite = (a, b) => (b.favorite ? 1 : -1);

export function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
  return (
    <div className="list-group">
      {[...contacts].sort(sortByFavorite).map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
          onToggleFavorite={() => onToggleFavorite(contact.id)}
          className="list-group-item list-group-item-action"
        />
      ))}
    </div>
  );
}



