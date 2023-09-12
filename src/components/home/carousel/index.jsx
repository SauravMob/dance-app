import React from "react";

const Carousel = () => {
  return (
    <div className="industriestypes__casestudies-slider" id="slider">
      <input type="radio" name="slider" id="s1" className="radiobtn" checked />
      <input type="radio" name="slider" id="s2" className="radiobtn" />
      <input type="radio" name="slider" id="s3" className="radiobtn" />
      <input type="radio" name="slider" id="s4" className="radiobtn" />
      <input type="radio" name="slider" id="s5" className="radiobtn" />
      <label for="s1" id="slide1" className="label1">
        <div className="industriestypes__slider">
          <img src="./images/aware-box.png" alt="aware-box" />
        </div>
      </label>
      <label for="s2" id="slide2" className="label2">
        <div className="industriestypes__slider">
          <img src="./images/chicken-lover.png" alt="chicken-lover" />
        </div>
      </label>
      <label for="s3" id="slide3" className="label3">
        <div className="industriestypes__slider">
          <img src="./images/green.png" alt="green" />
        </div>
      </label>
      <label for="s4" id="slide4" className="label4">
        <div className="industriestypes__slider">
          <img src="./images/chicken-lover.png" alt="chicken-lover" />
        </div>
      </label>
      <label for="s5" id="slide5" className="label5">
        <div className="industriestypes__slider">
          <img src="./images/green.png" alt="green" />
        </div>
      </label>
    </div>
  );
};

export default Carousel;
