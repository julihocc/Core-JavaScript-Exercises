import { useState, ChangeEvent, FormEvent } from "react";

export function ContactForm({ onAddContact }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{0,10}$/;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameIsValid && emailIsValid && phoneIsValid) {
      const newContact: IContact = { name, email, phone, id: null };
      onAddContact(newContact);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      console.error("Form is invalid");
      if (!nameIsValid) console.error("Name is invalid");
      if (!emailIsValid) console.error("Email is invalid");
      if (!phoneIsValid) console.error("Phone is invalid");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        setNameIsValid(nameRegex.test(value));
        break;
      case "email":
        setEmail(value);
        setEmailIsValid(emailRegex.test(value));
        break;
      case "phone":
        setPhone(value);
        setPhoneIsValid(phoneRegex.test(value));
        break;
      default:
        // Handle unexpected input names
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="was-validated">
      <div className="m-3">
        <label htmlFor="name" className="form-label">
          Name:{" "}
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          className="form-control"
          name="name"
          onChange={handleInputChange}
          pattern={nameRegex.source}
          required
        />
        <div className="valid-feedback">Looks good</div>
        <div className="invalid-feedback">Please enter a valid name</div>
      </div>
      <div className="m-3">
        <label htmlFor="email" className="form-label">
          Email:{" "}
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleInputChange}
          className="form-control"
          pattern={emailRegex.source}
        />
        <div className="valid-feedback">Optional</div>
        <div className="invalid-feedback">Please enter a valid email</div>
      </div>
      <div className="m-3">
        <label htmlFor="phone" className="form-label">
          Phone:{" "}
        </label>
        <input
          type="tel"
          placeholder="Up to 10 digits"
          value={phone}
          name="phone"
          onChange={handleInputChange}
          className="form-control"
          pattern={phoneRegex.source}
        />
        <div className="valid-feedback">Optional</div>
        <div className="invalid-feedback">Please enter a valid phone</div>
      </div>
      <button className="btn btn-primary m-3" type="submit">
        Add Contact
      </button>
    </form>
  );
}
