import styles from "./SidenavItem.module.css";

const SidenavItem = ({ title, url, icon }) => {
  console.log("SidenavItem rendered");
  console.log(`title: ${title}, url: ${url}`);
  return (
    <a href={url} className={styles.sidenavItem}>
      {icon && <span className={styles.sidenavItemIcon}>{icon()}</span>}
      <span className={styles.sidenavItemText}>{title}</span>
    </a>
  );
};

export default SidenavItem;