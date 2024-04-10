import { ActionKey } from "./actions.js";

// // Alternative 1
// import { ActionKey } from "./actions.js";
// interface EventTarget {
//   readonly dataset: DOMStringMap;
// }
// interface ActionButton extends HTMLButtonElement, EventTarget {
//   dataset: { action: ActionKey };
// }

// Alternative 2
// import { ActionKey } from "./actions.js";
// declare global {
//   interface EventTarget {
//     readonly dataset: DOMStringMap;
//   }
//   interface ActionButton extends HTMLButtonElement, EventTarget {
//     dataset: { action: ActionKey };
//   }
// }

interface ActionButton<T extends string> extends HTMLButtonElement {
  dataset: { action: T };
}

interface EventTarget {
  readonly dataset: DOMStringMap;
}

interface HTMLDivElement extends EventTarget {}
