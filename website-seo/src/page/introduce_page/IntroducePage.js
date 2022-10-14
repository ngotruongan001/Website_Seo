import Container from "react-bootstrap/Container";
import { useState } from "react";
import LetterComponent from "../../components/letter/LetterComponent";
import AboutUs from "../../components/about_us/AboutUs";
import Commit from "../../components/commit/Commit";
import HoSoComponent from "../../components/ho_so/HoSoComponent";
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
    component: <HoSoComponent />,
  },
];

export default function IntroducePage(props) {
  const [active, setActive] = useState(0);
  const handleUpdateSetActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <Container className="mx-auto my-3 menu-top">
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
    </>
  );
}
