import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePic from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">👋 Hello, It's Me</span>
        <h1>Sreejay A</h1>
        <h2 className="typed-role">
          And I'm a{' '}
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
            className="gradient-text"
          />
        </h2>
        <p>Building, learning, and improving every day. Passionate about creating clean and useful software.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn">View My Work →</Link>
          <a href="/resume.pdf" download className="btn btn-outline">Download CV</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Sreejay23" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/sreejay-a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-ring">
          <img src={profilePic} alt="Sreejay" />
        </div>
      </div>
    </section>
  )
}

export default Hero
