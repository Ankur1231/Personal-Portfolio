import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar(props) {
  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ankur.
          </a>
          <div className="itemContainer">
            <Person />
            <span>9971217264</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>ankurudey@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => props.setMenuOpen((preVal) => !preVal)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
