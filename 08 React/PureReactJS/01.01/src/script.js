import Counter from "./components/counter.js";

let root = document.getElementById("root");

let reactRoot = ReactDOM.createRoot(root);

// reactRoot.render("Hello World!");

// let counter = new Counter();

// reactRoot.render(counter.render());

reactRoot.render(
  React.createElement(Counter, {
    initialCount: 1,
  })
);
