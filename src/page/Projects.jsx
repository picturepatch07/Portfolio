import React from "react";
import ProjectItem from "../Components/ProjectSection/ProjectItem";
import { ProjectList } from "../helper/ProjectList";
import "./Projects.css";

function Project() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              image={project.image}
              name={project.name}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
