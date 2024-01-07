import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./game-swiper.css";
// Required Modules
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import GameSlide from "../game-slide/GameSlide";

export default function GameSwiper({ games }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game) => (
     
          <SwiperSlide key={game._id}>
          <GameSlide 
          game={game}
          active={active}
          toggleVideo={handleToggleVideo}
          
          />
          </SwiperSlide>
        
      ))}
    </Swiper>
  );
}
