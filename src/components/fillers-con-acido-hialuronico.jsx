import React from "react";
import styles from "../styles/fillersConAcidoHialuronicoModule.css";




function AcidoHialuronico() {

    return (
        <div className="div-nosotros">
            <div className="tratamientos-container">
                <div className="container-descripcion-acido-hialuronico">
                    <h2 className="h2-tratamientos">Fillers con ácido hialurónico</h2>
                    <img className="img-acido-hialuronico" src="acido-hialuronico.jpg" alt="Imagen de persona con ácido hialurónico" />
                    <p className="p-tratamientos">
                        Es utilizado para rellenos faciales, y permite reponer el volumen perdido, reestructurar la anatomía facial que ha perdido su forma normal por el paso del tiempo y por otras causas como el sol, la deshidratación, y el adelgasamiento, etc. Es una excelente terapéutica no quirúrgica para varias áreas del rostro. En labios se aplica para dar turgencia e hidratación a los labios, mejorar la forma y definir el perfilado.
                        En mejillas mejora el aspecto adelgazado, otorga elasticidad y firmeza, posee poder alisante mejorando el aspecto de las arrugas.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-acido-hialuronico">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Relleno de arrugas.</li>
                        <li className="li-tratamientos">Volumen y definición.</li>
                        <li className="li-tratamientos">Hidratación profunda.</li>
                        <li className="li-tratamientos">Resultados naturales.</li>
                        <li className="li-tratamientos">Procedimiento rápido.</li>
                        <li className="li-tratamientos">Estimulación de la producción de colágeno.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default AcidoHialuronico;