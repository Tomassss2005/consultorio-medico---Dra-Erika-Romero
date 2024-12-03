import React from "react";
import styles from "../styles/toxinaBotulinicaModule.css";




function ToxinaBotulinica() {

    return (
        <div className="div-nosotros">
            <div className="tratamientos-container">
                <div className="container-descripcion-toxina-botulinica">
                    <h2 className="h2-tratamientos">Toxina botulinica</h2>
                    <img className="img-toxina-botulinica" src="toxina-botulinica.jpg" alt="Imagen de persona con ácido hialurónico" />
                    <p className="p-tratamientos">
                        Es utilizada para el rejuvenecimiento facial. Se utiliza como tratamiento para suavizar arrugas frontales, arrugas y surcos de la región glabelar, (Hiperquinesia del Entrecejo), corrección de las asimetrías de los músculos de la región glabelar (área entre las cejas), y para mejorar la forma y elevación de las cejas, como asi también corrección de asimetrías de las cejas si las hay.
                        Arrugas periorbiculares (“Patas de Gallo”) y arrugas paranasales (“Bunny Lines” del Conejo), arrugas labiales (código de barras) y arrugas labio mentonianas (líneas de marioneta). Se aplica la cantidad exacta de producto que necesita cada paciente, ni más ni menos, lo que permite un resultado natural, que acompañe cada movimiento de la gesticulación facial.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-toxina-botulinica">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Reducción de arrugas y líneas de expresión.</li>
                        <li className="li-tratamientos">Prevención del envejecimiento.</li>
                        <li className="li-tratamientos">Corrección de sonrisas gingivales.</li>
                        <li className="li-tratamientos">Tratamiento del bruxsísmo.</li>
                        <li className="li-tratamientos">Control de la hiperhidrosis.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default ToxinaBotulinica;