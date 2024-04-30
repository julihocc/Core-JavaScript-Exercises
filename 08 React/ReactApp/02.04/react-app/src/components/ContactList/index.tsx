import { Contact } from "../Contact";

const sortByFavorite = (a: IContact, b: IContact) => (b.favorite ? 1 : -1);

export function ContactList({
  contacts,
  onDeleteContact,
  onToggleFavorite,
}: ContactListProps) {
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
