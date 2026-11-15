function ProjectCard({ project }) {
  return (
    <li className="project-row">
      <div className="thumb">
        {project.image ? (
          <img src={project.image} alt="" />
        ) : (
          <span className="thumb-x">✕</span>
        )}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;