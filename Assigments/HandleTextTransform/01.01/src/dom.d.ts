interface EventTarget extends HTMLElement {}

interface ActionButton extends HTMLButtonElement, EventTarget {
  dataset: { action: "toUpper" | "split" };
}
