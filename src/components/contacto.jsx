import { useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/contactoModule.css";


function Contacto() {

    const initialState = {
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [isSubmitting] = useState(false);



    const manejoErrores = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value

        });
    }

    const validacion = () => {

        let isValid = true;
        const errors = {};

        if (!formData.nombre.trim()) {
            errors.nombre = 'El nombre es obligatorio';
            isValid = false;
        }

        if (!formData.apellido.trim()) {
            errors.apellido = 'El apellido es obligatorio';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'El email es obligatorio';
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'El email no es válido';
            isValid = false;
        }

        if (!formData.mensaje.trim()) {
            errors.mensaje = 'Escribe un mensaje'
            isValid = false
        }

        setErrors(errors);
        return isValid;
    };


    const manejarEnvio = (e) => {
        e.preventDefault();
        if (validacion()) {
            emailjs.sendForm('akin2020', 'template_mipm04l', e.target, 'F8Oqn7KxbdL8tEBx0')
                .then(() => {
                    setMessage('Mensaje enviado correctamente!');
                    setFormData({
                        nombre: '',
                        apellido: '',
                        email: '',
                        mensaje: '',
                    });

                    // Hace que el mensaje desaparezca después de 3 segundos
                    setTimeout(() => {
                        setMessage('');
                    }, 3000); // 3000 milisegundos = 3 segundos

                }, () => {
                    setMessage('Error al enviar el mensaje. Inténtalo de nuevo.');
                    // Hace que el mensaje desaparezca después de 3 segundos
                    setTimeout(() => {
                        setMessage('');
                    }, 3000); // 3000 milisegundos = 3 segundos

                });
        }
    };


    return (

        <div>
            <div>

            </div>
            <div className={`div_contacto ${styles.div_contacto}`}>
                <div className={`form_section ${styles.form_section}`}>
                    <form className={`form ${styles.form}`} onSubmit={manejarEnvio}>
                        <h1 className={`h1_form ${styles.h1_form}`}>Consulta</h1>
                        <div className={`div_form ${styles.div_form}`}>
                            <label className={`label_form ${styles.label_form}`} htmlFor="nombre">Nombre</label>
                            <input className={`input_form ${styles.input_form}`} type="text" id="nombre" name="nombre" value={formData.nombre} onChange={manejoErrores} />
                            {errors.nombre && <p className={`p_form ${styles.p_form}`}>{errors.nombre}</p>}
                        </div>

                        <div className={`div_form ${styles.div_form}`}>
                            <label className={`label_form ${styles.label_form}`} htmlFor="apellido">Apellido</label>
                            <input className={`input_form ${styles.input_form}`} type="text" name="apellido" id="apellido" value={formData.apellido} onChange={manejoErrores} />
                            {errors.apellido && <p className={`p_form ${styles.p_form}`}>{errors.apellido}</p>}
                        </div>

                        <div className={`div_form ${styles.div_form}`}>
                            <label className={`label_form ${styles.label_form}`} htmlFor="email">Email</label>
                            <input className={`input_form ${styles.input_form}`} type="text" name="email" id="email" value={formData.email} onChange={manejoErrores} />
                            {errors.email && <p className={`p_form ${styles.p_form}`}>{errors.email}</p>}
                        </div>

                        <div className={`div_form ${styles.div_form}`}>
                            <label className={`label_form ${styles.label_form}`} htmlFor="mensaje">Mensaje</label>
                            <textarea className={`textarea_form ${styles.textarea_form}`} name="mensaje" id="mensaje" value={formData.mensaje} onChange={manejoErrores}></textarea>
                            {errors.mensaje && <p className={`p_form ${styles.p_form}`}>{errors.mensaje}</p>}
                        </div>

                        <button className={`button_reset ${styles.button_reset}`} type="reset" onClick={() => setFormData(initialState)}>Eliminar datos</button>
                        <button className={`button_send ${styles.button_send}`} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                        {message && <p className={`message_form ${styles.message_form}`}>{message}</p>}
                    </form>
                </div>


                <div className={`detalles_mapa_section ${styles.deatalles_mapa_section}`}>
                    <div className={`div_info_contacto ${styles.div_info_contacto}`}>
                        <h2 className={`h2_contacto ${styles.h2_contacto}`}>Detalles</h2>
                        <a className={`a_info_contacto ${styles.a_info_contacto}`} href="https://maps.app.goo.gl/yeZGJn9mhX6K74Uv6" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={`logo_contacto ${styles.logo_contacto}`} icon={faMapMarkerAlt} /> Ciudad de la Paz 1450, Belgrano CABA
                        </a>
                        <a className={`a_info_contacto_telefono ${styles.a_info_contacto_telefono}`} href="https://wa.me/+5491125495253">
                            <FontAwesomeIcon className={`logo_contacto ${styles.logo_contacto}`} icon={faPhone} /> +54 9 11 2549-5253
                        </a>
                        <a className={`a_info_contacto_email ${styles.a_info_contacto_email}`} href="mailto:erikaromero.salud@gmail.com">
                            <FontAwesomeIcon className={`logo_contacto_email ${styles.logo_contacto_email}`} icon={faEnvelope} /> erikaromero.salud@gmail.com
                        </a>
                    </div>

                    <div className={`div_mapa ${styles.div_mapa}`}>
                        <p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.428575278841!2d-58.452329199999994!3d-34.5680208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5daa7dd78bb%3A0x9c668ade4b5958f9!2sCdad.%20de%20la%20Paz%201450%2C%20C1426%20C1426AHA%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1754927681299!5m2!1ses!2sar"
                                className={`mapa ${styles.mapa}`}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                                DIRECCIÓN: La Paz 1450. CABA, Argentina
                            </iframe>
                        </p>

                    </div>
                </div>
            </div>


            <div>

            </div>
        </div>
    )
}

export default Contacto;