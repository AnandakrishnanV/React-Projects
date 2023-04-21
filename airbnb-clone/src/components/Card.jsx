import star from "../assets/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span>{props.item.rating}</span>
        <span className="grey">({props.item.reviewCount}) • </span>
        <span className="grey">{props.item.country}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
