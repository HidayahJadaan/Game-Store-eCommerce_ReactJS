import React from "react";
import "./home.css";
import GameSwiper from "../../components/Game-Swiper/GameSwiper";

export default function Home({ games }) {
  return (
    <section id="home" className="home active">
      {/* Carousil */}

      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
      </div>
      {/* Item Cards */}
    </section>
  );
}
