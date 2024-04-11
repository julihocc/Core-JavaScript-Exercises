import SubmitContactComponent from "./SubmitContactComponent.js";
import ContactListComponent from "./ContactListComponent.js";

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

  // rerender
  contactListComponent.render();
  window.location.reload();
};

const submitContactComponent = new SubmitContactComponent(submitHandler);

const form = submitContactComponent.create();
body.appendChild(form);

const retrieveContacts = () => {
  return JSON.parse(localStorage.getItem("contacts") || "[]");
};

const contactListComponent = new ContactListComponent(retrieveContacts);

const contactList = contactListComponent.create();

body.appendChild(contactList);
