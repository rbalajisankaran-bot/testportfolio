import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll listener for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll-triggered reveal animation using IntersectionObserver
    const revealEls = document.querySelectorAll(
      '.project-card, .skill-card, .experience-card, .education-card, .contact-content, .about-content-centered, .about-stats, .stat-item'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Add reveal class to all targets before observing
    revealEls.forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger siblings inside grids
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children);
        const idx = siblings.indexOf(el);
        if (idx > 0) el.classList.add(`reveal-delay-${Math.min(idx, 3)}`);
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
