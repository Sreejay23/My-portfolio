import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section className="contact-page">
      <div className="page-header">
        <p className="page-tag">LET'S TALK</p>
        <h2>Get In <span className="blue">Touch</span></h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-left">
          <h3>Let's work together</h3>
          <p>I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hello — my inbox is always open!</p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon-wrap"><FaEnvelope /></div>
              <div>
                <p className="detail-label">Email</p>
                <a href="mailto:sreejay129@gmail.com">sreejay129@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon-wrap"><FaPhoneAlt /></div>
              <div>
                <p className="detail-label">Phone</p>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon-wrap"><FaMapMarkerAlt /></div>
              <div>
                <p className="detail-label">Location</p>
                <p>Thoothukudi, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/Sreejay23" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/sreejay-a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="john@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary full-width">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
