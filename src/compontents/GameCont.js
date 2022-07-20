import styles from "./GameCont.module.css";
import Square from "./Square";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game";
import { useEffect } from "react";
function GameCont(props) {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let clicked = false;
  const dispatch = useDispatch();
  const curSymbol = useSelector((state) => state.curSymbol);
  // useEffect(() => {
  //   clicked = true;
  //   setTimeout(() => {
  //     clicked = false;
  //   }, 100);
  // }, [curSymbol]);
  function clickHandler(id, event) {
    dispatch(gameActions.writeMove(id));
    event.target.innerHTML = curSymbol;
    dispatch(gameActions.check());
    dispatch(gameActions.isWin());
    dispatch(gameActions.isDraw());
    dispatch(gameActions.changeSymbol());
  }

  return (
    <div className={styles.container}>
      {keys.map((key) => (
        <Square
          clicked={clicked}
          char={curSymbol}
          click={clickHandler.bind(undefined, key)}
          key={key}
          id={key}
        ></Square>
      ))}
    </div>
  );
}
export default GameCont;
