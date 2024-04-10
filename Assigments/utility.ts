import {  ActionKey } from "./actions";
import { ActionButton } from "./dom";

function getById<T extends HTMLElement>(id: string, required?: true): T;
function getById<T extends HTMLElement>(id: string, required?: false): T | null;
function getById(id: string, required: boolean = true) {
  let element = document.getElementById(id);

  if (!element && required) {
    throw new Error(`Element with id ${id} not found`);
  }

  return element;
}
export { getById };

// function isActionButton(target: EventTarget | null): target is ActionButton {
//   return target!==null && "dataset" in target && "action" in target.dataset;
// }

// function isActionButton(target: EventTarget | null): target is ActionButton {
//   return target instanceof HTMLButtonElement && "action" in target.dataset;
// }

export function isActionButton(
  target: EventTarget | null
): target is ActionButton<ActionKey> {
  // if (target === null) return false;
  // return "dataset" in target && "action" in target.dataset;
  return target instanceof HTMLButtonElement && "action" in target.dataset;
}
