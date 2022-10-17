import Container from "react-bootstrap/Container";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CardVideo from "../../components/card_video/CardVideo";
import { list_item_video } from "../../common/list_item_video";

export default function VideoPage(props) {
  return (
    <Container>
      <div className="body-video">
        <div class="grid-container">
          {list_item_video.map((e, index) => {
            return (
              <CardVideo
                key={index}
                title={e.title}
                image={e.image}
                url={e.url}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
