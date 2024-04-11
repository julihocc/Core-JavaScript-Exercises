import SubmitContactComponent from "./SubmitContactComponent.js";


const body = document.querySelector("body") as HTMLBodyElement;

// const submitHandler = (event: Event) => {
//   event.preventDefault();
//   console.log("Form submitted");
// };

const submitHandler = (event: Event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const form = event.target as HTMLFormElement;
  const nameInput = form.elements.namedItem('name') as HTMLInputElement;
  const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;

  const name = nameInput.value;
  const phone = phoneInput.value;

  console.log(`Name: ${name}, Phone: ${phone}`);
};

const submitContactComponent = new SubmitContactComponent(
  "contactHandler",
  submitHandler
);

console.log(submitContactComponent);

body.appendChild(submitContactComponent.render());
