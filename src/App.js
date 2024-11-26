import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from "./components/inicio.jsx";
import Footer from "./components/footer.jsx";
import Contacto from "./components/contacto.jsx";

function App() {
  return (
    <div>
      <Inicio />
      <Routes>
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;