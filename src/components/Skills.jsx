import React from 'react'
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa'
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
    <div className="page-wrap">
      <div className="sec-tag">WHAT I KNOW</div>
      <h2 className="sec-title">My <span>Skills</span></h2>
      <div className="sec-line"></div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
