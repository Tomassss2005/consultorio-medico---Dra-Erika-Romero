import React from "react";
import styles from "../styles/toxinaBotulinicaModule.css";




function ToxinaBotulinica() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_toxina_botulinica ${styles.container_descripcion_toxina_botulinica}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Toxina botulínica</h2>
                    <img src="/toxina-botulinica.jpg" alt="Imagen de persona toxina botulínica" className={`img_toxina_botulinica ${styles.img_toxina_botulinica}`} />
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        Es utilizada para el rejuvenecimiento facial. Se utiliza como tratamiento para suavizar arrugas frontales, arrugas y surcos de la región glabelar, (Hiperquinesia del Entrecejo), corrección de las asimetrías de los músculos de la región glabelar (área entre las cejas), y para mejorar la forma y elevación de las cejas, como asi también corrección de asimetrías de las cejas si las hay.
                        Arrugas periorbiculares (“Patas de Gallo”) y arrugas paranasales (“Bunny Lines” del Conejo), arrugas labiales (código de barras) y arrugas labio mentonianas (líneas de marioneta). Se aplica la cantidad exacta de producto que necesita cada paciente, ni más ni menos, lo que permite un resultado natural, que acompañe cada movimiento de la gesticulación facial.
                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_toxina_botulinica ${styles.container_beneficios_toxina_botulinica}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Reducción de arrugas y líneas de expresión.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Prevención del envejecimiento.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Corrección de sonrisas gingivales.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Tratamiento del bruxismo.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Control de la hiperhidrosis.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default ToxinaBotulinica;