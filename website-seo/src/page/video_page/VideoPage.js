import Container from "react-bootstrap/Container";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CardVideo from "../../components/card_video/CardVideo";
const arrayCard = [
  {
    image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TAM.jpg",
    title: "Nhà Minh Anh",
    discription: "Quãng Ngãi",
  },
];
export default function VideoPage(props) {
  return (
    <Container>
      <div className="body-video">
        <div class="grid-container">
          {[0, 1, 2, 3, 4].map((e, index) => {
            return (
              <CardVideo
                key={index}
                title="Biệt thự Gia đình"
                image="http://thicongnhadanang.vn/wp-content/uploads/2021/06/f437e06e0517f149a806-310x200.jpg"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
