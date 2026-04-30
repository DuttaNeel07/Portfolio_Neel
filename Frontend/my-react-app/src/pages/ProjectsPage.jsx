import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/project");
      const data = await res.json();

      console.log("API DATA:", data);

      // handle different response shapes safely
      if (Array.isArray(data)) {
        setProjects(data);
      } else if (Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else {
        setProjects([]);
      }

    } catch (err) {
      console.error("Fetch error:", err);
      setProjects([]);
    }
  };

  return (
    <div>
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