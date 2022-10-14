export default function BaoGiaThietKe(props) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ background: "#fff" }}>
        <h2
          style={{
            textAlign: "center",
            paddingTop: "20px",
            color: "#494949",
            fontWeight: "400",
            fontSize: "36px",
          }}
        >
          BẢNG GIÁ THIẾT KẾ
        </h2>
        <table className="table">
          <thead style={{ background: "#121212", textTransform: "uppercase" }}>
            <tr>
              <th
                style={{
                  width: "6%",
                  borderRight: "1px solid #dee2e6",
                  color: "#dee2e6",
                  fontWeight: "400",
                }}
              >
                STT
              </th>
              <th
                style={{
                  width: "25%",
                  borderRight: "1px solid #dee2e6",
                  color: "#dee2e6",
                  fontWeight: "400",
                }}
              >
                Hạng mục
              </th>
              <th
                style={{
                  width: "23%",
                  borderRight: "1px solid #dee2e6",
                  color: "#dee2e6",
                  fontWeight: "400",
                }}
              >
                Thiết kế mới
              </th>
              <th
                style={{
                  width: "23%",
                  borderRight: "1px solid #dee2e6",
                  color: "#dee2e6",
                  fontWeight: "400",
                }}
              >
                Thiết kế cải tạo
              </th>
              <th style={{ width: "23%", color: "#dee2e6", fontWeight: "400" }}>
                Thiết kế sân vườn
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderRight: "1px solid #dee2e6" }}>1</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>
                Nhà phố 1 mặt tiền
              </td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>200.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>300.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>150.000</td>
            </tr>
            <tr>
              <td style={{ borderRight: "1px solid #dee2e6" }}>2</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>
                Nhà phố 2 mặt tiền
              </td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>250.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>300.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>150.000</td>
            </tr>
            <tr>
              <td style={{ borderRight: "1px solid #dee2e6" }}>3</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>
                Nhà biệt thự hiện đại
              </td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>300.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>400.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>100.000</td>
            </tr>
            <tr>
              <td style={{ borderRight: "1px solid #dee2e6" }}>4</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>
                Nhà biệt thự cổ điển
              </td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>400.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>400.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>100.000</td>
            </tr>
            <tr>
              <td style={{ borderRight: "1px solid #dee2e6" }}>5</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>
                Bar/Nhà hàng/Cafe
              </td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>300.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>400.000</td>
              <td style={{ borderRight: "1px solid #dee2e6" }}>100.000</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hồ sơ bao gồm</td>
              <td>
                <ul style={{ paddingLeft: 0 }}>
                  <li>3D nội thất</li>
                  <li>3D ngoại thất</li>
                  <li>Hồ sơ XPXD</li>
                  <li>Bản vẽ nội thất</li>
                  <li>Bản vẽ kết cấu</li>
                  <li>Bản vẽ kiến trúc</li>
                  <li>Bản vẽ khái toán</li>
                  <li>Bản vẽ điện nước</li>
                </ul>
              </td>
              <td>
                <ul style={{ paddingLeft: 0 }}>
                  <li>3D nội thất</li>
                  <li>3D ngoại thất</li>
                  <li>Hồ sơ XPXD</li>
                  <li>Bản vẽ nội thất</li>
                  <li>Bản vẽ kết cấu</li>
                  <li>Bản vẽ kiến trúc</li>
                  <li>Bản vẽ khái toán</li>
                </ul>
              </td>
              <td>
                <ul style={{ paddingLeft: 0 }}>
                  <li>Bản vẽ sân vườn bố trí cây xanh chi tiết hồ bơi bể cá</li>
                  <li>Bản vẽ hàng rào cổng ngõ mái che gara</li>
                  <li>Bản vẽ điện nước sân vườn</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <em>
            *&nbsp; Gi&aacute; trị hợp đồng tối thiểu l&agrave; 20tr / hồ sơ
          </em>
        </p>
      </div>
      <div className="clear"></div>
    </div>
  );
}
