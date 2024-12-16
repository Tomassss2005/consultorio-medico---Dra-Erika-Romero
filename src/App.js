import React from 'react';
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
import LazyLoad from 'react-lazyload';


function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Carrusel />
                <TresTratamientos />
                <Consejos />
                <Footer />
              </LazyLoad>
            </>
          }
        />


        <Route
          path='/alopecia-androgenica'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <AlopeciaAndrogenica />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/contorno-mandibular'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <ContornoMandibular />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/despigmentacion'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Despigmentacion />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/fillers-con-acido-hialuronico'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <FillersConAcidoHialuronico />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/intradermoterapia'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Intradermoterapia />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/nutricion-calidad-de-piel'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <NutricionCalidadDePiel />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/peeling-facial'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <PeelingFacial />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/plasma-rico-en-plaquetas'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <PlasmaRicoEnPlaquetas />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/toxina-botulinica'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <ToxinaBotulinica />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/nosotros'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Nosotros />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/resultados'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Resultados />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/contacto'
          element={
            <>
              <LazyLoad>
                <Inicio />
                <Contacto />
                <Footer />
              </LazyLoad>
            </>
          }
        />

        <Route
          path='/mi-perfil'
          element={
            <LazyLoad>
              <Perfil />
            </LazyLoad>
          }
        />
      </Routes>
    </div>
  );
};

export default App;