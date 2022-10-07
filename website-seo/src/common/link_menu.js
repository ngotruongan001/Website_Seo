import HomePage from "../page/home_page/HomePage";

function BangGia() {
  return <h1>Bảng Giá</h1>;
}

function GioiThieu() {
  return <h1>Giới thiệu</h1>;
}

function Video() {
  return <h1>Video</h1>;
}

const link_menu = [
  {
    content: "Giới thiệu",
    link: "/gioi-thieu",
    component: <GioiThieu />,
    dropdown: false,
  },
  {
    content: "Dự án",
    link: "/",
    component: <HomePage />,
    dropdown: false,
  },
  {
    content: "Video",
    link: "/video",
    component: <Video />,
    dropdown: false,
  },
  {
    content: "Thi công",
    link: "/thi-cong",
    component: <HomePage />,
    dropdown: false,
  },
  {
    content: "Bảng giá",
    link: "/bao-gia",
    component: <BangGia />,
    dropdown: false,
  },
  {
    content: "Tin tức",
    link: "/tin-tuc",
    components: [
      {
        content: "Tin công ty",
        link: "/tuyen-dung",
        component: <HomePage />,
      },
      {
        content: "Khuyến mãi - thông báo",
        link: "/khuyen-mai",
        component: <HomePage />,
      },
    ],
    dropdown: true,
  },
  {
    content: "Liên hệ",
    link: "/lien-he",
    component: <HomePage />,
    dropdown: false,
  },
];

export { link_menu };
