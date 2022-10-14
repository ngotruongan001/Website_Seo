import Container from "react-bootstrap/esm/Container";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

export default function ContainerVideo(props) {
  const { title } = useParams();
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
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </Container>
    </Container>
  );
}
