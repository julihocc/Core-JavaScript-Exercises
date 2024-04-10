export const actions = {
    toUpper: {
        action: "toUpper",
        label: "To Upper",
        handler: (str) => str.toUpperCase(),
    },
    split: {
        action: "split",
        label: "Split",
        handler: (str) => str.split("").join("-"),
    },
};
