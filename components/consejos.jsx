"use client"
import React, { useState } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/consejosModule.css";

const faqs = [
    {
        id: 1,
        question: "Cuidados de la piel ante el sol☀️",
        items: [
            "Evitar exponerse al sol entre las 10 y las 16 horas, cuando los rayos ultravioleta son más intensos.",
            "Usar un protector solar de calidad reconocida con factor de protección solar (FPS) mayor a 30 en el cuerpo y mayor a 50 en el rostro.",
            "Aplicar el protector solar en toda la piel, 20 minutos antes de la exposición al sol. Usar una cantidad generosa sin olvidar sitios como: orejas, empeines, labios, cuello, 'pelada' de los calvos, y tórax.",
            "Renovar la aplicación del protector solar cada 2 horas o cada 30 minutos si se sale del agua.",
            "Protegerse del sol incluso en días nublados, ya que los rayos UVA llegan a la piel.",
            "Usar ropa y accesorios adecuados, como sombrero o gorro, ropa de trama cerrada y anteojos con protección a las radiaciones ultravioletas.",
            "Cuidar la piel aun cuando está bronceada.",
            "Revisar la piel periódicamente, en busca de manchas nuevas o que se hayan modificado.",
        ],
        icon: faCircle,
    },
    {
        id: 2,
        question: "Lográ una piel luminosa de alta calidad🧴",
        answer: "La limpieza facial es el cimiento de una rutina de skincare efectiva. Empieza y termina tu día con una piel fresca y purificada gracias a pasos simples pero fundamentales. Por las noches, es importantísimo que no te vayas a la cama sin retirar el maquillaje o el fotoprotector que te hayas aplicado. Utiliza primero por ejemplo un agua micelar para eliminar el maquillaje y las impurezas acumuladas durante el día. Y cada mañana, comienza tu día con la misma limpieza facial que prepara tu piel para recibir los beneficios de los productos que siguen en tu rutina. También hay limpiadores que mejoran la limpieza, y la elección adecuada, ya sea gel espuma, emulsión o crema, dependerá del tipo de piel. Para pieles grasas, los limpiadores con ingredientes como el ácido salicílico son ideales. Las pieles secas se benefician de limpiadores hidratantes y libres de sulfatos. Las pieles sensibles requieren de limpiadores suaves y sin fragancias ni alcohol, mientras que las mixtas pueden beneficiarse de opciones equilibradas que tratan diferentes áreas. Luego, escoge una crema, gel o serum hidratante adecuada para tu tipo de piel. Son recomendables los que tienen ácido hialurónico, vitamina C, y niacinamida, pero cada tipo de piel puede beneficiarse de alguno en particular; una consulta médica puede asesorarte. La hidratación adecuada mantiene la piel equilibrada y saludable, preparándola para transitar tu día a día, ejerciendo su función barrera. El último paso para salir por la mañana es la aplicación del factor de protección solar, que te cuida de los efectos no deseables del sol.",
    },
];

function Consejos() {

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section id="faq" className={`section_consejos ${styles.section_consejos}`}>
            <h2 className={`h2_consejos ${styles.h2_consejos}`}>Consejos para pacientes</h2>
            <div className={`div_consejos ${styles.div_consejos}`}>
                {faqs.map((faq, index) => (
                    <div key={faq.id} className={`consejos_item ${styles.consejos_item}`}>
                        <button
                            onClick={() => toggleQuestion(index)}
                            className={`button_consejos ${styles.button_consejos}`}
                        >
                            {faq.question}
                        </button>
                        {openQuestion === index && (
                            <div className={`description_consejos ${styles.description_consejos}`}>
                                {/* Si el ítem tiene un array de 'items' */}
                                {faq.items ? (
                                    <ul>
                                        {faq.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{faq.answer}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Consejos;