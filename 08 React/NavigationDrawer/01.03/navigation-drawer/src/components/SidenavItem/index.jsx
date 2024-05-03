import styles from "./SidenavItem.module.css";

const SidenavItem = ({ title, url, icon }) => {
  console.log("SidenavItem rendered");
  console.log(`title: ${title}, url: ${url}`);
  return (
    <div className={`${styles["sidenav-item"]}`}>
      <a href={url} className={`${styles["sidenav-item-link"]}`}>
        {icon && (
          <span className={`${styles["sidenav-item-icon"]}`}>{icon()}</span>
        )}
        <span className={`${styles["sidenav-item-title"]}`}>{title}</span>
      </a>
    </div>
  );
};

export default SidenavItem;
