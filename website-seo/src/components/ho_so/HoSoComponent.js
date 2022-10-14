import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
export default function HoSoComponent(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
