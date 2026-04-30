import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View ↗
          </a>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      {project.techStack && project.techStack.length > 0 && (
        <div className="project-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;