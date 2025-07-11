
import './App.css'


function App() {
    const name = "John Doe";
    const profession = "Full Stack Developer";
    const projects = [
        {
            "title": "Project 1",
            "description": "A web application built using React and Node.js",
            "link":"#"
        },
        {
            "title": "Project 2",
            "description": "An eCommerce platform built using Django.",
            "link":"#"
        }

    ]
  return (
      <div className="App">
          {/* Header Section */}
          <header className={"header"}>
                <h1>{name}</h1>
              <p>{profession}</p>
              <nav>
                  <a href="#about">About</a>
                  <a href="#Projects">Projects</a>
                  <a href="#Contact">Contact</a>
              </nav>
          </header>

          {/* About Section */}
          <section id={"about"} className={"about-section"}>
              <h2>About me</h2>
              <p>Hello I am {name}, a passionate {profession}. I love building web applications that solve real world user problems</p>
          </section>

          {/* Project Section */}
          <section id = "projects" className={"project-section"}>
              <h2>Projects</h2>
              <div className="projects-list">
                  {projects.map((project,index) => (
                      <div key={index} className={"project-item"}>
                          <h3>{project.title}</h3>
                          <h3>{project.description}</h3>
                          <a href ={project.link} target={"_blank"} rel="noopener noreferrer">View Project</a>
                      </div>

                  ))}

              </div>
          </section>
          {/* Contact Section */}
          <section id ="contact" className={"contact-section"}>
              <h2>Contact me</h2>
              <p>If you would like to get in touch, feel free to email me at <a href="mailto:johndoe@example.com">johndoe@example.com</a></p>
          </section>

          {/* Footer Section */}
          <footer className={"footer"}>
              <p>2025. All Right Reserved</p>
          </footer>
      </div>
  );
}

export default App
