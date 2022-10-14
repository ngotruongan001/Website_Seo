import { Link } from "react-router-dom";

export default function CardVideo(props) {
  return (
    <>
      <div className="card-video grid-item">
        <Link to={`/video/${props.title}`}>
          <div className="card-video-image">
            <img className="image-video" src={props.image} alt="image" />
          </div>
        </Link>
        <div className="card-video-content">
          <Link to={`/video/${props.title}`}>
            <h3 className="card-video-title">{props.title}</h3>
          </Link>

          <p className="card-video-discription">
            – Công trình: Biệt thự gia đình – Địa chỉ: Nam Hòa Xuân, Q. Cẩm
          </p>
        </div>
      </div>
    </>
  );
}
