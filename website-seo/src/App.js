import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { countSelector } from "./redux/selector";
import dataSlice from "./redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { link_menu } from "./common/link_menu";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./page/not_found_page/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header></Header>
      <div id="page">
        <Routes>
          {link_menu.map((item, index) => {
            if (item.dropdown) {
              return (
                <>
                  {item.components.map((e, i) => {
                    return (
                      <Route
                        key={i}
                        path={`${item.link}${e.link}`}
                        element={e.component}
                      />
                    );
                  })}
                </>
              );
            } else {
              return (
                <Route key={index} path={item.link} element={item.component} />
              );
            }
          })}
          {/* <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFoundPage />} /> */}
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
