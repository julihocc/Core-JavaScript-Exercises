import { useEffect, useState, createContext } from "react";

// Create a new context
export const DataContext = createContext();

// Create a provider component
export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const fetched = await response.json();
      console.log("fetched", fetched);
      setData(fetched);
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
