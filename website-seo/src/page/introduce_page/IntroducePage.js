import Container from "react-bootstrap/Container";
import { useState } from "react";
import LetterComponent from "../../components/letter/LetterComponent";
import AboutUs from "../../components/about_us/AboutUs";
import Commit from "../../components/commit/Commit";
const array = [
  {
    title: "Thư ngỏ",
    component: <LetterComponent></LetterComponent>,
  },
  {
    title: "Về chúng tôi",
    component: <AboutUs></AboutUs>,
  },
  {
    title: "Cam kết",
    component: <Commit />,
  },
  {
    title: "Hồ sơ Năng lực",
    component: <div style={{ height: 500 }}></div>,
  },
];

const arrayCard = [
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
  {
    image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TRUC.jpg",
    title: "Nhà Chị Trúc",
    address: "Đà Nẵng",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TR1-e1623397049668.jpg",
    title: "NHÀ CHỊ TRINH",
    address: "THANH HÓA",
  },
  {
    image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TAM.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
  {
    image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TRUC.jpg",
    title: "Nhà Chị Trúc",
    address: "Đà Nẵng",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TR1-e1623397049668.jpg",
    title: "NHÀ CHỊ TRINH",
    address: "THANH HÓA",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
  {
    image:
      "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
    title: "Nhà Minh Anh",
    address: "Quãng Ngãi",
  },
];
export default function IntroducePage(props) {
  const [active, setActive] = useState(0);
  const handleUpdateSetActive = (index) => {
    setActive(index);
  };
  return (
    <div>
      <Container className="mx-auto my-3">
        <div className="title-mess">
          <ul className="ul-menu-title">
            {array.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`li-menu-title ${active == index ? "active" : ""}`}
                  onClick={() => {
                    handleUpdateSetActive(index);
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      {array[active].component}
    </div>
  );
}
