import React from "react";

function ProjectItem({ image, name }) {
  return (
    <div>
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
