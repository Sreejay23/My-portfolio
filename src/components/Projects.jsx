import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Foodie Express",
    description: "A full-stack food delivery platform that enables users to browse menus, place orders, track deliveries in real time, and manage purchases through a seamless checkout experience. The platform also includes dedicated chef and admin dashboards for efficient order and restaurant management.",
    tech: ["HTML", "CSS", "Javascript", "React.js", "My SQL", "CI/CD", "PWA"],
    demo: "https://foodie-express-iota-ecru.vercel.app",
    repo: "https://github.com/Sreejay23/Foodie-Express"
  },
  {
    title: "AWS S3 Storage Monitor",
    description: "A serverless monitoring solution that tracks Amazon S3 bucket storage usage and trends in real time. The system automatically sends alerts, stores historical metrics for analysis, and provides a secure, scalable, and cost-efficient architecture for cloud storage monitoring.",
    tech: ["AWS Lambda", "Amazon S3", "Amazon CloudWatch", "Amazon DynamoDB", "Amazon SES", "Amazon SNS", "AWS IAM", "AWS KMS"],
  }
]

function Projects() {
  return (
    <section className="projects-page">
      <div className="page-header">
        <p className="page-tag">WHAT I'VE BUILT</p>
        <h2>My <span className="blue">Projects</span></h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-list">
        {projects.map((proj, i) => (
          <div className="project-item" key={i}>
            <div className="project-item-left" style={{ borderColor: proj.color }}>
              <div className="project-num" style={{ color: proj.color }}>0{i + 1}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t, j) => (
                  <span key={j} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="project-btns">
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-btn-primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <a href={proj.repo} target="_blank" rel="noreferrer" className="proj-btn-secondary">
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
            <div className="project-item-right" style={{ background: `linear-gradient(135deg, ${proj.color}15, ${proj.color}30)` }}>
              <div className="project-mockup">
                <div className="mockup-bar">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-line"></div>
                  <div className="mockup-line short"></div>
                  <div className="mockup-block" style={{ background: proj.color }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
export default Projects
