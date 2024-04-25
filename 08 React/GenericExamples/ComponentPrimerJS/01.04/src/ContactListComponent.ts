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
