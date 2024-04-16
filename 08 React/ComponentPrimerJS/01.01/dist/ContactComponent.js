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
    constructor(contact) {
        this.contact = contact;
    }
    render() {
        return `
      <div>
        <h2>${this.contact.name}</h2>
        <p>${this.contact.phone}</p>
      </div>
    `;
    }
}
