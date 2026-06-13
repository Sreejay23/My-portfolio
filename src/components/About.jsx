import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <h2>About <span className="gradient-text">Me</span></h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a software developer who enjoys turning ideas into working products.
            I'm currently focused on full-stack development, with hands-on experience
            in React, Java, and cloud platforms like AWS. I like solving real problems,
            writing clean code, and constantly learning new tools.
          </p>
          <p className="about-fun">
            Outside of coding, I enjoy dancing — it keeps me curious and
            helps me approach problems from different angles.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3 className="gradient-text">3+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">5+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat-card">
            <h3 className="gradient-text">1</h3>
            <p>Year of Learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About