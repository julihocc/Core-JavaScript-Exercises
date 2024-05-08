import SidenavContainer from "./components/SidenavContainer";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SidenavContainer closingMode={"hidden"} isOpen={true} />
    </div>
  );
};

export default App;
