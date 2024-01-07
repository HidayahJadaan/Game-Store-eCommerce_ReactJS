import React from "react";
import "./game-card.css";
import GameRating from "../game-rating/GameRating";

export default function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} className="img-fluid" alt={game.title} />
        <a href="#" className="like">
          {" "}
          <i className="bi bi-heart-fill"></i>{" "}
        </a>

        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>

        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount != 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>

              <span className="prePrice">${game.price.toFixed(2)}</span>
            </>
          )}

          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>

        <a href="#" className="addBag">
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}