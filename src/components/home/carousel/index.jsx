import React from "react";
import fantasy from '../../assets/images/fantasy.jpg'
import forest from '../../assets/images/forest.jpg'
import leftDay from '../../assets/images/left-day.jpg'
import leftNight from '../../assets/images/left-night.jpg'
import moon from '../../assets/images/moon.jpg'


const Carousel = () => {
  return (
    <div className="ambassador-slider" id="slider">
      <input type="radio" name="slider" id="s1" className="radiobtn" checked />
      <input type="radio" name="slider" id="s2" className="radiobtn" />
      <input type="radio" name="slider" id="s3" className="radiobtn" />
      <input type="radio" name="slider" id="s4" className="radiobtn" />
      <input type="radio" name="slider" id="s5" className="radiobtn" />
      <label for="s1" id="slide1" className="label1">
        <div className="ambassador-slider-img">
          <img src={fantasy} alt="fantasy" />
        </div>
      </label>
      <label for="s2" id="slide2" className="label2">
        <div className="ambassador-slider-img">
          <img src={forest} alt="forest" />
        </div>
      </label>
      <label for="s3" id="slide3" className="label3">
        <div className="ambassador-slider-img">
          <img src={leftDay} alt="left day" />
        </div>
      </label>
      <label for="s4" id="slide4" className="label4">
        <div className="ambassador-slider-img">
          <img src={leftNight} alt="left night" />
        </div>
      </label>
      <label for="s5" id="slide5" className="label5">
        <div className="ambassador-slider-img">
          <img src={moon} alt="moon" />
        </div>
      </label>
    </div>
  );
};

export default Carousel;
