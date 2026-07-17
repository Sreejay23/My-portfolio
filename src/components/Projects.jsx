import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Foodie Express",
    description: "A full-stack food delivery app with authentication, cart, orders and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://foodie-express-iota-ecru.vercel.app",
    repo: "https://github.com/Sreejay23/Foodie-Express",
    color: "#4f8ef7"
  },
  {
    title: "My Portfolio",
    description: "A modern personal portfolio website built with React. Features animations, responsive design and multi-page routing.",
    tech: ["React", "CSS3", "Vercel"],
    demo: "https://sreejayportfolio.vercel.app",
    repo: "https://github.com/Sreejay23/My-portfolio",
    color: "#a78bfa"
  }
]

function Projects() {
  return (
    <div className="page-wrap">
      <div className="sec-tag">WHAT I'VE BUILT</div>
      <h2 className="sec-title">My <span>Projects</span></h2>
      <div className="sec-line"></div>
      <div className="projects-list">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <div className="project-info">
              <div className="project-num">0{i + 1}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="tech-row">
                {proj.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link-primary"><FaExternalLinkAlt /> Live Demo</a>}
                <a href={proj.repo} target="_blank" rel="noreferrer" className="proj-link-secondary"><FaGithub /> Source Code</a>
              </div>
            </div>
            <div className="project-visual">
              <div className="proj-mockup">
                <div className="proj-mockup-bar"><span></span><span></span><span></span></div>
                <div className="proj-mockup-body">
                  <div className="proj-line"></div>
                  <div className="proj-line short"></div>
                  <div className="proj-block" style={{ background: proj.color }}></div>
                  <div className="proj-line shorter"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
