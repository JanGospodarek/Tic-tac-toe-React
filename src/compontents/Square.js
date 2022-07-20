function Square(props) {
  return (
    <button onClick={props.click}>
      {props.clicked ? props.char : props.id}
    </button>
  );
}
export default Square;
