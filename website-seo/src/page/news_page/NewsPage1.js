import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import CardVideo from "../../components/card_video/CardVideo";
import img1 from "../../assets/images/news/1/1.jpg";
import img2 from "../../assets/images/news/1/2.jpg";
import img3 from "../../assets/images/news/1/3.jpg";

const array = [
  {
    title: "Khởi công xây dựng nhà anh Cảnh – Quảng Ngãi",
    discription:
      "Vừa qua, Công ty TNHH Thiết kế và Xây dựng Nguyễn Hải đã tiến hành [...]",
    image: img1,
  },
  {
    title: "Khởi công Xây dựng nhà anh Thiện – Quảng Ngãi",
    discription:
      " Sáng hôm qua (27/04/2021), Công ty TNHH Thiết kế và Xây dựng Nguyễn Hải đã [...]",
    image: img2,
  },
  {
    title: "Tuyển dụng: Họa viên Kiến trúc",
    discription:
      "Nhằm đáp ứng Nhu cầu Dự án và định hướng Phát triển trong thời gian [...]",
    image: img3,
  },
];

export default function NewPage1(props) {
  return (
    <Container>
      <div className="body-video">
        <div class="grid-container">
          {array.map((e, index) => {
            return (
              <div key={e} className="card-video grid-item">
                <div className="card-video-image">
                  <img className="image-video" src={e.image} alt="image" />
                </div>
                <div className="card-video-content">
                  <h3 className="card-video-title">{e.title}</h3>
                  <p className="card-video-discription">{e.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
