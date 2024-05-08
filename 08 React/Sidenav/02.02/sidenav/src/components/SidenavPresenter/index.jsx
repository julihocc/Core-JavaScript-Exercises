import { useState } from "react";
import styles from "./SidenavPresenter.module.css";
import { useContext } from "react";
import SidenavContext from "../SidenavContext";

export default function SidenavPresenter({ children }) {
  const { closingMode } = useContext(SidenavContext);
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
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
