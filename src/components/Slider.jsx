import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/slider.scss';
import comments from '../assets/comments';

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
          {comments.map((comment) => (
            <div style={{ width: 100 }} key={comment.id} className="comment">
              <div className="comment__inner">
                <div className="comment__wrap-img-title">
                  <div className="comment__img">
                    <img src={comment.avatar} alt="аватарка" />
                  </div>
                  <h3>{comment.author}</h3>
                </div>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComments;
