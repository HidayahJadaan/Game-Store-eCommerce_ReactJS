import React, { useState } from "react";
import "./side-menu.css";
import NavListItem from "../nav-list-item/NavListItem";
import navListData from "../../data/navListData";
import socialListData from "../../data/socialListData";

export default function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id,target) =>{
// console.log(id);
    const newNavData = navData.map( nav => {
  nav.active = false;
  if(nav._id === id){
    nav.active = true;
  }
  return nav;
})
setNavData(newNavData);
sectionActive(target)
  }


  return (
    <div className={`sideMenu ${active ? 'active': ""}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item, index) => (
          <NavListItem 
          key={index}
           item={item}
           navOnClick ={handleNavOnClick}
           />
        ))}
      </ul>

      <ul className="social">
        {socialListData.map((item, index) => (
          <NavListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
