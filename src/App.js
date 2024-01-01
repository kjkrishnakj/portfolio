import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
    </div>
  );
}

export default App;
