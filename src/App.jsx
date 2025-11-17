import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1>Muhammad Shamil</h1>
        <p className="tagline">Aspiring AI/ML Engineer & Tech Enthusiast</p>
      </header>

      <main className="main-content">
        {/* About Me Section */}
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            I am a B.Tech student specializing in Artificial Intelligence and Machine Learning,
            passionate about building intelligent systems and modern applications. I enjoy working
            on projects that combine creativity, logic, and real-world impact. Currently, I am
            exploring full-stack development and machine learning to build innovative products.
          </p>
          <p>
            Along with my academic journey, I am actively learning modern tools and frameworks to
            prepare myself for a future in tech entrepreneurship and startup building.
          </p>
        </section>

        {/* Hobbies & Interests Section */}
        <section className="section" id="hobbies">
          <h2>Hobbies & Interests</h2>
          <ul className="card-list">
            <li className="card">
              <h3>Football</h3>
              <p>
                I enjoy playing football, which helps me stay active, disciplined, and learn the
                importance of teamwork and strategy.
              </p>
            </li>
            <li className="card">
              <h3>Coding & Problem Solving</h3>
              <p>
                I like solving coding challenges and building small projects to sharpen my logical
                thinking and improve my programming skills.
              </p>
            </li>
            <li className="card">
              <h3>Tech & Startups</h3>
              <p>
                I follow modern technology trends and startup stories, which inspires me to build
                something innovative in the future.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-pill">JavaScript & React</div>
            <div className="skill-pill">Python</div>
            <div className="skill-pill">Git & GitHub</div>
            <div className="skill-pill">Problem Solving</div>
            <div className="skill-pill">Teamwork & Communication</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhammad Shamil · Personal Portfolio</p>
      </footer>
    </div>
  );
}

export default App;