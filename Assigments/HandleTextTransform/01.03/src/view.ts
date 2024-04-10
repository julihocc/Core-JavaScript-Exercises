import { ActionsMap, ActionKey } from "./actions.js";
import { isActionButton } from "./utility.js";

type Config = {
  actions: ActionsMap;
  // we need access to some DOM elements
  textInput: HTMLInputElement;
  buttonContainer: HTMLElement;
  textOutput: HTMLDivElement;
};

export function init(config: Config) {
  let actionType: ActionKey;
  let fragment = document.createDocumentFragment();
  for (actionType in config.actions) {
    console.log(actionType);
    let button = createButton(actionType, config.actions[actionType].label);
    fragment.appendChild(button);
  }

  config.buttonContainer.appendChild(fragment);
  config.buttonContainer.addEventListener(
    "click",
    handleButtonClick.bind(
      config.buttonContainer,
      config.textInput,
      config.textOutput
    )
  );
  
  config.textOutput.addEventListener(
    "textTransform",
    handleTextTransform.bind(config.textOutput, config.actions)
  );
}

function handleTextTransform(
  this: HTMLDivElement,
  actions: ActionsMap,
  customEvent: CustomEventInit<TextTransformDetail>
) {
  console.log("handleTextTransform");
  console.log("arguments", arguments);
  console.log(customEvent.detail);
  const action = customEvent.detail?.action;
  const text = customEvent.detail?.text;
  if (action && text) {
    const transformedText = actions[action].handler(text);
    this.innerText = transformedText;
  }
}

type TextTransformDetail = {
  action: ActionKey;
  text: string;
};

function handleButtonClick(
  textInput: HTMLInputElement,
  textOutput: HTMLDivElement,
  event: MouseEvent
) {
  event.preventDefault();
  const target = event.target;
  if (isActionButton(target)) {
    // const actionType = (target as HTMLElement).dataset
    //   .action as ActionKey;
    // console.log(actionType);
    const action = target.dataset.action;
    console.log("action", action);
    const text = textInput.value;
    console.log("text", text);
    const event = new CustomEvent<TextTransformDetail>("textTransform", {
      detail: { action, text },
    });
    textOutput.dispatchEvent(event);
  }
}

function createButton(actionType: ActionKey, actionLabel: string) {
  const button = document.createElement("button");
  button.dataset.action = actionType;
  button.innerText = actionLabel;
  return button;
}
