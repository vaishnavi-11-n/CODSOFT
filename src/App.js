/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 
--------------------
function App() {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-500">
        Tailwind is Working 🚀
      </h1>
    </div>
  );
}

export default App;

*/

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          Vaishnavi Parab
        </h1>

        <ul className="flex gap-6 text-lg">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-[80vh] px-4">

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          React & Django Developer
        </h2>

        <p className="text-gray-400 text-xl max-w-2xl">
          B.Sc. IT Graduate passionate about Web Development,
          React, Django, and building practical software projects.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold">
          View Projects
        </button>

      </section>

    </div>
  );
}

export default App;