import styles from "./SidenavGroup.module.css";

export default function SidenavGroup({ title, children }) {
  return (
    <div className={styles.sidenavGroup}>
      <span className={styles.sidenavGroupTitle}>{title}</span>
      {children}
      {/* <hr className={styles.horizontalLine} /> */}
    </div>
  );
}
