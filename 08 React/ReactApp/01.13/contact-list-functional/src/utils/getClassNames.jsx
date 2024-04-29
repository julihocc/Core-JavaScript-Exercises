export function getClassNames(...args) {
  let classes = "";
  for (let arg of args) {
    if (typeof arg === "string") {
      classes += " " + arg;
    } else if (typeof arg === "object") {
      for (let key in arg) {
        if (arg[key]) {
          classes += " " + key;
        }
      }
    }
  }
  return classes.trim();
}
