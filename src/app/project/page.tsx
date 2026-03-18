import { loadProjects } from '@/lib/utils';
import Link from 'next/link';

export default function Projects() {
  const projects = loadProjects();
  const projectsUi = projects.map((project) => (
    <div className='project-item' key={project.name}>
      <img src={project.img} alt={project.name} className='project-img'/>
      <div className='project-body'>
        <h3 className='project-heading'>{project.name}</h3>
        <p className='project-brief-desc'>{project.brief}</p>
        <Link className='project-view-detail' href={'/project/' + project.slug} target='_blank' rel='noopener noreferrer'>View detail</Link>
      </div>  
    </div>
  ));

  return (
    <div className='content-section'>
      <div className='project-list'>
        {projectsUi}
      </div>
    </div>
  );
}
