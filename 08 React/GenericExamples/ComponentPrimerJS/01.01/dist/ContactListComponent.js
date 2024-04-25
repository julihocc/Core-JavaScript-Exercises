// Using vanilla JS to create a component that will be used in the application
// This component will be used to display a list of contacts in the application
class ContactListComponent {
    constructor(contacts, Component) {
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
export {};
