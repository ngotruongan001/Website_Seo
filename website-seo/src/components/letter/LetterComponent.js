import Container from "react-bootstrap/Container";
import "./style.css";
const letterDiscription = [
  "Kính thưa Quý vị!",
  "Công ty TNHH MTV PCD Nguyễn Hải là một trong số những Đơn vị có thế mạnh trong lĩnh vực Tư vấn, Thiết kế và Thi công tại khu vực Đà Nẵng và miền Trung – Tây Nguyên.",
  "Điểm khác biệt của chúng tôi chính là Nhân sự tư vấn cho Quý khách thay vì là chuyên viên Kinh doanh như thường gặp, lại chính là các Lãnh đạo Công ty vốn là những anh chị xuất thân từ Chuyên nghành, có sự am hiểu sâu sắc, không chỉ về kiến thức chuyên môn, mà còn cả nghành nghề hoạt động của chính Quý vị. Điều này, giúp Công ty chúng tôi hiểu rõ nhu cầu của Quý khách một cách chính xác nhất, từ đó đưa ra những tư vấn cũng như giải pháp thật phù hợp và tối ưu!",
  "Với 10 năm kinh nghiệm cũng như đã từng tham gia nhiều loại hình Dự án lớn nhỏ khác nhau từ Nhà phố, Biệt thự cho đến các Dự án Nhà hàng, Khách sạn, Karaoke, hay Homestay…; Chúng tôi đều nhận được sự tin tưởng từ phía chủ đầu tư trong việc triển khai Dự án của Quý khách một cách chất lượng, đúng tiến độ và hướng đến mục tiêu bền vững.",
  "Trân trọng!",
];
export default function LetterComponent(props) {
  return (
    <Container>
      <div className="image-banner">
        <img src="http://thicongnhadanang.vn/wp-content/uploads/2021/04/Thi-công-nhà-trọn-gói-tại-Đà-Nẵng.jpg" />
      </div>
      <div className="discription">
        {letterDiscription.map((e, index) => {
          return <p key={index}>{e}</p>;
        })}
      </div>
    </Container>
  );
}
