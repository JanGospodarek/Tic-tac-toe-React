import styles from "./GameCont.module.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game";
import { useEffect } from "react";
function GameCont(props) {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const dispatch = useDispatch();
  const curSymbol = useSelector((state) => state.curSymbol);
  const stopGame = useSelector((state) => state.stopGame);
  function clickHandler(id, event) {
    if (stopGame) return;
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
        <Button
          char={curSymbol}
          click={clickHandler.bind(undefined, key)}
          key={key}
          id={key}
        ></Button>
      ))}
    </div>
  );
}
export default GameCont;
