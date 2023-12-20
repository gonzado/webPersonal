import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects'; // Asegúrate de que el nombre del archivo y la importación coincidan
import Education from './pages/Education';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import './css/App.css'; // Tus estilos globales para App

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> {/* Actualizado de portfolio a projects */}
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes agregar más rutas según necesites */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
