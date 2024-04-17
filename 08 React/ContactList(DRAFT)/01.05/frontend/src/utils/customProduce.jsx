export default function customProduce(initialState, producer) {
  // Create a deep copy of the initial state to serve as the draft
  const draft = JSON.parse(JSON.stringify(initialState));
  console.log("draft", draft);

  // Call the producer function with the draft and get the new state
  const newState = producer(draft);
  console.log("newState", newState);
  // Return the new state
  return newState;
}
