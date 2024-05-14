import SidenavPresenter from "../SidenavPresenter";
import SidenavGroup from "../SidenavGroup";
import SidenavItem from "../SidenavItem";
import SidenavProvider from "../SidenavContext";

const SidenavContainer = ({ closingMode = "hidden", isOpen = "false" }) => {
  return (
    <SidenavProvider closingMode={closingMode} isOpen={isOpen}>
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
            icon={() => <i className="fa fa-info" />}
            getBadgeValue={() => 0}
            onClick={() => console.log("About")}
          >
            <SidenavItem
              title="Sub-About"
              icon={() => <i className="fa fa-info" />}
              getBadgeValue={() => 0}
              onClick={() => console.log("Sub-About")}
            />
            <SidenavItem
              title="Sub-About 2"
              icon={() => <i className="fa fa-info" />}
              getBadgeValue={() => 0}
              onClick={() => console.log("Sub-About 2")}
            />
          </SidenavItem>
        </SidenavGroup>
      </SidenavPresenter>
    </SidenavProvider>
  );
};

export default SidenavContainer;
