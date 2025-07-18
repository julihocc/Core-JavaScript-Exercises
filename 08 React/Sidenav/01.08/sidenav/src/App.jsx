import Sidenav from "./components/Sidenav";
import SidenavGroup from "./components/SidenavGroup";
import SidenavItem from "./components/SidenavItem";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <>
      <Sidenav>
        <SidenavGroup title="Group 1">
          <SidenavItem
            title="Home"
            url="/home"
            icon={() => <i className="fa fa-home" />}
            getBadgeValue={() => 0}
            onClick={() => console.log("Home")}
          />
          <SidenavItem
            title="About"
            url="/about"
            icon={() => <i className="fa fa-info" />}
            getBadgeValue={() => 0}
            onClick={() => console.log("About")}
          />
        </SidenavGroup>
      </Sidenav>
    </>
  );
}

export default App;
