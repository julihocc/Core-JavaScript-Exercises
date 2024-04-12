var _ContactListComponent_id;
import ContactComponent from "./ContactComponent.js";
class ContactListComponent {
    constructor(retrieveContacts) {
        _ContactListComponent_id.set(this, Symbol("contact-list-component"));
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
    create() {
        this.h1.textContent = "Contacts";
        this.div.appendChild(this.h1);
        this.div.appendChild(this.ul);
        this.render();
        return this.div;
    }
}
_ContactListComponent_id = new WeakMap();
export default ContactListComponent;
