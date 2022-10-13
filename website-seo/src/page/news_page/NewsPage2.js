import Container from "react-bootstrap/esm/Container";

export default function NewPage2(props) {
  return (
    <Container>
      <div className="body-video">
        <div class="grid-container">
          {[0, 1, 2].map((e, index) => {
            return (
              <div key={e} className="card-video grid-item">
                <div className="card-video-image">
                  <img
                    className="image-video"
                    src="http://thicongnhadanang.vn/wp-content/uploads/2021/06/f437e06e0517f149a806-310x200.jpg"
                    alt="image"
                  />
                </div>
                <div className="card-video-content">
                  <h3 className="card-video-title">Biệt thự Gia đình</h3>
                  <p className="card-video-discription">
                    – Công trình: Biệt thự gia đình – Địa chỉ: Nam Hòa Xuân, Q.
                    Cẩm
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
