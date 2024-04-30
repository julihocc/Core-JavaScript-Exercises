import { useState } from "react";
import styles from "./Sidenav.module.css";

export default function Sidenav() {
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
      >
        <a className={styles.closebtn} onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </span>
    </>
  );
}
