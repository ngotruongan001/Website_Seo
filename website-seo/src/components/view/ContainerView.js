import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
export default function ContainerView(props) {
  const { title } = useParams();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <h6
        style={{
          color: "white",
          background: "#121212",
          display: "block",
          padding: "0.8em 0.5em",
          margin: "0 0 10px 0",
        }}
      >
        Dự án / {title}
      </h6>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-30.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
