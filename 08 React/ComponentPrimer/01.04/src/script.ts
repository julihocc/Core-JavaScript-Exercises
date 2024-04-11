import SubmitContactComponent from "./SubmitContactComponent.js";
import ContactListComponent from "./ContactListComponent.js";
import ContactComponent from "./ContactComponent.js";

const body = document.querySelector("body") as HTMLBodyElement;

const submitHandler = (event: Event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const form = event.target as HTMLFormElement;
  const nameInput = form.elements.namedItem("name") as HTMLInputElement;
  const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;

  const name = nameInput.value;
  const phone = phoneInput.value;

  const contactData: Contact = { name, phone };

  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts.push(contactData);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  console.log("Form submitted");

  // print updated contancts
  console.log(JSON.parse(localStorage.getItem("contacts") || "[]"));
};

const submitContactComponent = new SubmitContactComponent(
  "contactHandler",
  submitHandler
);

body.appendChild(submitContactComponent.create());

const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

const contactListComponent = new ContactListComponent(
  contacts,
  ContactComponent
);

body.appendChild(contactListComponent.create());
