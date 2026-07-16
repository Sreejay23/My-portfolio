import React from 'react'
import {
  FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaAws
} from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

const skills = [
  { name: 'Java', icon: <FaJava />, level: 75 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 80 },
  { name: 'React.js', icon: <FaReact />, level: 85 },
  { name: 'MySQL', icon: <SiMysql />, level: 70 },
  { name: 'AWS Cloud', icon: <FaAws />, level: 65 },
  { name: 'Git', icon: <FaGitAlt />, level: 80 },
  { name: 'GitHub', icon: <FaGithub />, level: 80 },
]

function Skills() {
  return (
    <section className="skills-page">
      <div className="page-header">
        <p className="page-tag">WHAT I KNOW</p>
        <h2>My <span className="blue">Skills</span></h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div className="skill-row" key={i}>
            <div className="skill-label">
              <span className="skill-icon-sm">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
