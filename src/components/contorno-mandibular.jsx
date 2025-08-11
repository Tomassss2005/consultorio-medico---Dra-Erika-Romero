import React from "react";
import styles from "../styles/contornoMandibular.css";




function ContornoMandibular() {

    return (

        <div className={`tratamientos_container ${styles.tratamientos_container}`}>
            <div className={`container_descripcion_contorno_mandibular ${styles.container_descripcion_contorno_mandibular}`}>
                <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Contorno mandibular</h2>

                <img
                    className={`img_contorno_mandibular ${styles.img_contorno_mandibular}`}
                    src="/despues-contorno.jpg"
                    alt="Imagen de persona de tratamiento contorno mandibular"
                />
                <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                    Tanto en la mujer como en el hombre, por distintas causas como el paso del tiempo, los hábitos y la predisposición
                    genética, algunas líneas de la anatomía facial van perdiendo su forma a raíz de la flacidez de la piel, el
                    adelgazamiento, y la debilidad muscular. Una de esas líneas que se cae y se deforma es la línea que recorre el
                    borde inferior de la mandíbula a cada lado de los perfiles del rostro. A través de los bioestilmuladores, como por
                    ejemplo la hidroxiapatita del calcio, se puede reformular, remarcar y colocar en su lugar el contorno mandibular,
                    además de estimular a las propias células a generar nuevo colágeno, elastina y ácido hialurónico que mejora la piel
                    de esa región. Los resultados son excelentes.
                </p>
                <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>
                    Agendar Cita
                </a>
            </div>
            <div className={`container_beneficios_contorno_mandibular ${styles.container_beneficios_contorno_mandibular}`}>
                <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora la armonización facial.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Rejuvenecimiento de la apariencia.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Define la línea de la mandíbula.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Simetría facial.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Mejora los perfiles laterales.</li>
                    <li className={`li_tratamientos ${styles.li_tratamientos}`}>Efecto armónico en el rostro completo.</li>
                </ul>
            </div>
        </div>



    )
}


export default ContornoMandibular;