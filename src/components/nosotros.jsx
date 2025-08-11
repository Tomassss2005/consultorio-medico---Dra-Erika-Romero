import React from "react";
import styles from "../styles/nosotrosModule.css";


function Nosotros() {
    return (
        <div className={`contenido_nosotros ${styles.contenido_nosotros}`}>
            <img src="/doctora.jpg" alt="Imagen de la doctora" className={`img_nosotros ${styles.img_nosotros}`} />
            <div className="contenido-nosotros">
                <h2 className={`h2_nosotros ${styles.h2_nosotros}`}>Dra Erika Romero</h2>
                <h3 className={`h3_nosotros ${styles.h3_nosotros}`}>Sobre Mi</h3>
                <p className={`p_nosotros ${styles.p_nosotros}`}>Soy una <strong>profesional</strong> comprometida con el cuidado de la salud.
                    <br />
                    <br />
                    En el camino de mi formación de grado y post grado en la <strong>Universidad de Buenos Aires</strong>, en la <strong>Universidad Austral</strong>, y en <strong>Escuela Avicena</strong>, me he desarrollado en áreas de la clínica médica, la medicina estética y reparadora y en la comunicación profesional, para obtener herramientas de transformación para mí y para los pacientes, con el fin de alcanzar con éxito los objetivos planteados en el camino de cada uno.
                    <br />
                    <br /> Mi misión es ofrecer tratamientos que mejoren la calidad de vida de las personas, en un camino donde a través de mi formación continua pueda brindar todo mi conocimiento a favor de las personas.
                    <br />
                    <br />
                    En mi atención se destacan valores como el <strong>cuidado</strong> de la salud de cada persona; el <strong>profesionalismo</strong> en cada tratamiento; la <strong>amabilidad</strong> en cada encuentro; la <strong>escucha activa</strong>, y la <strong>empatía</strong> entre otras.
                </p>
                <p className={`p_nosotros ${styles.p_nosotros}`}>Tengo como visión a futuro desarrollar un <strong>Centro de Medicina Clínica Estética y Reparadora</strong> de vanguardia y de referencia regional.</p>
            </div>
        </div>
    )
}


export default Nosotros;