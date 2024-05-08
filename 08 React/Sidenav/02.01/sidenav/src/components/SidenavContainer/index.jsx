import SidenavPresenter from "../SidenavPresenter";
import SidenavGroup from "../SidenavGroup";
import SidenavItem from "../SidenavItem";

const SidenavContainer = () => {
  return (
    <>
      <SidenavPresenter closingMode="compact">
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
    </>
  );
};

export default SidenavContainer;
