
import './App.css';
import Headers from './comp/Headers';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Pages/About';
import Technicalskills from './Pages/Technicalskills';
import Bridging from './Pages/Bridging';
import Leadership from './Pages/Leadership';
import Roadmap from './Pages/Roadmap';
import Contact from './Pages/Contact';
function App() {
  return (
    <Router>

      <Headers />
      <About />
      <Technicalskills />
      <Bridging />
      <Leadership />
      <Roadmap />
      <Contact/>
 </Router>
  );
}

export default App;
