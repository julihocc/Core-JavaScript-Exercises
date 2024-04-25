import { memo } from "react"; // Import memo for optimization
import PropTypes from "prop-types";
import Contact from "../Contact";

const sortByFavorite = (a, b) => (b.favorite ? 1 : -1);

function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
  // No need for a constructor in a functional component

  return (
    <ul>
      {[...contacts].sort(sortByFavorite).map((contact) => (
        <Contact
          key={contact.id}
          {...contact} // Spread properties for cleaner code
          onDeleteContact={() => onDeleteContact(contact.id)}
          onToggleFavorite={() => onToggleFavorite(contact.id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
  onToggleFavorite: PropTypes.func,
};

export default memo(ContactList); // Use memo for optimization
