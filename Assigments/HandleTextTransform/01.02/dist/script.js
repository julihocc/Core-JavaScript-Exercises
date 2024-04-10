import { getById } from "./utility.js";
import { init } from "./view.js";
import { actions } from "./actions.js";
const textInput = getById("text");
const buttonContainer = getById("container");
const textOutput = getById("buttons");
init({ actions, textInput, buttonContainer, textOutput });
