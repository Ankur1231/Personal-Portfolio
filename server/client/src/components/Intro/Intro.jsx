import "./Intro.scss";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import Zoom from "@material-ui/core/Zoom";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../config/particle-config";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["web developer", "student", "learner", "gamer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <Particles className="part" params={particlesConfig} />
      <div className="left">
        <div className="imgContainer">
          <img src="assets/codegeass.jpg" alt="code geass" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ankur Udey</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href="#projects">
            <Zoom in={true} style={{ transitionDelay: true ? "700ms" : "0ms" }}>
              <KeyboardArrowDownRoundedIcon style={{ fontSize: 70, color: "white" }} />
            </Zoom>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
