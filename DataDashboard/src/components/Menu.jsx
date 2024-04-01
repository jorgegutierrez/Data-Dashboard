import React from "react";
import "../styles/menu.css";
import icons from "../components/icons";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li className="Menu-item">
          <a className="menu-link" href="/">
            <div className="menu-div">
              <img src={icons.dashboard} alt="Dashboard Icon" />
              <h3> Dashboard</h3>
            </div>
          </a>
        </li>

        <li className="Menu-item">
          <a className="menu-link" href="/">
            <div className="menu-div">
              <img src={icons.search} alt="Search Icon" />
              <h3>Search</h3>
            </div>
          </a>
        </li>

        <li className="Menu-item">
          <a className="menu-link" href="/">
            <div className="menu-div">
              <img src={icons.about} alt="About Icon" />
              <h3>About</h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
