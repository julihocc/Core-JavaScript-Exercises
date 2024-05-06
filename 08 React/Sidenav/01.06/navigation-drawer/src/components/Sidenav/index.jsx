import { useState } from "react";
import styles from "./Sidenav.module.css";

export default function Sidenav({  children }) {
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
        className={`${styles.sidenav} ${isOpen ? styles.open : styles.close}`}
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
