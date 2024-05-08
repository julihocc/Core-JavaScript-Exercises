import SidenavPresenter from "../SidenavPresenter";
import SidenavGroup from "../SidenavGroup";
import SidenavItem from "../SidenavItem";
import SidenavContext from "../SidenavContext";

const SidenavContainer = () => {
  return (
    <SidenavContext.Provider value={{ closingMode: "compact" }}>
      <SidenavPresenter>
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
      </SidenavPresenter>
    </SidenavContext.Provider>
  );
};

export default SidenavContainer;
