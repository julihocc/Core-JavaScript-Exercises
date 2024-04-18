import { useState } from "react";
import Counter from "../Counter";

// export default class CounterApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: "",
//     };
//     this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
//   }
//   handleOnChangeInput(event) {
//     const { target } = event;
//     this.setState({ inputValue: target.value });
//   }
//   render() {
//     const { inputValue } = this.state;
//     return (
//       <>
//         <input
//           value={inputValue}
//           onChange={this.handleOnChangeInput}
//           type="text"
//         />
//         <Counter init={inputValue} />
//         <Counter init={inputValue} />
//       </>
//     );
//   }
// }

// Refactor to functional component
export default function CounterApp() {
  const [inputValue, setInputValue] = useState("");
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  const [counts, setCounts] = useState([0, 0]);

  function handleOnChangeInput(event) {
    const { target } = event;
    setInputValue(target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={handleOnChangeInput} type="text" />
      {/* <Counter init={inputValue} count={count1} setCount={setCount1} />
      <Counter init={inputValue} count={count2} setCount={setCount2} /> */}
      {/* Dynamically render Counters based on counts */}
      {counts.map((count, index) => (
        <Counter
          key={index}
          init={inputValue}
          count={count}
          setCount={(newCount) => {
            const newCounts = [...counts];
            newCounts[index] = newCount;
            setCounts(newCounts);
          }}
        />
      ))}
    </>
  );
}
