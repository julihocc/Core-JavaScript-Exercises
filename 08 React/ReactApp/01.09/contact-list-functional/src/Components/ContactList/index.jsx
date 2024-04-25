// import { memo } from "react"; // Import memo for optim
// import Contact from "../Contact";

// const sortByFavorite = (a, b) => (b.favorite ? 1 : -1);

// function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
//   // No need for a constructor in a functional component

//   return (
//     <ul>
//       {[...contacts].sort(sortByFavorite).map((contact) => (
//         <Contact
//           key={contact.id}
//           {...contact} // Spread properties for cleaner code
//           onDeleteContact={() => onDeleteContact(contact.id)}
//           onToggleFavorite={() => onToggleFavorite(contact.id)}
//         />
//       ))}
//     </ul>
//   );
// }

// export default memo(ContactList); // Use memo for optimization

import { memo } from "react";
import Contact from "../Contact";

const sortByFavorite = (a, b) => (b.favorite ? 1 : -1);

function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
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

export default memo(ContactList);
