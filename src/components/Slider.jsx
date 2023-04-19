import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/slider.scss';
import reviews from '../assets/reviews';

const SliderComments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="slider__inner">
      <div className="container">
        <Slider {...settings}>
          {reviews.map((item) => (
            <div style={{ width: 100 }} key={item.id} className="comment">
              <div className="comment__inner">
                <div className="comment__wrap-img-title">
                  <div className="comment__img">
                    <img src={item.avatar} alt="аватарка" />
                  </div>
                  <h3>{item.name}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComments;
