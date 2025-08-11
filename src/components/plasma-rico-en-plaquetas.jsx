import React from "react";
import styles from "../styles/plasmaRicoenPlaquetasModule.css"




function PRP() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_PRP ${styles.container_descripcion_PRP}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Plasma rico en plaquetas</h2>
                    <img src="/PRP.jpg" alt="Imagen de persona plasma rico en plaquetas" className={`img_PRP ${styles.img_PRP}`} />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        El fundamento de la utilización de PRP es la existencia de factores de crecimiento y citoquinas (proteínas) en el plasma sanguineo, que trabajan conjuntamente para producir SÍNTESIS DE NUEVO TEJIDO CON VITALIDAD RENOVADA. Estos estimulan a los fibroblastos que son las células que producen colágeno, elastina y ácido hialurónico naturales propios del cuerpo.
                        Mejora la piel, su estructura interna, la hidratación, la textura y el brillo.
                        En el tratamiento capilar, se estimula el crecimiento de nuevos vasos sanguíneos lo que produce una mejora en la irrigación y nutrición al folículo piloso mejorando su estructura, grosor, aspecto; disminuye la caída, y además genera el crecimiento de nuevos cabellos. En el procedimiento se extrae sangre del paciente y luego de ser procesada, se extrae el plasma rico en plaquetas y se aplica mediante microinyecciones prácticamente indoloras para administrar el PRP y obtener los resultados deseados.
                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_PRP ${styles.container_beneficios_PRP}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Regeneración de tejidos.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Rejuvenecimiento facial.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Promoción de la cicatrización.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Estimulación del crecimiento capilar.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora de la luminosidad y tono de la piel.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default PRP;