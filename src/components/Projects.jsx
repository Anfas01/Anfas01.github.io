
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section container ">
      <h2>Projects</h2>

      <div className="projects-grid">

        <article className="project-card">
          <img
            src="/portfolio.png"
            alt="Portfolio Website"
            className="project-image"
          />

          <span className="project-number">01</span>

          <h3>Portfolio Website</h3>

          <p>
            Modern personal portfolio built with React, featuring a responsive
            design, smooth user experience, and project showcase section.
          </p>

          <div className="project-links">
            <a
              href="https://anfas01.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/Anfas01/Anfas01.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/e-commerce.png"
            alt="E-Commerce Website"
            className="project-image"
          />

          <span className="project-number">02</span>

          <h3>E-Commerce Website</h3>

          <p>
            Responsive e-commerce website with product browsing,
            cart functionality and a clean shopping experience.
          </p>

          <div className="project-links">
            <a
              href="https://ecommerce-website-iota-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/Anfas01/ecommerce-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects