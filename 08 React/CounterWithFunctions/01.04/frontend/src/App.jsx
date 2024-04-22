// import Counter from "./components/Counter";
import CounterApp from "./components/CounterApp";
import { memo } from "react";

function App() {
  // return <Counter init={"planet"} />;
  const MemoCounterApp = memo(CounterApp);
  return <MemoCounterApp />;
}

export default App;
