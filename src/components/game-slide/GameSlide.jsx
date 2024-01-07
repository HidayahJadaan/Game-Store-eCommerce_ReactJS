import React from 'react'

export default function GameSlide({game, active, toggleVideo}) {
  return (
    <div className="gameSlider">
    <img src={game.img} alt="Image" />
    <div className={`video ${active ? "active" : ""}`}>
      <iframe
        src={game.trailer}
        width="1200"
        height="720"
        title={game.title}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
    </div>
    <div className="content">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <div className="buttons">
        <a href="#" className="orderBtn">
          Order Now
        </a>

        <a
          href="#"
          className={`playBtn ${active ? "active" : ""}`}
          onClick={toggleVideo}
        >
          <span className="pause">
            <i className="bi bi-pause-fill"></i>
          </span>

          <span className="play">
            <i className="bi bi-play-fill"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
  )
}
