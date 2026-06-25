

function Projects() {
  return (
    <section id="projects" className="section container ">
      <h2>Projects</h2>

      <div className="projects-grid">

        <article className="project-card">
          <span>01</span>

          <h3>E-Commerce Website</h3>

          <p>
            Responsive e-commerce website featuring product pages,
            shopping cart functionality and a modern UI.
          </p>

          <div className="project-links">

            <a href="https://ecommerce-website-iota-tan.vercel.app/" target="_blank">
              Live Demo
            </a>

            <a href="https://github.com/Anfas01/ecommerce-website" target="_blank">
              Source Code
            </a>

          </div>
        </article>

        <article className="project-card">
          <span>02</span>

          <h3>Portfolio Website</h3>

          <p>
            Personal portfolio built with a minimalist design and
            responsive layout.
          </p>

          <div className="project-links">
            <a href="#">Live Demo</a>
            <a href="https://github.com/Anfas01/Anfas01.github.io" target="_blank">
              Source Code
            </a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects