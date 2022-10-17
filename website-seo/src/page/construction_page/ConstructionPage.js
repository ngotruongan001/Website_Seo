import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { list_thicong } from "../../common/item_project";

const arrayCard = [
  {
    image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TAM.jpg",
    title: "Nhà Minh Anh",
    discription: "Quãng Ngãi",
  },
];
export default function ConstructionPage(props) {
  return (
    <Container>
      <div className="body-construction">
        <div class="grid-construction">
          {list_thicong.map((e, index) => {
            return (
              <div className="card-construction">
                <div className="image-card-construction">
                  <Link to={`/view/Thi Công/${e.title}`}>
                    <img src={e.image} alt={e.title} />
                  </Link>
                </div>
                <div className="title-card-construction">
                  <Link to={`/view/Thi Công/${e.title}`}>
                    <h6>{e.title}</h6>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
