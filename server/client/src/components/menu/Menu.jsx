import React from "react";
import "./menu.scss";
import GetAppIcon from "@material-ui/icons/GetApp";

function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => props.setMenuOpen(false)}>
          <a href="./assets/test.pdf">
            Resume <GetAppIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
