import React, { useState } from "react";
import "./main.css";
import SideMenu from "../components/side-menu/SideMenu";
import Header from "./header/Header";

export default function Main() {

const [active, setActive] = useState(false);

const handleToggleActive = () =>{
  setActive(!active);
}

  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? 'active': ''}`}>
        <Header toggleActive={handleToggleActive} />
      </div>
    </main>
  );
}
