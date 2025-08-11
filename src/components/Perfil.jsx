import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "../styles/PerfilModule.css";

function Perfil() {
    return (
        <div className={`perfil_container ${styles.perfil_container}`}>
            <div className={`section_left ${styles.section_left}`}>
                <h2 className={`h2_perfil ${styles.h2_perfil}`}>TomDevX</h2>
                <h3 className={`h3_perfil ${styles.h3_perfil}`}>Desarrollador Web</h3>
                <h4 className={`h4_perfil ${styles.h4_perfil}`}>Diseñador de Páginas</h4>
                <div className={`iconos_redes ${styles.iconos_redes}`}>
                    <a className={`a_redes ${styles.a_redes}`} href="https://wa.me/91125267911" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={`icono_wpp ${styles.icono_wpp}`} icon={faWhatsapp} size="2x" />
                    </a>
                    <a className={`a_redes ${styles.a_redes}`} href="https://www.instagram.com/tomdevx/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={`icono_instagram ${styles.icono_instagram}`} icon={faInstagram} />
                    </a>
                    <a className={`a_redes ${styles.a_redes}`} href="mailto:tomidlp2005@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={`icono_email ${styles.icono_email}`} icon={faEnvelope} />
                    </a>
                    <a className={`a_redes ${styles.a_redes}`} href="https://www.linkedin.com/in/tom%C3%A1s-de-la-pe%C3%B1a-088709297/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={`icono_linkedin ${styles.icono_linkedin}`} icon={faLinkedin} />
                    </a>

                </div>
            </div>

            <div className={`section_right ${styles.section_right}`}>
                <div className={`div_habilidades ${styles.div_habilidades}`}>
                    <h5 className={`h5_perfil ${styles.h5_perfil}`}>Habilidades</h5>
                    <ul className={`ul_perfil ${styles.ul_perfil}`}>
                        <li className={`li_perfil ${styles.li_perfil}`}>HTML</li>
                        <li className={`li_perfil ${styles.li_perfil}`}>CSS</li>
                        <li className={`li_perfil ${styles.li_perfil}`}>JavaScript</li>
                        <li className={`li_perfil ${styles.li_perfil}`}>React</li>
                        <li className={`li_perfil ${styles.li_perfil}`}>Node.js</li>
                        <li className={`li_perfil ${styles.li_perfil}`}>Git y GitHub</li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default Perfil;