const Projects = () => {
  const projects = [
    {
      title: "Windows MFA Project",
      description: "A comprehensive multi-factor authentication system integrated directly into Windows logon, enhancing system security with modern authentication methods.",
      tags: ["Windows", "Authentication", "Security", "C++"],
      image: "/project-mfa.png",
      gradient: "project-1"
    },
    {
      title: "Sterling Accuris",
      description: "A sophisticated healthcare lab service platform that streamlines laboratory operations, patient management, and diagnostic services delivery.",
      tags: ["Healthcare", "Web Application", "Database", "API"],
      image: "/project-healthcare.png",
      gradient: "project-2"
    },
    {
      title: "Air Pollution Monitoring",
      description: "Final year project focused on monitoring air quality in stone crusher operations. Selected as finalist for Naan Mudhalvan's Niral Thiruvuzha.",
      tags: ["IoT", "Environmental", "Sensors", "Data Analysis"],
      image: "/project-airpollution.png",
      gradient: "project-3"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling && (e.target.nextElementSibling.style.display = 'block');
                  }}
                />
                <div
                  className={`project-placeholder ${project.gradient}`}
                  style={{ display: 'none' }}
                />
                <div className="project-overlay">
                  <span className="project-link">View Details →</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
