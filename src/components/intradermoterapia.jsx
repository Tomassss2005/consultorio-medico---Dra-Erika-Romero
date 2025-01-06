import React from "react";
import styles from "../styles/intradermoterapiaModule.css"




function Intradermoterapia() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_intradermoterapia ${styles.container_descripcion_intradermoterapia}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Intradermoterapia</h2>
                    <img src="/intradermoterapia.webp" alt="Imagen de persona intradermoterapia" className={`img_intradermoterapia ${styles.img_intradermoterapia}`} />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        También conocida como mesoterapia, es un tratamiento donde se aplica en la piel diferentes activos mediante micro inyecciones con jeringa o dermapen, como ser el ácido hialurónico, vitaminas, antioxidantes, despigmentantes y todo tipo de nutrientes según cada piel necesite.
                        Esto produce hidratación, luminosidad, revitalización y nutrición. Los mejores efectos se alcanzan en un tratamiento donde en unas sesiones consecutivas, se va revitalizando la piel y van disminuyendo
                        los efectos que pudieran afectar la piel como hábitos y el medio ambiente. Ideal aplicarlo post peeling donde la piel está más permeable para recibir y absorber los nutrientes.

                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_intradermoterapia ${styles.container_beneficios_intradermoterapia}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora de la circulación sanguínea.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reafirma la piel.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Hidratación, luminosidad.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Revitalización y renovación celular.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reducción de la celulitis corporal.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Intradermoterapia;