import React from 'react';

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p><strong>Tech Stack:</strong> {tech}</p>
      <p>{description}</p>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          🔗 View Project
        </a>
      ) : null}
    </div>
  );
}
