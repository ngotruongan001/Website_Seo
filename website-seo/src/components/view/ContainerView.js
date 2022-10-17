import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import React, { useState, useLayoutEffect } from "react";
import { array } from "../../common/array";

export default function ContainerView(props) {
  const { title, view } = useParams();
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState({});

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useLayoutEffect(() => {
    const filterListCard = array.filter((item) => item.title == view);
    const filterItem = filterListCard[0].arrayCard.filter(
      (item) => item.title == title
    );
    setItem(filterItem[0]);
  }, []);

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
        Dự án / {view} / {title}
      </h6>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: "cover!important" }}
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "red" }}>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "red" }}>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image}
              alt="Thirst slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "red" }}>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}
