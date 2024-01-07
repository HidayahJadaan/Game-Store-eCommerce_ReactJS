import React from "react";
import "./home.css";
import GameSwiper from "../../components/Game-Swiper/GameSwiper";
import GameCard from "../../components/game-card/GameCard";

export default function Home({ games , reference, scrollToCategories}) {
  return (
    <section id="home" className="home active" ref={reference}>
      {/* Carousil */}

      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
        <div className="row mb-4 mt-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#categories" className="viewMore"
            onClick={scrollToCategories}>
              {" "}
              View More Games <i className="bi bi-arrow-right"></i>

              
            </a>
          </div>
        </div>

        <div className="row">
          {games.slice(0, 4).map((game) => {
            return <GameCard key={game._id} game={game} />;
          })}
        </div>
      </div>
      {/* Item Cards */}
    </section>
  );
}
