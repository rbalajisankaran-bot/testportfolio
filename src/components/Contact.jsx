import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div className="method-details">
                  <span className="method-label">Email</span>
                  <a href="mailto:balaji.sankaran@example.com">rbalajisankaran@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💼</span>
                <div className="method-details">
                  <span className="method-label">Company</span>
                  <span>Skillmine Technologies</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div className="method-details">
                  <span className="method-label">Role</span>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/rbalajisankaran-bot" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/balaji-sankaran-r-b58860348/" className="social-link" aria-label="LinkedIn">LinkedIn</a>
              {/* <a href="#" className="social-link" aria-label="Twitter">Twitter</a> */}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
