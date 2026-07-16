import React from 'react'
import {
  FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaAws
} from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'AWS Cloud', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
]

function Skills() {
  return (
    <section className="skills-page">
      <div className="about-header">
        <h2>My <span className="gradient-text">Skills</span></h2>
        <div className="about-underline"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
