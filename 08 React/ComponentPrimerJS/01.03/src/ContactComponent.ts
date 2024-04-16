// Create a component that will be used in the application
// Utilize just vanilla JS to create the component
// This component will be used to display contacts in the application

// Create a class called ContactComponent
// This class will have a constructor that accepts a single parameter called contact
// The constructor will set the contact property to the value of the contact parameter
// The class will have a render method that returns a string template
// The template will be an HTML string that displays the contact's name, phone number, and address
// The class will have a method called render that returns the template
// Export the class

export default class ContactComponent {
  contact: Contact;
  constructor(contact: Contact) {
    this.contact = contact;
  }

  render(): HTMLElement {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = this.contact.name;
    p.textContent = this.contact.phone;

    div.appendChild(h2);
    div.appendChild(p);

    return div;
  }
}