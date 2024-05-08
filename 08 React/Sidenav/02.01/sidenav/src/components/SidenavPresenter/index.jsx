import { useState } from "react";
import styles from "./SidenavPresenter.module.css";
import SidenavContext from "../SidenavContext";

export default function SidenavPresenter({ children, closingMode = "hidden" }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <SidenavContext.Provider value={{ closingMode }}>
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
    </SidenavContext.Provider>
  );
}
