// Create a Contact Form component
// It should have a form with fields for name, email, and phone number
// It should have a submit button

import { Component } from "react";



export default class ContactForm extends Component<
  ContactFormProps,
  ContactFormState
> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  render() {
    const { name, email, phone } = this.state;
    const { onAddContact } = this.props;
    return (
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("onSubmint: ", this.state);
          onAddContact(this.state);
          this.setState({ name: "", email: "", phone: "" });
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={({ target }) => {
            this.setState({ name: target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            this.setState({ email: target.value });
          }}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={({ target }) => {
            this.setState({ phone: target.value });
          }}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
