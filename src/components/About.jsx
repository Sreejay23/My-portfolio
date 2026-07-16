import React from 'react'

function About() {
  return (
    <section className="about-page">
      <div className="about-header">
        <h2>About <span className="gradient-text">Me</span></h2>
        <div className="about-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-text fade-in-left">
          <p>
            I'm a software developer from Thoothukudi, Tamil Nadu, India. I enjoy turning ideas into working products using clean code and modern technologies.
          </p>
          <p>
            I'm currently focused on full-stack development with hands-on experience in React, Java, and cloud platforms like AWS. I love solving real problems and constantly learning new tools.
          </p>
          <p className="about-fun">
            Outside of coding, I enjoy exploring new technologies and staying up to date with the latest trends in the tech world.
          </p>
        </div>

        <div className="about-stats fade-in-right">
          <div className="stat-card">
            <h3 className="gradient-text">3+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">9+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">1+</h3>
            <p>Years Learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
