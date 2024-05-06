import styles from "./Square.module.css";

export default function Square(props: SquareProps) {
  return (
    <button className={`${styles.square}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
