import { useState } from "react";
import amazon from "../assets/amazon.png";
import spotify from "../assets/spotify.png";
import wanderlust from "../assets/wanderlust.png";
import countdown from "../assets/countdown.png";

const projects = [
  {
    title: "Wanderlust – MERN Full Stack App",
    img: wanderlust,
    desc:
      "Airbnb-inspired platform featuring user authentication, listing management, reviews, MongoDB database, and Express.js backend routing."
  },
  {
    title: "Amazon Frontend Clone",
    img: amazon,
    desc:
      "High-fidelity Amazon UI clone built using CSS Grid and Flexbox with focus on responsive layouts and complex UI structure."
  },
  {
    title: "Spotify Frontend Clone",
    img: spotify,
    desc:
      "Spotify UI clone featuring sidebar navigation, hover states, playlist layouts, and clean dark interface."
  },
  {
    title: "Countdown Timer App",
    img: countdown,
    desc:
      "Vanilla JavaScript utility application focusing on DOM manipulation, interval logic, and time calculations."
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-row ${i % 2 !== 0 ? "reverse" : ""} ${
              activeIndex === i ? "active" : ""
            }`}
            onClick={() => toggleProject(i)}
          >
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>

              {activeIndex === i && (
                <p className="project-desc">{p.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
