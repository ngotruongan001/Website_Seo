import { Link } from "react-router-dom";
import { link_menu } from "../../common/link_menu";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MenuContext } from "../../contexts/MenuContext";
import { useContext, useLayoutEffect } from "react";
export default function Header(props) {
  // const [active, setActive] = useState(1);
  const context = useContext(MenuContext);
  console.log(context.index);
  const handleUpdateSetActive = (index) => {
    context.toggleSetIndex(index);
  };

  useLayoutEffect(() => {
    const pathTag = window.location.href.split("/");
    console.log(pathTag);
    const path = pathTag[pathTag.length - 1];
    if (path == "") {
      handleUpdateSetActive(1);
    } else {
      link_menu.filter((item, index) => {
        if (item.link == path) {
          handleUpdateSetActive(index);
        }
      });
    }
  }, []);

  return (
    <Navbar
      style={{ background: "black" }}
      variant="dark"
      expand={`lg`}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo"
              src="http://thicongnhadanang.vn/wp-content/uploads/2020/10/logo-chính-thức.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {link_menu.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <NavDropdown
                      title={item.content}
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      {item.components.map((e, i) => {
                        return (
                          <NavDropdown.Item>
                            <Link
                              to={`/${item.link}/${e.link}`}
                              style={{ color: "black", display: "block" }}
                              onClick={() => {
                                handleUpdateSetActive(index);
                              }}
                            >
                              {e.content}
                            </Link>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Nav.Link
                      className={
                        context.index == index
                          ? "link-menu active"
                          : "link-menu"
                      }
                    >
                      <Link
                        onClick={() => {
                          handleUpdateSetActive(index);
                        }}
                        className="link-menu"
                        style={{
                          color: `${
                            context.index == index ? "green" : "white"
                          }`,
                          display: "block",
                        }}
                        to={`/${item.link}`}
                      >
                        {item.content}
                      </Link>
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
