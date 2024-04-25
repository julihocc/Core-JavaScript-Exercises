var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ContactComponent_id;
class ContactComponent {
    constructor(contact) {
        this.contact = contact;
        // FIXME: Provide the ID as an argument to the constructor
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
