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
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-[80vh] px-4">

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          React & Django Developer
        </h2>

        <p className="text-gray-400 text-xl max-w-2xl">
          B.Sc. IT Graduate passionate about Web Development,
          React, Django, Python and building practical software projects.
        </p>

        <a href="#projects">
          <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold">
            View Projects
          </button>
        </a>

      </section>

      {/* About */}
      
      <section id="about" className="px-10 py-20">

  <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
    About Me
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

    <img
      src="/photo.png"
      alt="Vaishnavi Parab"
      className="w-64 rounded-2xl shadow-lg"
    />

    <div>
      <p className="text-gray-300 text-lg leading-8">
        I am Vaishnavi Parab, a B.Sc. Information Technology graduate
        passionate about Web Development, Software Development,
        Python and modern technologies.
      </p>

      <p className="text-gray-400 text-lg mt-4 leading-8">
        Currently working on DecentraVote, a blockchain-based voting
        system using React, Django, Ethereum, Solidity and
        AI-powered fraud detection.
      </p>
    </div>

  </div>

</section>
      {/* Skills */}
      <section id="skills" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">Tailwind CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">FastAPI</div>
          <div className="skill-card">PostgreSQL</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">C, C++</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">Power BI</div>
          <div className="skill-card">Linux</div>
          <div className="skill-card">Windows</div>
          
        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Projects
        </h2>

        <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
            DecentraVote
          </h3>

          <p>
            Blockchain-based decentralized voting system using React,
            Django, Solidity, Ethereum and AI-powered fraud detection.
          </p>
        </div>

        <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
            Portfolio Website
          </h3>

          <p>
            Personal portfolio website developed using React and Tailwind CSS.
          </p>
        </div>

        <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
            Landing Page
          </h3>

          <p>
            Responsive landing page developed using HTML and CSS.
          </p>
        </div>

        <div className="project-card">
          <h3 className="text-2xl font-bold mb-3">
            Calculator
          </h3>

          <p>
            Calculator built using HTML, CSS and JavaScript.
          </p>
        </div>

      </section>

      {/* Education */}
      <section className="px-10 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Education
        </h2>

        <div className="project-card">

          <h3 className="text-2xl font-bold">
            B.Sc Information Technology
          </h3>
            
          <p className="mt-3">
            Smt. K. L. Tiwari Degree College
            University of Mumbai
            CGPA: 9.6 / 10
            2023 – 2026
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
            Wilson College, Mumbai
            2022 – 2023
          </p>

        </div>
        <div className="project-card">

          <h3 className="text-2xl font-bold">
            SSC (School Secondary Certificate)
          </h3>

          <p className="mt-3">
            St. Francis High School
            2020 – 2021
          </p>

        </div>

      </section>

      {/* Resume */}
      <section className="px-10 py-20 text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Resume
        </h2>

        <a
          href="/Resumev.pdf"
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
          Email: vaishnavi52333@gmail.com
        </p>

        <p className="mb-4">
          LinkedIn: https://www.linkedin.com/in/vaishnavi-parab-738488313
        </p>

        <p className="mb-4">
          GitHub: https://github.com/vaishnaviparab
        </p>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">

        <p>
          © 2026 Vaishnavi Parab. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;

