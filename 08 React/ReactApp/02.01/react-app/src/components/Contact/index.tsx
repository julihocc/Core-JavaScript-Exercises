import { Phone } from "../Phone";

export const Contact = ({
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
