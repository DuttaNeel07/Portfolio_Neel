import { useEffect, useState } from "react";
import ProjectCard from "../components/projectCard";

type Project = {
  _id: string;
  title: string;
  description: string;
  techStack?: string[];
  link?: string;
};

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:8000/project");
      const data = await response.json();

      setProjects(data); // adjust if wrapped

    } catch (error) {
      console.log("Error fetching projects", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))
      )}
    </div>
  );
}

export default ProjectsPage;