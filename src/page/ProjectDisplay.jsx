import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import { GitHub } from "@mui/icons-material";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHub />
    </div>
  );
}

export default ProjectDisplay;
