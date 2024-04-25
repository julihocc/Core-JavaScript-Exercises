import "bootstrap/dist/css/bootstrap.min.css";
import { MessageContainer } from "./Components/MessageContainer";
import { useEffect } from "react";

function App() {
  // useEffect  to check if the component is re-rendered
  useEffect(() => {
    console.log("App re-rendered");
  } );

  return (
    <div className="App container py-5 bg-light">
      <h1 className="text-center mb-4 text-primary">App</h1>
      <MessageContainer />
    </div>
  );
}

export default App;
