import GameCont from "./compontents/GameCont";
import Button from "./compontents/Button";
import styles from "./compontents/Button.module.css";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const [isStart, setIsStart] = useState(false);
  function start() {
    setIsStart(true);
  }
  function reset() {
    window.location.reload();
  }
  return (
    <Fragment>
      {isStart && <GameCont></GameCont>}
      <Button click={start} class={styles.start} id={"Start"}></Button>
      <Button click={reset} class={styles.reset} id={"Reset"}></Button>
    </Fragment>
  );
}
export default App;
