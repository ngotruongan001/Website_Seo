import { Link } from "react-router-dom";

export default function CardProject(props) {
  return (
    <div className="card-duan">
      <Link to={`/view/${props.title}`}>
        <div className="card-image">
          <img
            src={props.image}
            alt={`${props.title}${props.address ? `- ${props.address}` : ""}`}
          />
        </div>
      </Link>
      <div className="card-title">
        <Link to={`/view/${props.title}`}>
          <h6>{`${props.title}${
            props.address ? `- ${props.address}` : ""
          }`}</h6>
        </Link>
      </div>
    </div>
  );
}
