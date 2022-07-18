import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

// import { Button, PageHeader } from "antd";
// import { useNavigate } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

const Header = () => {
  let activeStyle1 = {
    color: "orange",
    padding: "5px",
    borderRadius: "25px",
    backgroundColor: "white",
  };
  let activeStyle = {
    color: "orange",

    borderRadius: "5px",
    backgroundColor: "white",
  };
  let notActiveStyle = {
    color: "black",
  };

  return (
    <>
      <div className="Main-div">
        <div className="container">
          <div className="row">
            <nav className="nav-2 navbar navbar-expand-lg navbar-light">
              <NavLink
                className="navbar-brand nav-link"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : activeStyle)}
              >
                ToDo
              </NavLink>
              <Dropdown className="dropd nav-link-1">
                <Dropdown.Toggle
                  id="dropdown-button-dark"
                  style={{ fontSize: "25px" }}
                  variant=""
                >
                  <i
                    className="Main-icon fa-solid fa-circle-user"
                    style={activeStyle1}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  variant="dark"
                  style={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                >
                  <Dropdown.Item className="dropdown">
                    <NavLink to={`/profile`} aria-current="page">
                      <span className="nav-link" style={{ color: "#DEE2E6" }}>
                        Profile
                      </span>
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown">
                    <NavLink to={`/login`} aria-current="page">
                      <span
                        className=""
                        style={{ color: "#DEE2E6", textDecoration: "none" }}
                        onClick={() => {
                          localStorage.removeItem("login");
                        }}
                      >
                        LogOut
                      </span>
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <NavLink
                  className=" nav-link"
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  className=" nav-link"
                  to="/service"
                  style={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                >
                  Service
                </NavLink>
                <NavLink
                  className=" nav-link"
                  to="/contect"
                  style={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                >
                  Contect
                </NavLink>
                {/* <ul className="col-6  navbar-nav me-auto justify-content-end mb-lg-0">
              <li className="icon-1 nav-item">
                <Dropdown className="dropd">
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant=""
                  >
                    <i class="Main-icon fa-solid fa-circle-user"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item className="dropdown">
                      <NavLink
                        to={`/about`}
                        style={{ textDecoration: "none" }}
                        aria-current="page"
                      >
                        <span className="" style={{ color: "#DEE2E6" }}>
                          Profile
                        </span>
                      </NavLink>
                    </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    </ul> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
