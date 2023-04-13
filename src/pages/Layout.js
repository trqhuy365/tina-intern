import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "/Users/giangnguyenhuong/react-app/src/css/Layout.css";
import { HomeOutlined } from "@ant-design/icons";
const Layout = () => {
  return (
    <React.Fragment>
      <nav style={{ backgroundColor: "#1a66ff" }}>
        <ul id="nav">
          <li className="subnav">
            <Link className="subnav-text" to="/">
              <HomeOutlined style={{ color: "white", paddingRight: "5px" }} />
            </Link>
          </li>
          <li className="subnav">
            <Link className="subnav-text" to="/props">
              Props
            </Link>
          </li>
          <li className="subnav">
            <Link className="subnav-text" to="/state">
              State
            </Link>
          </li>
          <li className="subnav">
            <Link className="subnav-text" to="/effect">
              Effect
            </Link>
          </li>
          <li className="subnav">
            <Link className="subnav-text" to="/companylist">
              Company List
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

{
  /* <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */
}

export default Layout;
