import Container from "react-bootstrap/Container";
import "./style.css";
import image from "../../assets/images/gioi_thieu/cam-ket.jpg";

const letterDiscription = [
  "Chúng tôi hiểu rằng, khi Làm nhà hay Thực hiện một Dự án; Chủ đầu tư thường tốn rất nhiều công sức trong việc lựa chọn và đặt niềm tin vào một Đơn vị Tư vấn Thiết kế và Thi công. Do đó, chúng tôi luôn nỗ lực hết mình để giữ vững được lòng tin đó của Chủ đầu tư.",
  "Mong muốn của Chúng tôi là mỗi Dự án thực hiện chính là cơ hội mở ra một mối quan hệ đối tác lâu dài và cùng nhau phát triển.",
  <i>Và đây là Những cam kết từ phía Công ty chúng tôi:</i>,
];
export default function Commit(props) {
  return (
    <Container>
      <div className="discription">
        {letterDiscription.map((e, index) => {
          return <p key={index}>{e}</p>;
        })}
      </div>
      <div className="image-banner-commit">
        <img src={image} />
      </div>
    </Container>
  );
}
