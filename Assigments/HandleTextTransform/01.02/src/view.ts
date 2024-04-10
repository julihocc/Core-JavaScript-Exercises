import { ActionsMap, ActionKey } from "./actions";

type Config = {
  actions: ActionsMap;
  // we need access to some DOM elements
  textInput: HTMLInputElement;
  buttonContainer: HTMLElement;
  textOutput: HTMLDivElement;
};

export function init(config: Config) {
  for (let actionType in config.actions) {
    console.log(actionType);
  }
}

function createButton(actionType: ActionKey, actionLabel: string) {
  const button = document.createElement("button");
  button.dataset.action = actionType;
  button.innerText = actionLabel;
  return button;
}
