import React from 'react'

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
      <div className="about-header fade-in-up">
        <h2>My <span className="gradient-text">Projects</span></h2>
        <div className="about-underline"></div>
      </div>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card fade-in-up" key={i}>
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
