import { createContext, useContext, useState } from "react";

const counterContext = createContext([0, 0, 0]); // returns an object with Provider and Consumer properties

export function useCounterContext() {
  return useContext(counterContext);
}

export function CounterProvider({ children }) {
  const [providerState, setProviderState] = useState([1, 2, 3]);

  // TODO Add validation
  function setIndexedSatate(index, value) {
    const newState = [...providerState];
    newState[index] = value;
    setProviderState(newState);
  }

  return (
    <counterContext.Provider value={[providerState, setIndexedSatate]}>
      {children}
    </counterContext.Provider>
  );
}
