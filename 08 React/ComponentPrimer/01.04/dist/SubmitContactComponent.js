// Use just vanilla JS
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SubmitContactComponent_id;
class SubmitContactComponent {
    constructor(submitHandler) {
        _SubmitContactComponent_id.set(this, Symbol("submit-contact-component"));
        this.submitHandler = submitHandler.bind(this);
    }
    get id() {
        return String(__classPrivateFieldGet(this, _SubmitContactComponent_id, "f"));
    }
    create() {
        const div = document.createElement("div");
        const form = document.createElement("form");
        const nameLabel = document.createElement("label");
        const nameInput = document.createElement("input");
        const phoneLabel = document.createElement("label");
        const phoneInput = document.createElement("input");
        const submitButton = document.createElement("button");
        form.id = this.id;
        nameLabel.htmlFor = "name";
        nameLabel.textContent = "Name:";
        nameInput.type = "text";
        nameInput.id = `${this.id}-name`;
        nameInput.name = "name";
        nameInput.required = true;
        phoneLabel.htmlFor = "phone";
        phoneLabel.textContent = "Phone:";
        phoneInput.type = "tel";
        phoneInput.id = `${this.id}-phone`;
        phoneInput.name = "phone";
        phoneInput.required = true;
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(phoneLabel);
        form.appendChild(phoneInput);
        form.appendChild(submitButton);
        div.appendChild(form);
        form.addEventListener("submit", this.submitHandler);
        return div;
    }
}
_SubmitContactComponent_id = new WeakMap();
export default SubmitContactComponent;
