import React from "react";
import styles from "../styles/fillersConAcidoHialuronicoModule.css";
import LazyLoad from "react-lazyload";




function AcidoHialuronico() {

    return (
        <div>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`container_descripcion_acido_hialuronico ${styles.container_descripcion_acido_hialuronico}`}>
                    <h2 className={`h2_tratamientos ${styles.h2_tratamientos}`}>Ácido hialurónico</h2>
                    <LazyLoad>
                        <img src="/acido-hialuronico.jpg" alt="Imagen de persona acido hialurónico" className={`img_acido_hialuronico ${styles.img_acido_hialuronico}`} />
                    </LazyLoad>
                    <p className={`p_tratamientos ${styles.p_tratamientos}`}>
                        Es utilizado para rellenos faciales, y permite reponer el volumen perdido, reestructurar la anatomía facial que ha perdido su forma normal por el paso del tiempo y por otras causas como el sol, la deshidratación, y el adelgasamiento, etc. Es una excelente terapéutica no quirúrgica para varias áreas del rostro. En labios se aplica para dar turgencia e hidratación a los labios, mejorar la forma y definir el perfilado.
                        En mejillas mejora el aspecto adelgazado, otorga elasticidad y firmeza, posee poder alisante mejorando el aspecto de las arrugas.
                    </p>
                    <a href="https://wa.me/91137742782" className={`btn_agendar ${styles.btn_agendar}`}>Agendar Cita</a>
                </div>
                <div className={`container_beneficios_acido_hialuronico ${styles.container_beneficios_acido_hialuronico}`}>
                    <h3 className={`h3_beneficios ${styles.h3_beneficios}`}>Beneficios</h3>
                    <ul className={`beneficios_tratamientos ${styles.beneficios_tratamientos}`}>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Relleno de arrugas.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Volumen y definición.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Hidratación profunda.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Resultados naturales.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Procedimiento rápido.</li>
                        <li className={`li_tratamientos ${styles.li_tratamientos}`}>Estimulación de la producción de colágeno.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default AcidoHialuronico;