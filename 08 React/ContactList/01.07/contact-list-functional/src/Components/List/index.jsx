import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import ListItem from "../ListItem";

export default function List() {
  const data = useContext(DataContext);

  useEffect(() => {
    console.log("data@List", data);
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
