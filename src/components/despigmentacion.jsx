import React from "react";
import styles from "../styles/despigmentacionModule.css";



function Despigmentacion() {

    return (

        <div className={`tratamientos_container ${styles.tratamientos_container}`}>
            <div className={`container_descripcion_despigmentacion ${styles.container_descripcion_despigmentacion}`}>
                <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Despigmentación</h2>
                <img
                    className={`img_despigmentacion ${styles.img_despigmentacion}`}
                    src="/despigmentacion.jpg"
                    alt="Imagen de persona de tratamiento despigmentación"
                />
                <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                    La pigmentación de nuestra piel se produce gracias a los pigmentos, entre los que destacan las melaninas; y estos
                    determinan el color de la misma. Es frecuente en la población en general encontrar la aparición de manchas de
                    diferentes tipos en la piel, muchas veces provocadas por el sol, predisposición de la piel a pigmentarse por
                    distintas enfermedades o exposición a sustancias, y también por el paso del tiempo. Esta pigmentación o manchas le
                    restan belleza, uniformidad y juventud, sobre todo al rostro. La despigmentación es un tratamiento médico estético
                    que mejora el tono de la piel, utilizando peelings médicos y tratamientos tópicos indicados en consultorio y en
                    domicilio, para de esta forma reducir notablemente la variedad de colores y homogeneizar el rostro, o la piel de
                    otras partes del cuerpo.
                </p>
                <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>
                    Agendar Cita
                </a>
            </div>
            <div className={`container_beneficios_despigmentacion ${styles.container_beneficios_despigmentacion}`}>
                <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reducción de manchas oscuras.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Piel más uniforme.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Luminosidad y claridad.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora la textura.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>
                        Renovación celular de las capas externas de la piel.
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Despigmentacion;