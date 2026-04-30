function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      {project.techStack && project.techStack.length > 0 && (
        <p>
          <strong>Tech:</strong> {project.techStack.join(", ")}
        </p>
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};

export default ProjectCard;