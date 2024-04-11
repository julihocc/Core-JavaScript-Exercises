// Create a component that will be used in the application
// Utilize just vanilla JS to create the component
// This component will be used to display contacts in the application
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ContactComponent_id;
// Create a class called ContactComponent
// This class will have a constructor that accepts a single parameter called contact
// The constructor will set the contact property to the value of the contact parameter
// The class will have a render method that returns a string template
// The template will be an HTML string that displays the contact's name, phone number, and address
// The class will have a method called render that returns the template
// Export the class
class ContactComponent {
    constructor(contact) {
        this.contact = contact;
        _ContactComponent_id.set(this, Symbol("contact-component"));
    }
    get id() {
        return String(__classPrivateFieldGet(this, _ContactComponent_id, "f"));
    }
    create() {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = this.contact.name;
        p.textContent = this.contact.phone;
        div.appendChild(h2);
        div.appendChild(p);
        return div;
    }
}
_ContactComponent_id = new WeakMap();
export default ContactComponent;
