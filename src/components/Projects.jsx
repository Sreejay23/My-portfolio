import React from 'react'

const projects = [
  {
    title: "Foodie Express",
    description: "A full-stack food delivery app with authentication, cart, orders and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://foodie-express-iota-ecru.vercel.app",
    repo: "https://github.com/Sreejay23/Foodie-Express"
  }
]

function Projects() {
  return (
    <section className="projects-page">
      <div className="about-header">
        <h2>My <span className="gradient-text">Projects</span></h2>
        <div className="about-underline"></div>
      </div>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <div className="project-number">0{i + 1}</div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((t, j) => <span key={j}>{t}</span>)}
            </div>
            <div className="project-links">
              {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo →</a>}
              <a href={proj.repo} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
