import React, { useEffect, useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";
import SideMenu from "../components/side-menu/SideMenu";
import Header from "./header/Header";
import Home from "./home/Home";
import Categories from "../pages/categories/Categories";
import MyLibrary from "../pages/library/MyLibarary";
import MyBag from "../pages/my-bag/MyBag";
import { AppContext } from "../App";


export default function Main() {

  const {library, bag} = useContext(AppContext);

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



  const scrollToCategories = (e) => {
    e.preventDefault();
    handleSectionActive('categories'); // Assuming 'categories' is the id of the Categories section
    categoryRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <main>
      <SideMenu sectionActive={handleSectionActive} active={active} />
      <div className={`banner ${active ? "active" : ""}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fliud">

          { games && games.length >0 && (
            
          <>
            <Home games={games} reference={homeRef} scrollToCategories={scrollToCategories} />
            <Categories games={games} reference={categoryRef} />
            <MyLibrary games={library} reference={libraryRef} />
            <MyBag games={bag} reference={bagRef} />
          </>
          )}
         
        </div>
      </div>
    </main>
  );
}
