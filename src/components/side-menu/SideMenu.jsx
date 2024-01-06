import React, { useState } from "react";
import "./side-menu.css";
import NavListItem from "../nav-list-item/NavListItem";
import navListData from "../../data/navListData";
import socialListData from "../../data/socialListData";

export default function SideMenu() {
  const [navData, setNavData] = useState(navListData);

  return (
    <div className="sideMenu">
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item._id} item={item} />
        ))}
      </ul>

      <ul className="social">
        {socialListData.map((item) => (
          <NavListItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
