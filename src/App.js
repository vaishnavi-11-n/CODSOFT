import "./App.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-3xl font-bold text-cyan-400">
          Vaishnavi Parab
        </h1>

        <ul className="flex gap-6 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
       id="home"
        className="flex flex-col justify-center items-center text-center h-[80vh] px-4"
        >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          B.Sc. IT Graduate
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
          Python Developer | React Developer | Backend Enthusiast
        </h3>
        <p className="text-gray-400 text-xl max-w-2xl">
          B.Sc. Information Technology graduate with a strong interest in software development, web technologies, and backend development. Passionate about building practical projects using Python, React, Django, SQL, and modern development tools.
        </p>
        <p className="mt-6 text-cyan-400 text-base">
        Open to Software Developer, Python Developer and Web Developer opportunities.
        </p>

        <a href="#projects">
          <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold">
            View Projects
           
          </button>
        </a>

      </section>

      {/* About */}
<section id="about" className="px-10 py-20 text-center">

  <h2 className="text-4xl font-bold text-cyan-400 mb-6">
    About Me
  </h2>

  <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-8">
    I am Vaishnavi Parab, a B.Sc. Information Technology graduate from the
    University of Mumbai with a CGPA of 9.62. I enjoy developing responsive
    web applications and continuously improving my technical skills through
    projects, internships, and virtual experience programs.
  </p>

  <p className="max-w-4xl mx-auto text-gray-400 text-lg mt-4 leading-8">
    My interests include Python development, React, Django, SQL, and software
    engineering. I have developed projects ranging from responsive websites
    to a blockchain-based voting system and am actively seeking opportunities
    to grow as a software developer.
  </p>

</section>
    {/* Skills */}
      <section id="skills" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Tailwind CSS</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">PostgreSQL</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Power BI</div>
          <div className="skill-card">Tableau</div>
          <div className="skill-card">Excel</div>
          <div className="skill-card">Linux</div>
          <div className="skill-card">Windows</div>
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          
        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Projects
        </h2>

        {/* Project 1 */}
        <div className="project-card">
        <h3 className="text-2xl font-bold mb-3">
          DecentraVote – Blockchain Voting System
        </h3>
       <p>
          Developed a secure blockchain-based online voting system using React,
          Django, Ethereum, Solidity and PostgreSQL. The application provides
          voter authentication, candidate management, transparent vote recording
          and AI-powered fraud detection for secure and tamper-proof digital
          elections.
        </p>
        <p className="mt-3 text-cyan-400">
        <strong>Tech Stack:</strong> React, Django, Solidity, Ethereum, PostgreSQL
        </p>    
        </div>
       {/* Project 2 */}
        <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
          ATM Management System
          </h3>
          <p>
            Developed an ATM Management System that enables secure user login,
            balance enquiry, cash withdrawal, cash deposit and transaction
            management using a MySQL database for data storage.
          </p>
          <p className="mt-3 text-cyan-400">
            <strong>Tech Stack:</strong> Python, MySQL
            </p>
            </div>
          {/* Project 3 */}
          <div  className="project-card">
          <h3 className="text-2xl font-bold mb-3">
          Four-Way Traffic Signal Management System
          </h3>
          <p>
            Designed and implemented a traffic signal management system that
            simulates and controls traffic flow efficiently at a four-way
            intersection using Python programming and logical traffic control.
          </p>
          <p className="mt-3 text-cyan-400">
          <strong>Tech Stack:</strong> Python
          </p>
          </div>
          {/* Project 4 */}
          <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
            Recursive Cherry Blossom Tree Generator
          </h3>
          <p>
           Developed a recursive Cherry Blossom Tree visualization using Python Turtle Graphics. The project utilizes recursion, randomized branching and blossom generation to create a unique tree structure during every execution.
          </p>
          <p className="mt-3 text-cyan-400">
          <strong>Tech Stack:</strong> Python, Turtle Graphics
          </p>
        </div>

      </section>

      {/* Education */}
      <section id="education" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Education
        </h2>

        <div className="project-card">

          <h3 className="text-2xl font-bold">
            Bachelor of Science in Information Technology
          </h3>
            
          <p className="mt-3">
            Smt. K. L. Tiwari Degree College<br />
            University of Mumbai<br />
            CGPA: 9.62 / 10<br />
            2023 – 2026<br />
          </p>

          <p>
            Graduation Year: 2026
          </p>
        </div>

        <div className="project-card">

          <h3 className="text-2xl font-bold">
            HSC (Higher Secondary Certificate)
          </h3>

          <p className="mt-3">
            Wilson College, Mumbai<br />
            2022 – 2023<br />
          </p>

        </div>
        <div className="project-card">

          <h3 className="text-2xl font-bold">
            SSC (School Secondary Certificate)
          </h3>

          <p className="mt-3">
            St. Francis High School<br/>
            2020 – 2021
          </p>

        </div>

      </section>
      {/* Certifications */}
        <section id="certifications" className="px-10 py-20">

          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
            Certifications
          </h2>

          {/* Certificate 1 */}
          <div className="project-card">
            <h3 className="text-2xl font-bold mb-3">
              CodSoft Web Development Internship
            </h3>

            <p>
              Successfully completed a Web Development Internship where I developed
              responsive web applications using HTML, CSS, JavaScript and React while
              working on real-world development tasks.
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="project-card">
            <h3 className="text-2xl font-bold mb-3">
              Prodigy InfoTech Web Development Internship
            </h3>

            <p>
              Completed a virtual Web Development Internship by building practical
              frontend projects and strengthening skills in HTML, CSS, JavaScript and
              responsive web design.
            </p>
          </div>

          {/* Certificate 3 */}
          <div className="project-card">
            <h3 className="text-2xl font-bold mb-3">
              Deloitte Technology Job Simulation
            </h3>

            <p>
              Completed Deloitte's Technology Job Simulation, gaining practical
              experience in solving real-world technology challenges and improving
              analytical and problem-solving skills.
            </p>
          </div>

          {/* Certificate 4 */}
          <div className="project-card">
            <h3 className="text-2xl font-bold mb-3">
              JPMorgan Software Engineering Job Simulation
            </h3>

            <p>
              Completed JPMorgan Chase's Software Engineering Job Simulation,
              strengthening software development, debugging and problem-solving skills
              through practical engineering tasks.
            </p>
          </div>

        </section>
      

      {/* Resume */}
      <section id="resume" className="px-10 py-20 text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Resume
        </h2>

        <a  
          href="/Vaishnavi_resume.pdf"

          download
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold text-black"
        >
          Download Resume
        </a>

      </section>
      

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Contact Me
          </h2>

          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:vaishnavi52333@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              vaishnavi52333@gmail.com
            </a>
          </p>

          <p className="mb-4">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vaishnavi-parab-738488313"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              linkedin.com/in/vaishnavi-parab-738488313
            </a>
          </p>

          <p className="mb-4">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vaishnavi-11-n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              github.com/vaishnavi-11-n
            </a>
          </p>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">

        <p>
          © {new Date().getFullYear()} Vaishnavi Parab. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;

