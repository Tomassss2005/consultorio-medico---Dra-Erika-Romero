import React from "react";
import styles from "../styles/plasmaRicoenPlaquetasModule.css"




function PRP() {

    return (
        <div className="div-nosotros">
            <div className="tratamientos-container">
                <div className="container-descripcion-PRP">
                    <h2 className="h2-tratamientos">Plasma rico en plaquetas</h2>
                    <img className="img-PRP" src="/PRP.jpg" alt="Imagen de persona con plasma rico en plaquetas" />
                    <p className="p-tratamientos">
                        El fundamento de la utilización de PRP es la existencia de factores de crecimiento y citoquinas (proteínas) en el plasma sanguineo, que trabajan conjuntamente para producir SÍNTESIS DE NUEVO TEJIDO CON VITALIDAD RENOVADA. Estos estimulan a los fibroblastos que son las células que producen colágeno, elastina y ácido hialurónico naturales propios del cuerpo.
                        Mejora la piel, su estructura interna, la hidratación, la textura y el brillo.
                        En el tratamiento capilar, se estimula el crecimiento de nuevos vasos sanguíneos lo que produce una mejora en la irrigación y nutrición al folículo piloso mejorando su estructura, grosor, aspecto; disminuye la caída, y además genera el crecimiento de nuevos cabellos. En el procedimiento se extrae sangre del paciente y luego de ser procesada, se extrae el plasma rico en plaquetas y se aplica mediante microinyecciones prácticamente indoloras para administrar el PRP y obtener los resultados deseados.

                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-PRP">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Regeneración de tejidos.</li>
                        <li className="li-tratamientos">Rejuvenecimiento facial.</li>
                        <li className="li-tratamientos">Promoción de la cicatrización.</li>
                        <li className="li-tratamientos">Estimulación del crecimiento capilar.</li>
                        <li className="li-tratamientos">Mejora de la luminosidad y tono de la piel.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default PRP;