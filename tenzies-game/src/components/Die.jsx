export default function Die(props) {
  return (
    <div
      className={props.isHeld ? "die die-block-held" : "die die-block"}
      onClick={props.holdDice}
    >
      <h2>{props.value}</h2>
    </div>
  );
}
