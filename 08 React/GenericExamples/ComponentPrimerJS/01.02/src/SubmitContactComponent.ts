// Use just vanilla JS

export default class SubmitContactComponent {
  id: string;
  submitHandler: (event: Event) => void;

  constructor(id: string, submitHandler: (event: Event) => void) {
    this.id = id;
    this.submitHandler = submitHandler.bind(this);
  }

  render(): HTMLElement {
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
