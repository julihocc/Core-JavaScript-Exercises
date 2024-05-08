import styles from "./SidenavItem.module.css";
import { useSidenavState } from "../SidenavContext";

const SidenavItem = ({
  title,
  onClick = () => null,
  icon = () => null,
  getBadgeValue = () => null,
}) => {
  // const { closingMode } = useContext(SidenavContext);
  const sideNavState = useSidenavState();
  const { closingMode, isOpen } = sideNavState;

  console.log(`closingMode: ${closingMode}`);

  return (
    <div
      className={`${styles["sidenav-item"]} ${styles[closingMode]} ${isOpen ? styles.open : styles.close}`}
      onClick={onClick}
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
  );
};

export default SidenavItem;
