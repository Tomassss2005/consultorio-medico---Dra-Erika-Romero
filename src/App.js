import { React, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Inicio from "./components/inicio.jsx";
import AlopeciaAndrogenica from "./components/alopecia-androgenica.jsx"
import ContornoMandibular from "./components/contorno-mandibular.jsx";
import Despigmentacion from "./components/despigmentacion.jsx";
import FillersConAcidoHialuronico from "./components/fillers-con-acido-hialuronico.jsx";
import Intradermoterapia from "./components/intradermoterapia.jsx";
import NutricionCalidadDePiel from "./components/nutricion-calidad-de-piel.jsx";
import PeelingFacial from "./components/peeling-facial.jsx";
import PlasmaRicoEnPlaquetas from "./components/plasma-rico-en-plaquetas.jsx";
import ToxinaBotulinica from "./components/toxina-botulinica.jsx";
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
      <Suspense fallback={<div className='spinner'>Cargando...</div>}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Inicio />
                <Carrusel />
                <TresTratamientos />
                <Consejos />
                <Footer />
              </>
            }
          />
          <Route
            path='/alopecia-androgenica'
            element={
              <>
                <Inicio />
                <AlopeciaAndrogenica />
                <Footer />
              </>
            }
          />
          <Route
            path='/contorno-mandibular'
            element={
              <>
                <Inicio />
                <ContornoMandibular />
                <Footer />
              </>
            }
          />
          <Route
            path='/despigmentacion'
            element={
              <>
                <Inicio />
                <Despigmentacion />
                <Footer />
              </>
            }
          />
          <Route
            path='/fillers-con-acido-hialuronico'
            element={
              <>
                <Inicio />
                <FillersConAcidoHialuronico />
                <Footer />
              </>
            }
          />
          <Route
            path='/intradermoterapia'
            element={
              <>
                <Inicio />
                <Intradermoterapia />
                <Footer />
              </>
            }
          />
          <Route
            path='/nutricion-calidad-de-piel'
            element={
              <>
                <Inicio />
                <NutricionCalidadDePiel />
                <Footer />
              </>
            }
          />
          <Route
            path='/peeling-facial'
            element={
              <>
                <Inicio />
                <PeelingFacial />
                <Footer />
              </>
            }
          />
          <Route
            path='/plasma-rico-en-plaquetas'
            element={
              <>
                <Inicio />
                <PlasmaRicoEnPlaquetas />
                <Footer />
              </>
            }
          />
          <Route
            path='/toxina-botulinica'
            element={
              <>
                <Inicio />
                <ToxinaBotulinica />
                <Footer />
              </>
            }
          />
          <Route
            path='/nosotros'
            element={
              <>
                <Inicio />
                <Nosotros />
                <Footer />
              </>
            }
          />
          <Route
            path='/resultados'
            element={
              <>
                <Inicio />
                <Resultados />
                <Footer />
              </>
            }
          />
          <Route
            path='/contacto'
            element={
              <>
                <Inicio />
                <Contacto />
                <Footer />
              </>
            }
          />
          <Route
            path='/mi-perfil'
            element={<Perfil />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;