const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <h3>Software Developer</h3>
                <h4>Skillmine Technologies</h4>
              </div>
              <div className="experience-period">
                <span>Present</span>
              </div>
            </div>
            <p className="experience-description">
              Working on cutting-edge software solutions, contributing to enterprise-level applications with a focus on security and user experience. Collaborating with cross-functional teams to deliver high-quality software products.
            </p>
            <div className="experience-highlights">
              <h5>Key Contributions:</h5>
              <ul>
                <li>Developed and maintained enterprise security solutions</li>
                <li>Collaborated on healthcare technology projects</li>
                <li>Implemented robust authentication systems</li>
                <li>Optimized application performance and user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
