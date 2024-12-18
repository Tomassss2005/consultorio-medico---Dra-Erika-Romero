import React from "react";
import styles from "../styles/resultadosModule.css";


function Resultados() {

    return (
        <div>
            <div className={`container_antes_despues ${styles.container_antes_despues}`}>
                <div>
                    <h1 className={`h1_antes_despues ${styles.h1_antes_despues}`}>Fillers con ácido hialurónico</h1>
                </div>
                <div className={`div_h3_tratamientos ${styles.div_h3_tratamientos}`}>
                    <h3 className={`h3_antes ${styles.h3_antes}`}>Antes</h3>
                    <h3 className={`h3_despues ${styles.h3_despues}`}>Después</h3>
                </div>
                <div className={`container_tratamientos_img ${styles.container_tratamientos_img}`}>
                    <img className={`img_antes ${styles.img_antes}`} src="/antes-filler.png" alt="Antes del tratamiento" />
                    <img className={`img_despues ${styles.img_despues}`} src="/despues-filler.png" alt="Después del tratamiento" />
                </div>
            </div>
            <div className={`container_antes_despues ${styles.container_antes_despues}`}>
                <div>
                    <h1 className={`h1_antes_despues ${styles.h1_antes_despues}`}>Contorno mandibular</h1>
                </div>
                <div className={`div_h3_tratamientos ${styles.div_h3_tratamientos}`}>
                    <h3 className={`h3_antes ${styles.h3_antes}`}>Antes</h3>
                    <h3 className={`h3_despues ${styles.h3_despues}`}>Después</h3>
                </div>
                <div className={`container_tratamientos_img ${styles.container_tratamientos_img}`}>
                    <img className={`img_antes_contorno_mandibular ${styles.img_antes_contorno_mandibular}`} src="/antes-contorno.jpg" alt="Antes del tratamiento" />
                    <img className={`img_despues_contorno_mandibular ${styles.img_despues_contorno_mandibular}`} src="/despues-contorno.jpg" alt="Después del tratamiento" />
                </div>
            </div>
            <div className={`container_antes_despues ${styles.container_antes_despues}`}>
                <div>
                    <h1 className={`h1_antes_despues ${styles.h1_antes_despues}`}>Labios rusos</h1>
                </div>
                <div className={`div_h3_tratamientos ${styles.div_h3_tratamientos}`}>
                    <h3 className={`h3_antes ${styles.h3_antes}`}>Antes</h3>
                    <h3 className={`h3_despues ${styles.h3_despues}`}>Después</h3>
                </div>
                <div className={`container_tratamientos_img ${styles.container_tratamientos_img}`}>
                    <img className={`img_antes ${styles.img_antes}`} src="/antes-labios-rusos.jpg" alt="Antes del tratamiento" />
                    <img className={`img_despues ${styles.img_despues}`} src="/despues-labios-rusos.jpg" alt="Después del tratamiento" />

                </div>
            </div>
            <div className={`container_antes_despues_2 ${styles.container_antes_despues_2}`}>
                <div>
                    <h1 className={`h1_antes_despues ${styles.h1_antes_despues}`}>Alopecia androgénica</h1>
                </div>
                <div className={`div_h3_tratamientos ${styles.div_h3_tratamientos}`}>
                    <h3 className={`h3_antes ${styles.h3_antes}`}>Antes</h3>
                    <h3 className={`h3_despues ${styles.h3_despues}`}>Después</h3>
                </div>
                <div className={`container_tratamientos_img ${styles.container_tratamientos_img}`}>
                    <img className={`img_antes ${styles.img_antes}`} src="antes-alopecia.jpg" alt="Antes del tratamiento" />
                    <img className={`img_despues ${styles.img_despues}`} src="despues-alopecia.jpg" alt="Después del tratamiento" />
                </div>
            </div>
        </div>
    )
}


export default Resultados;