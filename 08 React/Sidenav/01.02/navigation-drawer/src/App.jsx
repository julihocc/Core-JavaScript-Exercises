import Sidenav from "./components/Sidenav";
import SidenavItem from "./components/SidenavItem";

function App() {
  return (
    <>
      <Sidenav>
        <SidenavItem
          title="Homie"
          url="/"
          icon={() => <i className="fa fa-home" />}
        />
        <SidenavItem
          title="About"
          url="/about"
          icon={() => <i className="fa fa-user" />}
        />
        <SidenavItem
          title="Services"
          url="/services"
          icon={() => <i className="fa fa-cog" />}
        />
        <SidenavItem
          title="Contact"
          url="/contact"
          icon={() => <i className="fa fa-envelope" />}
        />
      </Sidenav>
    </>
  );
}

export default App;
