import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Foodie Express",
    description:
      "Developed a responsive full-stack food delivery platform with secure user authentication, shopping cart, and order management features. Built an intuitive user interface with real-time order tracking and an admin dashboard for efficient restaurant management. Designed the application with a modern, mobile-friendly interface and optimized performance for a seamless user experience.",
    tech: ["React.js", "HTML", "CSS", "JavaScript", "MySQL"]
  },
  {
    title: "AWS S3 Storage Monitor",
    description:
      "Designed a serverless cloud monitoring system to track Amazon S3 bucket storage usage and performance trends. Automated real-time email notifications using AWS Lambda, Amazon SES, and SNS while storing historical metrics in DynamoDB. Implemented a secure, scalable, and cost-efficient event-driven architecture using IAM roles, CloudWatch, and AWS KMS.",
    tech: ["AWS Lambda", "Amazon S3", "CloudWatch", "Amazon SES", "Amazon SNS", "DynamoDB", "IAM", "AWS KMS"]
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
