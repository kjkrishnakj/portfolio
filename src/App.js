import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Certificate from './components/Certificate';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <Skills/>
      <Certificate/>
      <About/>
    </div>
  );
}

export default App;
