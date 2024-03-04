import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Komponenter/Navbar';
import Landingpage from './Komponenter/Pages/Landingpage';
import AboutMe from './Komponenter/Pages/AboutMe';
import Projects from './Komponenter/Pages/Projects';
import CV from './Komponenter/Pages/CV';
import Halsoappen from './Komponenter/Pages/ProjectMap/Halsoappen';
import Coolfashion from './Komponenter/Pages/ProjectMap/Coolfashion';
import Skvaller from './Komponenter/Pages/ProjectMap/Skvaller';
import Stadafint from './Komponenter/Pages/ProjectMap/Stadafint';
import Tentamenbloggen from './Komponenter/Pages/ProjectMap/Tentamenbloggen';
import Todo from './Komponenter/Pages/ProjectMap/Todo';

function App() {
  return (
<>
      <Navbar/>
      <Routes>
        <Route path="" element={<Landingpage/>} />
        <Route path="/OmMig" element={<AboutMe/>} />
        <Route path="/CV" element={<CV/>} />
        <Route path="/Portfolio" element={<Projects/>} />
        <Route path="/Coolfashion" element={<Coolfashion/>} />
        <Route path="/Halsoappen" element={<Halsoappen/>} />
        <Route path="/Skvaller" element={<Skvaller/>} />
        <Route path="/Stadafint" element={<Stadafint/>} />
        <Route path="/Tentamenbloggen" element={<Tentamenbloggen/>} />
        <Route path="/Todo" element={<Todo/>} />
      </Routes>
</>
  );
}

export default App;
