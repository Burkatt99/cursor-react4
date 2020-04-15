import React from "react";
import photo_one from "./images/1.jpg";
import photo_two from "./images/2.jpg";
import photo_three from "./images/3.jpg";
import photo_four from "./images/4.jpg";
import photo_five from "./images/5.jpg";
import photo_six from "./images/6.jpg";
import photo_seven from "./images/7.jpg";
import photo_eight from "./images/8.jpg";
import photo_nine from "./images/9.jpg";
import photo_ten from "./images/10.jpg";
import photo_eleven from "./images/11.jpg";
import photo_twelve from "./images/12.jpg";
import photo_thirteen from "./images/13.jpg";
import photo_fourteen from "./images/14.jpg";
import photo_fifteen from "./images/15.jpg";

import "./style.css";

export default function Galary() {
  return (
    <div className="photoBlock">
      <div className="horizont">
        <img src={photo_twelve} alt="myPhoto" />
        <img src={photo_thirteen} alt="myPhoto" />
        <img src={photo_fourteen} alt="myPhoto" />
      </div>
      <div className="vertical">
        <img src={photo_one} alt="myPhoto" />
        <img src={photo_two} alt="myPhoto" />
        <img src={photo_three} alt="myPhoto" />
        <img src={photo_eight} alt="myPhoto" />
      </div>
      <div className="vertical">
        <img src={photo_five} alt="myPhoto" />
        <img src={photo_seven} alt="myPhoto" />
        <img src={photo_eleven} alt="myPhoto" />
        <img src={photo_four} alt="myPhoto" />
      </div>
      <div className="vertical">
        <img src={photo_nine} alt="myPhoto" />
        <img src={photo_ten} alt="myPhoto" />
        <img src={photo_six} alt="myPhoto" />
        <img src={photo_fifteen} alt="myPhoto" />
      </div>
    </div>
  );
}
