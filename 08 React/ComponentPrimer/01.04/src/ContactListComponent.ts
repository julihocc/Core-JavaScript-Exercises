// Using vanilla JS to create a component that will be used in the application
// This component will be used to display a list of contacts in the application

// Create a class called ContactListComponent
// This class will have a constructor that accepts a single parameter called contacts
// The constructor will set the contacts property to the value of the contacts parameter
// The class will have a render method that returns a string template
// The template will be an HTML string that displays a list of contacts
// The class will have a method called render that returns the template
// Export the class

// Assuming ContactComponent is imported from another module

import ContactComponent from "./ContactComponent.js";

export default class ContactListComponent {
  #id = Symbol("contact-list-component");
  contacts: Contact[];
  retrieveContacts: () => Contact[];
  div: HTMLDivElement;
  h1: HTMLHeadingElement;
  ul: HTMLUListElement;

  constructor(retrieveContacts: () => Contact[]) {
    this.contacts = retrieveContacts();
    this.retrieveContacts = retrieveContacts.bind(this);
    this.div = document.createElement("div");
    this.h1 = document.createElement("h1");
    this.ul = document.createElement("ul");
  }

  render() {
    this.div.removeChild(this.ul);
    this.ul = document.createElement("ul");
    this.contacts = this.retrieveContacts();
    this.contacts.forEach((contact) => {
      const contactComponent = new ContactComponent(contact);
      const contactElement = contactComponent.create();
      this.ul.appendChild(contactElement);
    });
    this.div.appendChild(this.ul);
  }

  create(): HTMLElement {
    this.h1.textContent = "Contacts";
    this.div.appendChild(this.h1);
    this.div.appendChild(this.ul);
    this.render();
    return this.div;
  }
}
