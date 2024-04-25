import SubmitContactComponent from "./SubmitContactComponent.js";
const body = document.querySelector("body");
// const submitHandler = (event: Event) => {
//   event.preventDefault();
//   console.log("Form submitted");
// };
const submitHandler = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    const form = event.target;
    const nameInput = form.elements.namedItem('name');
    const phoneInput = form.elements.namedItem('phone');
    const name = nameInput.value;
    const phone = phoneInput.value;
    console.log(`Name: ${name}, Phone: ${phone}`);
};
const submitContactComponent = new SubmitContactComponent("contactHandler", submitHandler);
console.log(submitContactComponent);
body.appendChild(submitContactComponent.render());
