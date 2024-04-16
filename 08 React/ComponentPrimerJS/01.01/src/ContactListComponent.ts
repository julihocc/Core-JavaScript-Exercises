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

class ContactListComponent<
  T extends { new (contact: Contact): { render: () => string } }
> {
  contacts: Contact[];
  Component: T;

  constructor(contacts: Contact[], Component: T) {
    this.contacts = contacts;
    this.Component = Component;
  }

  render() {
    return `
      <div>
        <h1>Contacts</h1>
        <ul>
          ${this.contacts
            .map((contact) => new this.Component(contact).render())
            .join("")}
        </ul>
      </div>
    `;
  }
}
