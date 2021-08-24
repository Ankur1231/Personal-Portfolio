import { useState, useEffect } from "react";
import "./Projects.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { allproj, htmlproj, reactproj, phpproj, fullstackproj } from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "ALL",
    },
    {
      id: "html",
      title: "Html/css/javascript",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "php",
      title: "PHP",
    },
    {
      id: "fullstack",
      title: "Full Stack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allproj);
        break;
      case "html":
        setData(htmlproj);
        break;
      case "react":
        setData(reactproj);
        break;
      case "php":
        setData(phpproj);
        break;
      case "fullstack":
        setData(fullstackproj);
        break;
      default:
        setData(allproj);
        break;
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item, index) => (
          <div className="item">
            <img src={item.img} alt="tindog" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
