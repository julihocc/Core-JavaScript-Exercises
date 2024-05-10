import SidenavContainer from "./components/SidenavContainer";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SidenavContainer closingMode={"compact"} isOpen={false} />
    </div>
  );
};

export default App;
