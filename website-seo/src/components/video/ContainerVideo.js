import Container from "react-bootstrap/esm/Container";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { list_item_video } from "../../common/list_item_video";
import { useState, useLayoutEffect } from "react";

export default function ContainerVideo(props) {
  const { title } = useParams();
  const [itemVideo, setItemVideo] = useState({});
  useLayoutEffect(() => {
    const filterItem = list_item_video.filter((item, index) => {
      return item.title === title;
    });
    setItemVideo(filterItem[0]);
    console.log(itemVideo);
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
        Video / {title}
      </h6>
      <Container>
        <iframe
          width="100%"
          height={600}
          style={{ objectFit: "cover" }}
          src={itemVideo.url}
        ></iframe>
      </Container>
    </Container>
  );
}
