import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about-page">
      <div className="page-header">
        <p className="page-tag">WHO I AM</p>
        <h2>About <span className="blue">Me</span></h2>
        <div className="header-line"></div>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <div className="about-img-wrap">
            <div className="about-img-bg"></div>
            <div className="about-info-card">
              <div className="info-row">📍 Thoothukudi, Tamil Nadu</div>
              <div className="info-row">🎓 B.E Computer Science</div>
              <div className="info-row">💼 Open to opportunities</div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h3 className="about-greeting">Nice to meet you!</h3>
          <p className="about-bio">
            I'm a software developer from Thoothukudi, Tamil Nadu. I enjoy building clean, useful web applications that solve real problems.
          </p>
          <p className="about-bio">
            Currently focused on full-stack development with React, Node.js, and cloud platforms like AWS. I love learning new technologies and constantly improving my skills.
          </p>

          <div className="about-stats-row">
            <div className="stat-box">
              <h4 className="blue">3+</h4>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h4 className="blue">9+</h4>
              <p>Technologies</p>
            </div>
            <div className="stat-box">
              <h4 className="blue">1+</h4>
              <p>Years</p>
            </div>
          </div>

          <Link to="/contact" className="btn-primary">Let's Work Together →</Link>
        </div>
      </div>
    </section>
  )
}

export default About
