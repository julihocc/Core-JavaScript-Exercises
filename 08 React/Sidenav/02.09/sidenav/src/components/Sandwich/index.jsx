import styles from "./Sandwich.module.css";

const Sandwich = ({ isOpen, openNav, closingMode }) => {
  return (
    <span
      style={{ fontSize: "30px", cursor: "pointer" }}
      onClick={openNav}
      className={`styles.sandwich ${isOpen ? styles.sandwichClose : styles.sandwichOpen} ${styles[closingMode]}`}
    >
      &#9776;
    </span>
  );
};

export default Sandwich;
