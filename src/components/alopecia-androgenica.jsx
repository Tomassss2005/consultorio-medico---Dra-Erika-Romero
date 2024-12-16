import React from "react";
import styles from "../styles/alopeciaAndrogenicaModule.css";



function Alopecia() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_alopecia ${styles.container_descripcion_alopecia}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Alopecia androgénica</h2>
                    <img src="/alopecia-androgenica.jpg" alt="Imagen de persona alopecia androgénica" className={`img_alopecia ${styles.img_alopecia}`} />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        También llamada calvicie común, se produce por el adelgazamiento y pérdida progresiva y excesiva de cabello, siendo la responsable del 95% de los casos de pérdida del cabello en la población. Afecta principalmente a los varones, pero también a las mujeres.
                        Como causas se destacan dos factores, el genético y el hormonal. El factor hormonal depende fundamentalmente de las hormonas masculinas (testosterona) o andrógenos que actúan sobre los folículos pilosos predispuestos genéticamente a la afección, provocando su miniaturización progresiva hasta ocasionar su atrofia completa y fibrosis.
                        También existen múltiples causas que se suman a esta patología. Una dieta carente de nutrientes esenciales, problemas de tiroides, déficit de hierro, infecciones, estrés, anemia, exceso de cosméticos (tinturas, productos de fijación), son factores que colaboran con la alopecia. Los efectos colaterales de algunos tratamientos también pueden provocar caída del cabello, como la quimioterapia o las radiaciones. Existen dos patrones de afectación, el masculino con pérdida de pelo localizada principalmente en las zonas frontal y parietal que se manifiesta inicialmente por el retraso progresivo de la línea de implantación anterior del pelo, lo que se conoce habitualmente como entradas, con afectación más tardía de la región del vértex o coronilla.
                        En el patrón femenino, la pérdida de cabello es difusa, no se producen zonas de calvicie total y queda respetada la línea de implantación anterior, es decir no existen entradas. El tratamiento médico consta de intradermoterapia capilar (mesoterapia médica), medicamentos vía oral y Plasma Rico en Plaquetas, todos estos activos que estimulan el crecimiento y engrosamiento del cabello, el aumento de nuevos cabellos y aumento de volumen. Es un tratamiento que consta de varias sesiones que se planifican en el tiempo, donde, con constancia la mejoría es posible.

                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_alopecia ${styles.container_beneficios_alopecia}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Se detiene la caida patológica del cabello.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Estimulación del crecimiento.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Engrosamiento del cabello.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora de la salud del cuero cabelludo.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Aumento del tamaño de los foliculos pilosos.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Alopecia;