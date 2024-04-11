// Using vanilla JS to create a component that will be used in the application
// This component will be used to display a list of contacts in the application
class ContactListComponent {
    constructor(contacts, Component) {
        this.contacts = contacts;
        this.Component = Component;
    }
    render() {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const ul = document.createElement('ul');
        h1.textContent = 'Contacts';
        div.appendChild(h1);
        this.contacts.forEach((contact) => {
            const contactComponent = new this.Component(contact);
            const contactElement = contactComponent.render();
            ul.appendChild(contactElement);
        });
        div.appendChild(ul);
        return div;
    }
}
export {};
