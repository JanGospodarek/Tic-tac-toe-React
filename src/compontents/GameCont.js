import styles from "./GameCont.module.css";
import Square from "./Square";
function GameCont() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.container}>
      {keys.map((key) => (
        <Square key={key} id={key}></Square>
      ))}
    </div>
  );
}
export default GameCont;
