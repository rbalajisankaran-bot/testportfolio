import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Balaji Sankaran | Software Developer Portfolio</title>
        <meta name="description" content="Balaji Sankaran — Software Developer at Skillmine Technologies. Expert in authentication systems, healthcare technology, React, and Node.js." />
      </Helmet>
      <section id="home" className="hero" aria-label="Hero section">
        <div className="hero-background" aria-hidden="true">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Software Developer · Skillmine Technologies</p>
            <h1 className="hero-title">
              <span className="title-line">
                <span className="title-line-inner">Balaji</span>
              </span>
              <span className="title-line">
                <span className="title-line-inner">Sankaran</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              Building secure authentication systems and healthcare technology with clean, intentional code.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" aria-label="View my featured projects">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-arrow"></div>
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
