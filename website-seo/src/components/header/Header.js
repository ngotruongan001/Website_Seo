import { Link } from "react-router-dom";
import { link_menu } from "../../common/link_menu";
import { useState } from "react";
export default function Header(props) {
  const [indexActive, setIndexActive] = useState(0);
  console.log(indexActive);

  const handleSetIndexActive = (index) => {
    setIndexActive(index);
  };
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">LOGO</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            {link_menu.map((item, index) => {
              if (item.dropdown) {
                return (
                  <li className="dropdown">
                    <Link
                      className={`nav-link scrollto ${
                        index == indexActive ? "active" : ""
                      }`}
                      to={`${item.link}/${item.components[0].link}`}
                      onClick={() => {
                        handleSetIndexActive(index);
                      }}
                    >
                      {item.content} <i className="bi bi-chevron-down"></i>
                    </Link>
                    <ul>
                      {item.components.map((e, ind) => {
                        return (
                          <li>
                            <Link
                              className={`nav-link scrollto ${
                                index == indexActive ? "active" : ""
                              }`}
                              to={`${item.link}/${e.link}`}
                              onClick={() => {
                                handleSetIndexActive(index);
                              }}
                            >
                              {e.content}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li>
                    <Link
                      className={`nav-link scrollto ${
                        index == indexActive ? "active" : ""
                      }`}
                      to={item.link}
                      onClick={() => {
                        handleSetIndexActive(index);
                      }}
                    >
                      {item.content}
                    </Link>
                  </li>
                );
              }
            })}

            {/* 
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
