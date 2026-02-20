import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Balaji Sankaran | Software Developer Portfolio</title>
        <meta name="description" content="Balaji Sankaran - Software Developer at Skillmine Technologies. Expert in authentication systems, healthcare technology, React, Node.js, and more." />
      </Helmet>
      <section id="home" className="hero" aria-label="Hero section">
        <div className="hero-background" aria-hidden="true">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-title">
              <span className="title-line">Balaji Sankaran</span>
              <span className="title-line">Software Developer</span>
            </h1>
            <p className="hero-subtitle">
              Crafting innovative software solutions with expertise in authentication systems and healthcare technology
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" aria-label="View my featured projects">View Projects</a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
