export type ActionsMap = typeof actions;

export type ActionKey = keyof ActionsMap;

export const actions = {
  toUpper: {
    action: "toUpper",
    label: "To Upper",
    handler: (str: string) => str.toUpperCase(),
  },
  split: {
    action: "split",
    label: "Split",
    handler: (str: string) => str.split("").join("-"),
  },
};
