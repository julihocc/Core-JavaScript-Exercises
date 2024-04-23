import { useState, useEffect } from "react";

// A custom hook to encapsulate the serialization logic
export default function useSerializable(key, initialState) {
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
