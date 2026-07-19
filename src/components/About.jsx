import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page-wrap">
      <div className="sec-tag">WHO I AM</div>
      <h2 className="sec-title">About <span>Me</span></h2>
      <div className="sec-line"></div>
      <div className="about-grid">
        <div className="about-left">
          <div className="about-info-box">
            <div className="info-row">📍 Thoothukudi, Tamil Nadu</div>
            <div className="info-row">🎓 B.E Mechanical Engineering</div>
            <div className="info-row">💼 Open to opportunities</div>
            <div className="info-row">🌐 Full Stack Developer</div>
            <div className="info-row">☁️ AWS Cloud Enthusiast</div>
          </div>
        </div>
        <div className="about-right">
          <h3 className="about-greeting">Nice to meet you! 👋</h3>
          <p className="about-bio">I'm a software developer from Thoothukudi, Tamil Nadu. I enjoy building clean, useful web applications that solve real problems.</p>
          <p className="about-bio">Currently focused on full-stack development with React, Node.js, and cloud platforms like AWS. I love learning new technologies and constantly improving my skills.</p>
          <div className="stats-row">
            <div className="stat-box"><h4>3+</h4><p>Projects</p></div>
            <div className="stat-box"><h4>9+</h4><p>Technologies</p></div>
            <div className="stat-box"><h4>1+</h4><p>Years</p></div>
          </div>
          <Link to="/contact" className="btn-glow">Let's Work Together <span>→</span></Link>
        </div>
      </div>
    </div>
  )
}

export default About
