import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardProject from "../../components/card_project/CardProject";
const array = [
  {
    title: "Biệt thự",
    arrayCard: [
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TRUC.jpg",
        title: "Nhà Chị Trúc",
        address: "Đà Nẵng",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TR1-e1623397049668.jpg",
        title: "NHÀ CHỊ TRINH",
        address: "THANH HÓA",
      },
      {
        image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TAM.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TRUC.jpg",
        title: "Nhà Chị Trúc",
        address: "Đà Nẵng",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TR1-e1623397049668.jpg",
        title: "NHÀ CHỊ TRINH",
        address: "THANH HÓA",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/M-e1623380019602.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TR1-e1623397049668.jpg",
        title: "NHÀ CHỊ TRINH",
        address: "THANH HÓA",
      },
      {
        image: "http://thicongnhadanang.vn/wp-content/uploads/2020/10/TAM.jpg",
        title: "Nhà Minh Anh",
        address: "Quãng Ngãi",
      },
    ],
  },
  {
    title: "Nhà Phố",
    arrayCard: [
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Nhà-anh-Thiện-300x225.jpg",
        title: "NHÀ ANH THIỆN",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Nhà-anh-cảnh-300x225.jpg",
        title: "NHÀ ANH CẢNH",
        address: "QUẢNG NGÃI",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/nguyet-hoa-xuan-300x225.jpg",
        title: "NHÀ CHỊ NGUYỆT",
        address: "ĐÀ NẴNG",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/THUBS-300x225.jpg",
        title: "NHÀ CHỊ THU",
        address: "ĐÀ NẴNG",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Nhà-anh-Thiện-300x225.jpg",
        title: "NHÀ ANH THIỆN",
        address: "Quãng Ngãi",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Nhà-anh-cảnh-300x225.jpg",
        title: "NHÀ ANH CẢNH",
        address: "QUẢNG NGÃI",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/nguyet-hoa-xuan-300x225.jpg",
        title: "NHÀ CHỊ NGUYỆT",
        address: "ĐÀ NẴNG",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/THUBS-300x225.jpg",
        title: "NHÀ CHỊ THU",
        address: "ĐÀ NẴNG",
      },
    ],
  },
  {
    title: "Bar, nhà hàng, cafe",
    arrayCard: [
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-phòng-nhỏ-tầng-2-số4-300x225.jpg",
        title: "KARAOKE BOSS",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/CFF-300x225.jpg",
        title: "DALANA CAFE",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/2-3-300x225.jpg",
        title: "NHÀ HÀNG THUẬN PHƯỚC",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2019/07/2-5-300x225.jpg",
        title: "NHÀ HÀNG DÊ BÉ HẢI",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/1-phòng-nhỏ-tầng-2-số4-300x225.jpg",
        title: "KARAOKE BOSS",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/CFF-300x225.jpg",
        title: "DALANA CAFE",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/2-3-300x225.jpg",
        title: "NHÀ HÀNG THUẬN PHƯỚC",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2019/07/2-5-300x225.jpg",
        title: "NHÀ HÀNG DÊ BÉ HẢI",
        address: "",
      },
    ],
  },
  {
    title: "Homestay, hotel",
    arrayCard: [
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Homestay_Chị-Thúy-300x225.jpg",
        title: "Homestay Chị Thúy",
        address: "Đà Nẵng",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/ATP-300x225.jpg",
        title: "KHÁCH SẠN ATP",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/MYPA-300x225.jpg",
        title: "KHÁCH SẠN NYPA",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/BLUE-1-300x225.jpg",
        title: "KHÁCH SAN SEPON BLUE",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2021/05/Homestay_Chị-Thúy-300x225.jpg",
        title: "Homestay Chị Thúy",
        address: "Đà Nẵng",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/ATP-300x225.jpg",
        title: "KHÁCH SẠN ATP",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/MYPA-300x225.jpg",
        title: "KHÁCH SẠN NYPA",
        address: "",
      },
      {
        image:
          "http://thicongnhadanang.vn/wp-content/uploads/2020/10/BLUE-1-300x225.jpg",
        title: "KHÁCH SAN SEPON BLUE",
        address: "",
      },
    ],
  },
];
const arrayCard = [];
export default function HomePage(props) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Container className="mx-auto my-3">
        <div className="title-mess">
          <ul className="ul-menu-title">
            {array.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`li-menu-title ${active == index ? "active" : ""}`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="body-duan">
        {array[active].arrayCard.map((e, index) => {
          return (
            <CardProject
              key={index}
              image={e.image}
              title={e.title}
              address={e.address}
            />
          );
        })}
      </div>
    </div>
  );
}
