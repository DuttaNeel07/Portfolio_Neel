import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";

const PLACEHOLDER_PROJECTS = [
  {
    _id: "1",
    title: "Fellowship Tracker",
    description: "A platform to discover and track tech fellowships, hackathons, and contests with automated query generation and real-time updates.",
    techStack: ["Python", "FastAPI", "MongoDB"],
    link: "",
  },
  {
    _id: "2",
    title: "PhishGuard",
    description: "A phishing URL detection system that analyzes links using heuristics and security signals to identify malicious websites.",
    techStack: ["Python", "FastAPI", "Cybersecurity"],
    link: "https://github.com/DuttaNeel07/PhishGuard",
  },
  {
    _id: "3",
    title: "Shawty (URL Shortener)",
    description: "A scalable URL shortener with custom link generation, redirection handling, and basic analytics tracking.",
    techStack: ["Node.js", "Express", "MongoDB", "REST API"],
    link: "https://github.com/DuttaNeel07/Shawty",
  },
  {
    _id: "4",
    title: "TrackOps",
    description: "An operations tracking system to monitor tasks, workflows, and progress with structured logging and analytics.",
    techStack: ["React", "Node.js", "MongoDB", "Full Stack"],
    link: "https://github.com/DuttaNeel07/TrackOps",
  },
  {
    _id: "5",
    title: "Portfolio Website",
    description: "Personal portfolio with dynamic project fetching and backend-powered contact system for storing messages.",
    techStack: ["React", "JavaScript", "CSS", "Node.js"],
    link: "https://github.com/DuttaNeel07/Portfolio_Neel",
  }
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
        setProjects(PLACEHOLDER_PROJECTS);
      }

    } catch (err) {
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