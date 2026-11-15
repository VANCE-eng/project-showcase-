import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';
import useProjects from '../hooks/useProjects';

function ProjectList() {
  const { filteredProjects } = useProjects();

  return (
    <section className="panel">
      <SearchBar />
      <ul className="project-list">
        {filteredProjects.length === 0 ? (
          <li className="empty">No projects found.</li>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </ul>
    </section>
  );
}

export default ProjectList;