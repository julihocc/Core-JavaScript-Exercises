import { getById, isActionButton } from "./utility.js";
// window.addEventListener("load", () => {
// const inputElement = document.querySelector("#text");
// const container = document.querySelector("#container");
// const button = document.querySelector("#button");
// const splitButton = document.querySelector("#splitButton");
const inputElement = getById("text");
const container = getById("container");
const buttons = getById("buttons");
// const handleClick = (event: MouseEvent) => {
//   event.preventDefault();
//   //event.target.disabled = true;
//   // container.textContent = callback(inputElement.value);
//   const target = event.target as HTMLButtonElement;
//   console.log(target);
//   if (event.target?.dataset.action === "toUpper") {
//     container.textContent = actions.toUpper(inputElement.value);
//   }
// };
// const handleClick = (event: MouseEvent) => {
//   event.preventDefault();
//   if (event.target instanceof ActionButton) {
//     const target = event.target;
//     console.log(target);
//     if (target.dataset.action === "toUpper") {
//       container.textContent = actions.toUpper(inputElement.value);
//     }
//     if (target.dataset.action === "toSplit") {
//       container.textContent = actions.toSplit(inputElement.value);
//     }
//   }
// };
// function isActionButton(target: any): target is ActionButton {
//   return "dataset" in target && "action" in target.dataset;
// }
const handleClick = (event) => {
    event.preventDefault();
    if (isActionButton(event.target)) {
        const target = event.target;
        if (isActionButton(target)) {
            if (target.dataset.action === "toUpper") {
                container.innerText = actions.toUpper(inputElement.value);
            }
            if (target.dataset.action === "split") {
                container.innerText = actions.split(inputElement.value);
            }
        }
    }
};
const actions = {
    toUpper: (str) => str.toUpperCase(),
    split: (str) => str.split("").join("-"),
};
buttons.addEventListener("click", handleClick);
