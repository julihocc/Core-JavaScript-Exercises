export function init(config) {
    for (let actionType in config.actions) {
        console.log(actionType);
    }
}
function createButton(actionType, actionLabel) {
    const button = document.createElement("button");
    button.dataset.action = actionType;
    button.innerText = actionLabel;
    return button;
}
