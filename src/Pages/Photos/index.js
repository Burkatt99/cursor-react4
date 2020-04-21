import React from "react";
import photo_one from "../../assets/images/1-min.jpg";
import photo_two from "../../assets/images/2-min.jpg";
import photo_three from "../../assets/images/3-min.jpg";
import photo_four from "../../assets/images/4-min.jpg";
import photo_five from "../../assets/images/5-min.jpg";
import photo_six from "../../assets/images/6-min.jpg";
import photo_seven from "../../assets/images/7-min.jpg";
import photo_eight from "../../assets/images/8-min.jpg";
import photo_nine from "../../assets/images/9-min.jpg";
import photo_ten from "../../assets/images/10-min.jpg";
import photo_eleven from "../../assets/images/11-min.jpg";
import photo_twelve from "../../assets/images/12-min.jpg";
import photo_thirteen from "../../assets/images/13-min.jpg";
import photo_fourteen from "../../assets/images/14-min.jpg";
import photo_fifteen from "../../assets/images/15-min.jpg";

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
