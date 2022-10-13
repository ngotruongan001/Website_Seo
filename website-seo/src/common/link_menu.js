import HomePage from "../page/home_page/HomePage";
import IntroducePage from "../page/introduce_page/IntroducePage";
import VideoPage from "../page/video_page/VideoPage";
import ConstructionPage from "../page/construction_page/ConstructionPage";
import NewPage2 from "../page/news_page/NewsPage2";
import NewPage1 from "../page/news_page/NewsPage1";
const link_menu = [
  {
    content: "Giới thiệu",
    link: "/gioi-thieu",
    component: <IntroducePage />,
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
    component: <VideoPage />,
    dropdown: false,
  },
  {
    content: "Thi công",
    link: "/thi-cong",
    component: <ConstructionPage />,
    dropdown: false,
  },
  {
    content: "Bảng giá",
    link: "/bao-gia",
    component: <HomePage />,
    dropdown: false,
  },
  {
    content: "Tin tức",
    link: "/tin-tuc",
    components: [
      {
        content: "Tin công ty",
        link: "/tuyen-dung",
        component: <NewPage1 />,
      },
      {
        content: "Khuyến mãi - thông báo",
        link: "/khuyen-mai",
        component: <NewPage2 />,
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
