import styles from "./SidenavItem.module.css";

const SidenavItem = ({ title, onClick, icon, getBadgeValue }) => {
  return (
    <div className={`${styles["sidenav-item"]}`} onClick={onClick}>
      <div className={`${styles["sidenav-item-link"]}`}>
        {icon && (
          <span className={`${styles["sidenav-item-icon"]}`}>{icon()}</span>
        )}
        <span className={`${styles["sidenav-item-title"]}`}>{title}</span>
      </div>
      {getBadgeValue() && (
        <span className={`${styles["sidenav-item-badge"]}`}>
          {getBadgeValue()}
        </span>
      )}
    </div>
  );
};

export default SidenavItem;
