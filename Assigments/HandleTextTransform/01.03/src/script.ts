import { getById, isActionButton } from "./utility.js";
import { init } from "./view.js";
import { actions } from "./actions.js";

const textInput = getById<HTMLInputElement>("text");
const buttonContainer = getById<HTMLDivElement>("container");
const textOutput = getById<HTMLDivElement>("buttons");

init({ actions, textInput, buttonContainer, textOutput });
