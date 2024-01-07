import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./main.css";
import SideMenu from "../components/side-menu/SideMenu";
import Header from "./header/Header";
import Home from "./home/Home";
import Categories from "../pages/categories/Categories";
import MyLibrary from "../pages/library/MyLibarary";
import MyBag from "../pages/my-bag/MyBag";

export default function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/api/gamesData.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        // console.log(data);
      })
      .catch((error) => toast.error("Something Went Wrong!!"));
  };
  const handleToggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Section Switch Animation
  const homeRef = useRef();
  const categoryRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    { name: "home", ref: homeRef, active: true },
    { name: "categories", ref: categoryRef, active: false },
    { name: "library", ref: libraryRef, active: false },
    { name: "bag", ref: bagRef, active: false },
  ];

  const handleSectionActive = (target) => {
    sections.map((section) => {
      // section.ref.current; --> The Entire Section (HTML ELEMENT)
      if (section.ref.current) {
        const sectionElement = section.ref.current;
        sectionElement.classList.remove('active');
        if (sectionElement.id === target) {
          sectionElement.classList.add('active');
        }
      }
      return section;
    });
  };

  return (
    <main>
      <SideMenu sectionActive={handleSectionActive} active={active} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fliud">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={categoryRef} />
          <MyLibrary games={games} reference={libraryRef} />
          <MyBag games={games} reference={bagRef} />
        </div>
      </div>
    </main>
  );
}
