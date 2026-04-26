import React from "react";

type Project = {
  _id: string;
  title: string;
  description: string;
  techStack?: string[];
  link?: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
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

export default ProjectCard;