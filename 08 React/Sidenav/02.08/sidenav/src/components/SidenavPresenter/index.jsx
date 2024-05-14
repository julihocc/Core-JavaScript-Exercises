// import { useState } from "react";
import styles from "./SidenavPresenter.module.css";
// import { useContext } from "react";
// import SidenavContext from "../SidenavContext";
import { useSidenavDispatch, useSidenavState } from "../SidenavContext";
import Sandwich from "../Sandwich";

export default function SidenavPresenter({ children }) {
  // const context = useContext(SidenavContext);
  const sidenavState = useSidenavState();
  const sidenavDispatch = useSidenavDispatch();

  const { closingMode, isOpen } = sidenavState;

  // const [isOpen, setIsOpen] = useState(startOpen === "true");

  const openNav = () => {
    // setIsOpen(true);
    sidenavDispatch({ type: "OPEN_SIDENAV" });
    console.log(`isOpen: ${sidenavState.isOpen}`);
  };

  const closeNav = () => {
    sidenavDispatch({ type: "CLOSE_SIDENAV" });
    console.log(`isOpen: ${sidenavState.isOpen}`);
  };

  const toggleNav = () => {
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  return (
    <>
      <div
        id="mySidenav"
        className={`
        ${styles.sidenav} 
        ${isOpen ? styles.open : styles.close} 
        ${styles[closingMode]}`}
        onClick={toggleNav}
      >
        {children}
      </div>
      <Sandwich isOpen={isOpen} closingMode={closingMode} openNav={openNav} />
    </>
  );
}
