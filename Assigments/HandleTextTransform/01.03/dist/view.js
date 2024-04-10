import { isActionButton } from "./utility.js";
export function init(config) {
    let actionType;
    let fragment = document.createDocumentFragment();
    for (actionType in config.actions) {
        console.log(actionType);
        let button = createButton(actionType, config.actions[actionType].label);
        fragment.appendChild(button);
    }
    config.buttonContainer.appendChild(fragment);
    config.buttonContainer.addEventListener("click", handleButtonClick.bind(config.buttonContainer, config.textInput, config.textOutput));
    config.textOutput.addEventListener("textTransform", handleTextTransform.bind(config.textOutput, config.actions));
}
function handleTextTransform(actions, customEvent) {
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
function handleButtonClick(textInput, textOutput, event) {
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
        const event = new CustomEvent("textTransform", {
            detail: { action, text },
        });
        textOutput.dispatchEvent(event);
    }
}
function createButton(actionType, actionLabel) {
    const button = document.createElement("button");
    button.dataset.action = actionType;
    button.innerText = actionLabel;
    return button;
}
