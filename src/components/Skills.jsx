const Skills = () => {
  const skillsData = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces with modern frameworks and best practices",
      skills: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Developing scalable server-side applications and APIs with robust architecture and security",
      skills: ["Node.js", "Python", "REST APIs", "Database Design"]
    },
    {
      icon: "🔒",
      title: "Security & Authentication",
      description: "Implementing secure authentication systems and following security best practices",
      skills: ["MFA", "Windows Auth", "OAuth", "Security Protocols"]
    },
    {
      icon: "🏥",
      title: "Healthcare Technology",
      description: "Experience in developing healthcare applications and lab management systems",
      skills: ["Lab Systems", "Patient Data", "HIPAA Compliance", "Healthcare APIs"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-list">
                {skill.skills.map((item, itemIndex) => (
                  <span key={itemIndex}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
