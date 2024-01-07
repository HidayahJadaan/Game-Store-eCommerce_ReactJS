import React, {useContext} from "react";
import "./header.css";
import UserImage from '../../images/me.jpg'
import { AppContext } from "../../App";


export default function Header({ toggleActive }) {
  
  const {library, bag} = useContext(AppContext);
  
  return (
    <header className="header">
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>

      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
        <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={UserImage} alt="User Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}
