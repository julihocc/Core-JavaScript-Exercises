// import { useState } from "react";
import styles from "./SidenavPresenter.module.css";
// import { useContext } from "react";
// import SidenavContext from "../SidenavContext";
import { useSidenavDispatch, useSidenavState } from "../SidenavContext";

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
    // setIsOpen(false);
    sidenavDispatch({ type: "CLOSE_SIDENAV" });
    console.log(`isOpen: ${sidenavState.isOpen}`);
  };

  return (
    <>
      <div
        id="mySidenav"
        className={`
        ${styles.sidenav} 
        ${isOpen ? styles.open : styles.close} 
        ${styles[closingMode]}`}
        onClick={closeNav}
      >
        {children}
      </div>
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={openNav}
        className={`${isOpen ? styles.sandwichClose : styles.sandwichOpen}`}
      >
        &#9776;
      </span>
    </>
  );
}
