import { useState, useEffect } from "react";

export function useSerializable(key: Key, initialState: CounterInitialState) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState();
    } catch (error) {
      console.error(error);
      return initialState();
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
