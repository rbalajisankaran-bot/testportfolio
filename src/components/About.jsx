const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content-centered">
          <div className="about-text">
            <h3>Passionate about building exceptional software solutions</h3>
            <p>
              I'm a 22-year-old software developer currently working at Skillmine Technologies, where I contribute to innovative projects that make a real-world impact. With a strong foundation in electronics and communication engineering, I bring a unique perspective to software development.
            </p>
            <p>
              My expertise lies in developing secure authentication systems and healthcare technology solutions. I'm committed to writing clean, efficient code and creating applications that enhance user experience while maintaining the highest security standards.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">22</span>
                <span className="stat-label">Years Old</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.51</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
