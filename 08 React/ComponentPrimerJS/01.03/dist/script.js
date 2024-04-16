import SubmitContactComponent from "./SubmitContactComponent.js";
const body = document.querySelector("body");
const submitHandler = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    const form = event.target;
    const nameInput = form.elements.namedItem("name");
    const phoneInput = form.elements.namedItem("phone");
    const name = nameInput.value;
    const phone = phoneInput.value;
    const contactData = { name, phone };
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log("Form submitted");
    // print updated contancts
    console.log(JSON.parse(localStorage.getItem("contacts") || "[]"));
};
const submitContactComponent = new SubmitContactComponent("contactHandler", submitHandler);
console.log(submitContactComponent);
body.appendChild(submitContactComponent.render());
