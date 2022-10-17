import Container from "react-bootstrap/Container";
import "./style.css";
import image from "../../assets/images/gioi_thieu/about-us.jpg";

const letterDiscription = [
  [
    <b>Công ty TNHH MTV PCD Nguyễn Hải (Nguyễn Hải Deco)</b>,
    " là Đơn vị chuyên cung cấp các dịch vụ Tư vấn Thiết kế và Thi công Nhà ở, Dự án trọn gói tại khu vực miền Trung – Tây Nguyên.",
  ],
  "Được thành lập vào năm 2012 bởi Đội ngũ Kiến trúc – Kỹ sư nhiều năm kinh nghiệm, yêu thích sáng tạo và tâm huyết với nghề; đến nay với gần 10 năm phát triển, Nguyễn Hải Deco đã may mắn nhận được nhiều sự tin tưởng và ủng hộ từ phía Khách hàng với minh chứng là số lượng dự án mà Công ty chúng tôi đã thực hiện trong suốt thời gian vừa qua.",
  [
    [
      "Tại đây, chúng tôi luôn tâm niệm và làm việc theo phương châm: ",
      <b>TƯ VẤN TẬN TÂM – THI CÔNG TẬN TÌNH</b>,
    ],
    <br />,
    "Hiện nay, Nguyễn Hải Deco đang tập trung phát triển 02 mảng chính, bao gồm:",
  ],

  [
    [
      <b>+ Xây dựng nhà Trọn gói/ Chìa khóa trao tay:</b>,
      " Nhà ở Gia đình và Biệt thự sang trọng, ",
    ],
    <br />,
    [
      <b>+ Xây dựng Dự án theo yêu cầu từ Chủ đầu tư:</b>,
      " Khách sạn, Văn phòng, Karaoke, Homestay, Showroom, Nhà kho…",
    ],
  ],
];
export default function AboutUs(props) {
  return (
    <Container>
      <div className="image-banner">
        <img src={image} />
      </div>
      <div className="discription">
        {letterDiscription.map((e, index) => {
          return <p key={index}>{e}</p>;
        })}
        <hr
          style={{
            color: "white",
            border: "1px solid white",
            background: "white",
            width: "30%",
          }}
        />
        <p>
          <b>HOTLINE:</b>{" "}
        </p>
        <p>
          <b>+ Ông Nguyễn Xuân Hải – Giám đốc: </b> 0939.065.777
        </p>
        <p>
          <b>
            + Ông Nguyễn Hà Sơn – Trưởng bộ phận Tư vấn & Phát triển Bất động
            sản:{" "}
          </b>{" "}
          0905.002.507
        </p>
      </div>
    </Container>
  );
}
