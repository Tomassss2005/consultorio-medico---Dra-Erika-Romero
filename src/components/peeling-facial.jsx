import React from "react";
import styles from "../styles/peelingFacialModule.css";




function Peeling() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_peeling ${styles.container_descripcion_peeling}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Peeling facial</h2>
                        <img
                            className={`img_peeling ${styles.img_peeling}`}
                            src="/peeling.avif"
                            alt="Imagen de persona con peeling"
                        />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        El peeling facial es un tratamiento que a través de la combinación de ácidos de diferentes tipos, elegidos según
                        cada paciente, mejora notablemente la textura, las arrugas finas y las capas superficiales de la piel mediante una
                        exfoliación eliminando las células dañadas y envejecidas. Disminuyen el diámetro de los poros, atenúa las manchas y
                        las cicatrices. Es un tratamiento personalizado, ya que cada persona es diferente y así cada peeling elegido para
                        cada una de ellas.
                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>
                        Agendar Cita
                    </a>
                </div>
                <div className={`container_beneficios ${styles.container_beneficios}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora notablemente la textura de la piel.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reduce las arrugas finas y manchas.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Disminuye el diámetro de los poros.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Atenúa cicatrices superficiales.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Tratamiento personalizado para cada paciente.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Despigmentación.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Renovación celular.</li>
                    </ul>
                </div>
            </div>
        </div>


    )
}


export default Peeling;