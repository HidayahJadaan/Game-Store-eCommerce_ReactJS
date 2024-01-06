import React, { useEffect, useState } from "react";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./main.css";
import SideMenu from "../components/side-menu/SideMenu";
import Header from "./header/Header";
import Home from "./home/Home";

export default function Main() {
  const [active, setActive] = useState(false);
const [games, setGames] = useState([]);

const fetchData =()=>{
  fetch('http://localhost:3000/api/gamesData.json')
  .then(res=> res.json())
  .then(data=>{
    setGames(data);
    console.log(data);
  })
  .catch(error=> toast.error('Something Went Wrong!!'));
}
  const handleToggleActive = () => {
    setActive(!active);
  };

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fliud">
          <Home games={games}/>
        </div>
      </div>
    </main>
  );
}
