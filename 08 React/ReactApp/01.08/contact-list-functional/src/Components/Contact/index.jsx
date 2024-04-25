// // import React from "react";
// import styles from "./Contact.module.css";
// import Phone from "../Phone";

// const Contact = ({
//   name,
//   email,
//   phone,
//   onDeleteContact,
//   favorite,
//   onToggleFavorite,
// }) => {
//   return (
//     <div>
//       <li
//         className={`
//         card card-body mb-3
//         ${favorite ? styles.favorite : ""}
//       `}
//       >
//         <h4>Name: {name}</h4>
//         {email && <p>Email: {email}</p>}
//         {phone && <Phone phone={phone} />}
//       </li>
//       <button onClick={onDeleteContact}>Delete Contact</button>
//       <button onClick={onToggleFavorite}>{favorite ? "Unmark" : "Mark"}</button>
//     </div>
//   );
// };

// export default Contact;

import Phone from "../Phone";

const Contact = ({
  name,
  email,
  phone,
  onDeleteContact,
  favorite,
  onToggleFavorite,
}) => {
  return (
    <div className="card mb-3">
      <div className={`card-body ${favorite ? "bg-secondary m-3" : ""}`}>
        <h4 className="card-title">Name: {name}</h4>
        {email && <p className="card-text">Email: {email}</p>}
        {phone && <Phone phone={phone} />}
        <button onClick={onDeleteContact} className="btn btn-danger me-2">
          Delete Contact
        </button>
        <button
          onClick={onToggleFavorite}
          className={`btn ${favorite ? "btn-secondary" : "btn-primary"}`}
        >
          {favorite ? "Unmark" : "Mark"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
