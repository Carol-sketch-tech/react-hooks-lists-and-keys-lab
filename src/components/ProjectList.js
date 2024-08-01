import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // const {technologies} = projects
  console.log(projects);
  const {id, name, about,technologies} = projects;
  const arrayOfProjects=projects.map((project)=>{
  return <li key={project.id}>{project}</li> })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {arrayOfProjects}
        <ProjectItem technologies={technologies}/>
        </div>
    </div>
  );
}

export default ProjectList;
