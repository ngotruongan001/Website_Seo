import Container from "react-bootstrap/esm/Container";
import "./style.css";
import { useState } from "react";
import BaoGiaThietKe from "../cost_components/bao_gia/BaoGiaThietKe";

const listComponents = [<BaoGiaThietKe />];

export default function CostPage(props) {
  const [active, setActive] = useState(0);
  return (
    <>
      <Container>
        <div className="menu-taglist">
          <ul className="ul-menu-taglist">
            <li className="li-menu-taglist">
              Đơn giá
              <ul className="sub-list">
                <li className="sub-item">Thiết kế</li>
                <li className="sub-item">Thi công</li>
              </ul>
            </li>
            <li className="li-menu-taglist">
              Báo giá
              <ul className="sub-list">
                <li className="sub-item">Thiết kế</li>
                <li className="sub-item">Thi công</li>
              </ul>
            </li>
            <li className="li-menu-taglist">
              Hợp đồng
              <ul className="sub-list">
                <li className="sub-item">Thiết kế</li>
                <li className="sub-item">Thi công KH</li>
                <li className="sub-item">Thi công ĐT</li>
              </ul>
            </li>
            <li className="li-menu-taglist">Diễn giải vật liệu</li>
          </ul>
        </div>
        {listComponents[0]}
      </Container>
    </>
  );
}
