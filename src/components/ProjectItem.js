import React from "react";
// import technologies from "../data/user"

function ProjectItem({ name, about, technologies }) {
  const arrayOfTechnologies=technologies.map((technology)=>{
    return  <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {arrayOfTechnologies}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
