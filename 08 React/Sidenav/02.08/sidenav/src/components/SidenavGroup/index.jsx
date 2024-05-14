import styles from "./SidenavGroup.module.css";
// import SidenavContext from "../SidenavContext";
// import { useContext } from "react";
import { useSidenavState } from "../SidenavContext";

export default function SidenavGroup({ title, children }) {
  // const { closingMode } = useContext(SidenavContext);

  const sideNavState = useSidenavState();
  // const sideNavDispatch = useSidenavDispatch();

  const { closingMode, isOpen } = sideNavState;

  return (
    <div
      className={`${styles.sidenavGroup} 
        ${isOpen ? styles.open : styles.close}
      ${styles[closingMode]}
      `}
    >
      <span
        className={`
        ${styles.sidenavGroupTitle}
        ${isOpen ? styles.open : styles.close}
        ${styles[closingMode]}
        `}
      >
        {title}
      </span>
      {children}
    </div>
  );
}
