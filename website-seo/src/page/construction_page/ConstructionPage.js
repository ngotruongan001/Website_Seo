import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => {
            return (
              <div className="card-construction">
                <div className="image-card-construction">
                  <Link to={`/view/Resort Mỹ An Huế`}>
                    <img
                      src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30-300x225.jpg"
                      alt="image"
                    />
                  </Link>
                </div>
                <div className="title-card-construction">
                  <Link to={`/view/Resort Mỹ An Huế`}>
                    <h6>Resort Mỹ An Huế</h6>
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
