import React from "react";
import "./library.css";
import GameCard from "../../components/game-card/GameCard";
export default function MyLibarary({ games, reference }) {
  return (
    <section ref={reference} id="library" className="library">
      <div className="conatiner-fluid">
        <div className="row mb-3">
          <h1>My Library</h1>
        </div>

        <div className="row">
          {games.length === 0 ? (
            <h2>Your Library Is Empty</h2>
          ) : (
            games.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </div>
    </section>
  );
}
