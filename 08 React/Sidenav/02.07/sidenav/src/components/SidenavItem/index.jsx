import styles from "./SidenavItem.module.css";
import { useSidenavState } from "../SidenavContext";
import { useRef } from "react";

const SidenavItem = ({
  title,
  onClick = () => null,
  icon = () => null,
  getBadgeValue = () => null,
  children,
}) => {
  // const { closingMode } = useContext(SidenavContext);
  const sideNavState = useSidenavState();
  const { closingMode, isOpen } = sideNavState;
  const containerRef = useRef(null);

  console.log(`closingMode: ${closingMode}`);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      // containerRef.current.style.zIndex = 1;
      containerRef.current.style.backgroundColor = "lightgray";
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      // containerRef.current.style.zIndex = 0;
      containerRef.current.style.backgroundColor = "";
    }
  };

  return (
    <div className={`${styles["sidenav-item-cage"]}`}>
      <div
        className={`${styles["sidenav-item"]} ${styles[closingMode]} ${isOpen ? styles.open : styles.close}`}
        onClick={onClick}
        ref={containerRef}
      >
        <div className={`${styles["sidenav-item-link"]} `}>
          {icon && (
            <span className={`${styles["sidenav-item-icon"]}`}>{icon()}</span>
          )}
          <span
            className={`${styles["sidenav-item-title"]} ${styles[closingMode]}`}
          >
            {title}
          </span>
        </div>
        {getBadgeValue() !== null && (
          <span
            className={`${styles["sidenav-item-badge"]} ${styles[closingMode]}`}
          >
            {getBadgeValue()}
          </span>
        )}
      </div>
      <div
        className={`${styles["sidenav-item-children"]} ${styles[closingMode]}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default SidenavItem;
