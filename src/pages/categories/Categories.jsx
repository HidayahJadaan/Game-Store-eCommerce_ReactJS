import React, { useEffect, useState } from "react";
import "./categories.css";
import filterDataList from "../../data/filterDataList";
import GameCard from "../../components/game-card/GameCard";

export default function Categories({ games, reference }) {
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(filterDataList);

  const handleFilterGames = (category) => {
    const newFilters = filters.map((filter) => {
      if (filter.name === category) {
        filter.active = true;
      } else {
        filter.active = false;
      }
      return filter;
    });

    setFilters(newFilters);

    if (category === "All") {
      setData(games);
      return;
    }

    setData(games.filter((game) => game.category === category));
  };
  
  const [text, setText] = useState("");
  
  const handleSearchGames = (e) => {
    // the remaing games will be appeared
    setData(
      games.filter((game) =>
      game.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      );
      setText(e.target.value);
    };
    
      // useEffect(() => {
      //   setData(games);
      // }, [games]);

  return (
    <section ref={reference} id="categories" className="categories">
      <div className="conatiner-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-center">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter._id}
                  onClick={() => handleFilterGames(filter.name)}
                  className={`${filter.active ? "active" : ""}`}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                placeholder="Search..."
                value={text}
                onChange={handleSearchGames}
              />
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
