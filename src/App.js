import "./App.css";
import Headers from "./comp/Headers";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./Pages/About";
import Bridging from "./Pages/Bridging";
import Leadership from "./Pages/Leadership";
import Roadmap from "./Pages/Roadmap";
import Contact from "./Pages/Contact";
import Content1 from "./Pages/addingcontent/Content1";
import Content2 from "./Pages/addingcontent/Content2";
import Content3 from "./Pages/addingcontent/Content3";
import Contant4 from "./Pages/addingcontent/Contant4";
import VissionMission from "./Pages/addingcontent/VissionMission";
import Content5 from "./Pages/addingcontent/Content5";
import Contant6 from "./Pages/addingcontent/Contant6";
import ScrollSections from "./Pages/ScrollSections";

function App() {
  return (
    <Router>
            <Headers />
      <ScrollSections/>
 

   {/*   <About />
      <Content1 />
      <Content2 />
      <Content3 />
      <Contant4 />
      <VissionMission />
      <Bridging />
    <Content5 />
       <Leadership />
    <Contant6 />
        <Roadmap />
     <Contact /> */}
    </Router>
  );
}

export default App;
