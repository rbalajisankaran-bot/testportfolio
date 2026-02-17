const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3>Bachelor of Engineering in ECE</h3>
              <h4>Electronics and Communication Engineering</h4>
              <div className="education-info">
                <div className="cgpa-badge">
                  <span className="cgpa-label">CGPA</span>
                  <span className="cgpa-value">8.51</span>
                </div>
              </div>
              <div className="education-highlights">
                <h5>Final Year Project:</h5>
                <div className="project-highlight">
                  <p><strong>Air Pollution Monitoring in Stone Crusher</strong></p>
                  <p>An IoT-based environmental monitoring system designed to track and analyze air quality in stone crushing operations.</p>
                  <div className="achievement-badge">
                    <span>🏆 Finalist - Naan Mudhalvan's Niral Thiruvuzha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
