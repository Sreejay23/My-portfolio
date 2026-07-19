import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <div className="page-wrap">
      <div className="sec-tag">LET'S TALK</div>
      <h2 className="sec-title">Get In <span>Touch</span></h2>
      <div className="sec-line"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h3>Let's work together</h3>
          <p>I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hello — my inbox is always open!</p>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-icon"><FaEnvelope /></div>
              <div>
                <p className="contact-item-label">Email</p>
                <a href="mailto:sreejay129@gmail.com">sreejay129@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><FaPhoneAlt /></div>
              <div>
                <p className="contact-item-label">Phone</p>
                <p>+91 6379521125</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><FaMapMarkerAlt /></div>
              <div>
                <p className="contact-item-label">Location</p>
                <p>Thoothukudi, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/Sreejay23" target="_blank" rel="noreferrer" className="contact-social-btn"><FaGithub /></a>
            <a href="https://linkedin.com/in/sreejay-a" target="_blank" rel="noreferrer" className="contact-social-btn"><FaLinkedin /></a>
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
            <button type="submit" className="btn-glow w-full">Send Message →</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
