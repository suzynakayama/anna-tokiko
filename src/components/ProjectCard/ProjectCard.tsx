import React from 'react'
import { Project } from '../../../data/Projects/Projects';
import { Link } from 'react-router-dom';

const ProjectCard: React.FC<Project> = (project: Project) => {
  return <div className="project">
    <Link to={project.link}>
      <img src={project.image} alt={project.title} className="project-img"/>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </Link>
  </div>;
};

export default ProjectCard
