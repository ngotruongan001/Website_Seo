import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./style.css";
import Button from "react-bootstrap/Button";

export default function ContactPage(props) {
  return (
    <Container className="contact-container">
      <Row>
        <Col xs={12} md={12} lg={4} className="info-company">
          <h4>ĐỊA CHỈ</h4>
          <p>17 Nguyễn Cư Trinh, Quận Hải Châu, TP Đà Nẵng</p>
          <p>Tel: 0939 065 777</p>
          <p>Email: nguyenhai.deco@gmail.com</p>
          <a href="https://goo.gl/maps/pV3z6rJrz9bMtfG6A" target={"_blank"}>
            VIEW ON THE MAP
          </a>
          <p className="hotline">Hotline</p>
          <p className="hotline-phone">0939 065 777</p>
        </Col>
        <Col xs={12} md={12} lg={4} className="form-contact">
          <h5>Ý KIẾN PHẢN HỒI</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Control type="text" placeholder="Họ tên" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Control type="text" placeholder="Số điện thoại" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="mb-3"
            >
              <Form.Control as="textarea" rows="3" name="address" />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-3 p-2">
              GỬI TIN NHẮN
            </Button>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Button variant="success" type="submit" className="mb-3 p-2">
              ĐĂNG KÝ
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={12} lg={4} className="contacts">
          <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
          <div className="icons">
            <a href="https://zalo.me/0939065777" target={"_blank"}>
              <div className="icon-contact"></div>
            </a>
            <a
              href="https://www.facebook.com/messages/t/nguyenhaideco.vn"
              target={"_blank"}
            >
              <div className="icon-contact"></div>
            </a>
            <a href="tel:0939065777" target={"_blank"}>
              <div className="icon-contact"></div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
