import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section className="contact-page">
      <div className="about-header fade-in-up">
        <h2>Get In <span className="gradient-text">Touch</span></h2>
        <div className="about-underline"></div>
      </div>
      <p className="contact-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

      <div className="contact-content">
        <div className="contact-info fade-in-left">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <a href="mailto:sreejay129@gmail.com">sreejay129@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Thoothukudi, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Sreejay23" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/sreejay-a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <form className="contact-form fade-in-right" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message →</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
