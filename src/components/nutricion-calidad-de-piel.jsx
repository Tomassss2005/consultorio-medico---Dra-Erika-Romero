import React from "react";
import styles from "../styles/nutricionCalidadDePielModule.css";



function CalidadPiel() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_piel ${styles.container_descripcion_piel}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Nutrición y calidad de piel</h2>
                    <img src="/piel.jpg" alt="Imagen de persona nutrición y calidad de piel" className={`img_piel ${styles.img_piel}`} />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        En la piel existen diversos elementos que influyen en su calidad, textura y visualización, los principales son: ácido hialurónico, elastina y colágeno. En las pieles jóvenes y saludables, hay cantidades suficientes de estos elementos. Con el tiempo, o debido a factores externos (estrés, dieta poco saludable, jabones agresivos, exposición solar, sedentarismo, tabaquismo, etc.), las cantidades de ácido hialurónico, elastina y colágeno disminuyen, y además, la calidad de estos componentes se verá afectada en cantidad y calidad. La calidad de la piel se va deteriorando.
                        Se pueden observar pieles secas, ásperas, gruesas, porosas, sin luminosidad, y sin firmeza y elasticidad.
                        A través de un diagnóstico médico y tratamientos personalizados, se trabajan esas características no deseadas, y se incorporan sustancias activas esenciales para la reproducción el desarrollo y crecimiento de las células de la piel que producen colágeno, elastina, y ácido hialurónico. De esta forma se logran resultados en la piel como la mejoría en la firmeza, en la estructura, en el brillo y en la textura, renovando su aspecto y funcionalidad para una piel sana y de buen aspecto.

                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_piel ${styles.container_beneficios_piel}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Hidratación y elasticidad.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reducción de la inflamación.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora el aspecto de las cicatrices.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Homogeniza los distintos tonos de la piel.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Luminosidad y suavidad.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CalidadPiel;