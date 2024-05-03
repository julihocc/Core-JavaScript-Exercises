// import Sidenav from "./components/Sidenav";
import SidenavItem from "./components/SidenavItem";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      {/* <Sidenav headline={"A headline"}>
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
      </Sidenav> */}

      <SidenavItem
        title="Test"
        url="/test"
        icon={() => <i className="fa fa-home" />}
      />
    </>
  );
}

export default App;
