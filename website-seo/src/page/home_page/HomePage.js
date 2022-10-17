import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardProject from "../../components/card_project/CardProject";
import { array } from "../../common/array";
export default function HomePage(props) {
  const [active, setActive] = useState(0);

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
                    setActive(index);
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="body-duan">
        {array[active].arrayCard.map((e, index) => {
          return (
            <CardProject
              key={index}
              view={array[active].title}
              image={e.image}
              title={e.title}
            />
          );
        })}
      </div>
    </div>
  );
}
