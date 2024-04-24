import React, { useEffect, useState } from "react";
import ListItem from "../ListItem";

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // import from local file animated-counter\public\data.json
      const response = await fetch("data.json");
      const fetched = await response.json();
      console.log("fetched", fetched);
      setData(fetched);
    };
    // fetchData();
    setTimeout(fetchData, 10000);
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <ul>
      {console.log("data@ul", data)}
      {data &&
        data.map((element) => {
          console.log("rendeling element: ", element);
          return <ListItem key={element.id} data={element} />;
        })}
    </ul>
  );
}
