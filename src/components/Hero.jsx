import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import profilePic from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">Available for work ✅</div>
        <h1 className="hero-name">
          Hi, I'm<br />
          <span className="hero-name-blue">Sreejay A</span>
        </h1>
        <div className="hero-role">
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'React Developer', 2000,
              'AWS Engineer', 2000,
              'Software Engineer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="hero-desc">
          I build clean, fast, and user-friendly web applications. Passionate about turning ideas into reality with code.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">See My Work</Link>
          <a href="/resume.pdf" download className="btn-secondary">
            <FaDownload /> Download CV
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/Sreejay23" target="_blank" rel="noreferrer" className="social-btn">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/sreejay-a" target="_blank" rel="noreferrer" className="social-btn">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-container">
          <div className="hero-img-bg"></div>
          <img src={profilePic} alt="Sreejay" className="hero-img" />
          <div className="hero-badge-card">
            <span className="badge-icon">💻</span>
            <div>
              <p className="badge-title">Full Stack Dev</p>
              <p className="badge-sub">React + Node.js</p>
            </div>
          </div>
          <div className="hero-badge-card2">
            <span className="badge-icon">☁️</span>
            <div>
              <p className="badge-title">Cloud</p>
              <p className="badge-sub">AWS Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
