// Use just vanilla JS

class SubmitContactComponent {

  id: string;
  submitHandler: (event: Event) => void;

  constructor(id: string, submitHandler: (event: Event) => void) {
    this.id = id;
    this.submitHandler = submitHandler;
  }

  render() {
    return `
      <div>
        <form id="${this.id}">
          <label for="name">Name:</label>
          <input type="text" id="${this.id}-name" name="name" required>
          <label for="phone">Phone:</label>
          <input type="tel" id="${this.id}-phone" name="phone" required>
          <button type="submit">Submit</button>
        </form>
      </div>
    `;
  }

  bindEvents() {
    const form = document.getElementById(this.id) as HTMLFormElement;
    form.addEventListener("submit", this.submitHandler);
  }
}