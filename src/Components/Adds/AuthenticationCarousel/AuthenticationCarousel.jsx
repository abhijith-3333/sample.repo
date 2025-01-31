// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./AuthenticationCarousel.module.css";
import image1 from "../../../assets/images/adds/image 43.png";
import image2 from "../../../assets/images/adds/image 43@2x.png";
import image3 from "../../../assets/images/adds/image 43.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
        <div className={style.slide}>
          <img src={image1} alt="Slide 1" className={style.slideImage} />
        </div>

        <div className={style.slide}>
          <img src={image2} alt="Slide 2" className={style.slideImage} />
        </div>

        <div className={style.slide}>
          <img src={image3} alt="Slide 3" className={style.slideImage} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
