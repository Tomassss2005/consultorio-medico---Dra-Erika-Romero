import React from "react";
import styles from "../styles/intradermoterapiaModule.css"





function Intradermoterapia() {

    return (
        <div className="div-nosotros">
            <div className="tratamientos-container">
                <div className="container-descripcion-intradermoterapia">
                    <h2 className="h2-tratamientos">Intradermoterapia</h2>
                    <img className="img-intradermoterapia" src="/doctora-con-paciente.jpg" alt="Imagen de persona con intradermoterapia" />
                    <p className="p-tratamientos">
                        También conocida como mesoterapia, es un tratamiento donde se aplica en la piel diferentes activos mediante micro inyecciones con jeringa o dermapen, como ser el ácido hialurónico, vitaminas, antioxidantes, despigmentantes y todo tipo de nutrientes según cada piel necesite.
                        Esto produce hidratación, luminosidad, revitalización y nutrición. Los mejores efectos se alcanzan en un tratamiento donde en sesiones semanales donde se va revitalizando la piel; contrarestando los efectos que pudieran afectar la piel como hábitos y el medio ambiente.
                        Ideal aplicarlo post peeling donde la piel está más permeable para recibir y absorber los nutrientes.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-intradermoterapia">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Mejora de la circulación sanguínea.</li>
                        <li className="li-tratamientos">Reafirmación de la piel.</li>
                        <li className="li-tratamientos">Estimulación del metabolismo.</li>
                        <li className="li-tratamientos">Hidratación, luminosidad.</li>
                        <li className="li-tratamientos">Revitalización y renovación celular.</li>
                        <li className="li-tratamientos">Reducción de la celulitis corporal.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Intradermoterapia;