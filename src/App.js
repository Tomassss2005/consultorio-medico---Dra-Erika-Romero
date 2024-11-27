import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from "./components/inicio.jsx";
import Carrusel from "./components/carrusel.jsx";
import TresTratamientos from "./components/tresTratamientos.jsx";
import Consejos from "./components/consejos.jsx";
import Footer from "./components/footer.jsx";
import Nosotros from "./components/nosotros.jsx";
import Resultados from "./components/resultados.jsx";
import Contacto from "./components/contacto.jsx";
import Perfil from "./components/Perfil.jsx";


function App() {
  return (
    <div>
      <Inicio />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Carrusel />
              <TresTratamientos />
              <Consejos />
            </>
          }
        />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/resultados' element={<Resultados />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/mi-perfil' element={<Perfil />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;