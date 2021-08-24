import React from "react";
import "./Skills.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { dataSkills } from "../../dataSkills";

function Skills() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handelClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < dataSkills.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="Skills" id="skills">
      <h1>Skills</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {dataSkills.map((val, index) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imagecontainer">
                    <img src={val.icon} alt="frontend" />
                  </div>
                  <h2>{val.title}</h2>
                </div>
              </div>
              <div className="right">
                <div className="rightcontainer">
                  {val.skill.map((item) => (
                    <span>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosIcon className="arrow left" onClick={() => handelClick("left")} />
      <ArrowForwardIosIcon className="arrow right" onClick={() => handelClick()} />
    </div>
  );
}

export default Skills;
