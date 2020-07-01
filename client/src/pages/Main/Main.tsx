import React from 'react';
import Intro from '../../components/Intro/Intro';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/Projects/Projects';

import './Main.css';

const Main: React.FC = () => {
  return (
    <div className="main">
      <Intro />
      {projects.map(project => (<ProjectCard {...project}/>))}
    </div>
  )
}

export default Main
