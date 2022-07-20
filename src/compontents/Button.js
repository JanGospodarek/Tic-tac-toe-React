function Button(props) {
  return (
    <button className={props.class} onClick={props.click}>
      {props.id}
    </button>
  );
}
export default Button;
