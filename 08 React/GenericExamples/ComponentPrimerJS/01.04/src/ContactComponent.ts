export default class ContactComponent {
  // FIXME: Provide the ID as an argument to the constructor
  #id = Symbol("contact-component");

  constructor(private contact: Contact) {}

  get id(): string {
    return String(this.#id);
  }

  create(): HTMLElement {
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
