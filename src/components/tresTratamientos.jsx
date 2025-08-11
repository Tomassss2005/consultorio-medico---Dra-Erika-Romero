import React from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/tresTratamientosModule.css";


function Tratamientos() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`tratamientos_big_container ${styles.tratamientos_big_container}`}>
            <h1 className={`titulo_tratamientos ${styles.titulo_tratamientos}`}>Algunos de nuestros tratamientos</h1>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/primer-tratamiento.jpg" alt="Tratamiento 1" />
                    <Link to="/plasma-rico-en-plaquetas" onClick={scrollToTop} className={`a_tratamientos ${styles.a_tratamientos}`}>Plasma rico en plaquetas</Link>

                </div>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/segundo-tratamiento.jpg" alt="Tratamiento 2" />
                    <Link to="/peeling-facial" onClick={scrollToTop} className={`a_tratamientos ${styles.a_tratamientos}`}>Peeling facial</Link>
                </div>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/tercer-tratamiento.jpg" alt="Tratamiento 3" />
                    <Link to="/toxina-botulinica" onClick={scrollToTop} className={`a_tratamientos ${styles.a_tratamientos}`}>Toxina botulínica</Link>
                </div>
            </div>
        </div>
    );
};

export default Tratamientos;