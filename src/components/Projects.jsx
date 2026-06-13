import React from 'react'
const projects = [
  {
    title: "Foodie Express - A Modern Food Delivery Platform",
    description:  "A full-stack food delivery platform that enables users to browse menus, place orders, track deliveries in real time, and manage purchases through a seamless checkout experience. The platform also includes dedicated chef and admin dashboards for efficient order and restaurant management.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "GitHub Pages", "CI/CD", "PWA"],
    //demo: "https://your-demo-link.com",
    //repo: "https://github.com/yourname/project-one"
  },
  {
    title: "AWS S3 Storage Monitor",
    description:  "A serverless monitoring solution that tracks Amazon S3 bucket storage usage and trends in real time. The system automatically sends alerts, stores historical metrics for analysis, and provides a secure, scalable, and cost-efficient architecture for cloud storage monitoring.",
    tech:  ["AWS Lambda", "Amazon S3", "Amazon CloudWatch", "Amazon DynamoDB", "Amazon SES", "Amazon SNS", "AWS IAM", "AWS KMS"],
    //demo: "",
    //repo: "https://github.com/yourname/project-two"
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((t, j) => <span key={j}>{t}</span>)}
            </div>
            <div className="project-links">
              {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>}
              <a href={proj.repo} target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects