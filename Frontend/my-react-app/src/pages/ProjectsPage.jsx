import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";

// ── Fallback projects shown when your backend isn't running ──
// Replace these with your real projects, or leave them as placeholders
const PLACEHOLDER_PROJECTS = [
  {
    _id: "1",
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Vite. Displays my projects, skills, and a contact form connected to a Node.js backend.",
    techStack: ["React", "JavaScript", "CSS", "Node.js"],
    link: "https://github.com/DuttaNeel07/Portfolio_Neel",
  },
  {
    _id: "2",
    title: "Coming Soon",
    description: "I'm actively working on new projects. Check back soon — or connect with me and let's build something together!",
    techStack: ["???"],
    link: "",
  },
];

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:8000/project");

      if (!res.ok) throw new Error("Server returned an error");

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setProjects(data);
      } else if (Array.isArray(data.projects) && data.projects.length > 0) {
        setProjects(data.projects);
      } else {
        // Backend responded but with empty data — use placeholders
        setProjects(PLACEHOLDER_PROJECTS);
      }

    } catch (err) {
      // Backend is likely not running — use placeholders silently
      console.info("Backend not reachable, showing placeholder projects.");
      setProjects(PLACEHOLDER_PROJECTS);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="projects-page fade-up">
      <span className="section-tag">Work</span>
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-sub">Things I've built while learning to code</p>

      {loading ? (
        <div className="projects-loading">
          <div className="loader" />
          <p>Loading projects…</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;