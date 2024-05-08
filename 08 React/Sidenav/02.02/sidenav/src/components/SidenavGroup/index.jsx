import styles from "./SidenavGroup.module.css";
import SidenavContext from "../SidenavContext";
import { useContext } from "react";

export default function SidenavGroup({ title, children }) {
  const { closingMode } = useContext(SidenavContext);
  return (
    <div
      className={`${styles.sidenavGroup} 
      ${styles[closingMode]}
      `}
    >
      <span
        className={`
        ${styles.sidenavGroupTitle}
        ${styles[closingMode]}
        `}
      >
        {title}
      </span>
      {children}
    </div>
  );
}
