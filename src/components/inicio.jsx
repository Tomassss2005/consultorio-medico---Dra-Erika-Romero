import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/inicioModule.css";


function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el navbar-toggle
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el menú desplegable de Tratamientos
    const subMenuRef = useRef(null);

    // Alterna la visibilidad del navbar-toggle
    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Alterna la visibilidad del menú desplegable de Tratamientos
    const toggleDropdown = (e) => {
        e.preventDefault(); // Evita que el link recargue la página
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <nav className={`navbar ${styles.navbar}}`}>
            <div className={`navbar_header ${styles.navbar_header}}`}>
                <Link to="/">
                    <img className={`img_nav ${styles.img_nav}}`} src="favicon.ico" alt="Logo médico" />
                </Link>
            </div>
            <button className={`navbar_toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNavMenu}>
                &#9776;
            </button>
            <ul className={`ul_nav ${isNavOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" className={`a_nav ${styles.a_nav}}`}>Inicio</Link>
                </li>
                <ul className="ul">
                    <Link to="#" className={`a_nav ${styles.a_nav}}`} onClick={toggleDropdown}>
                        Tratamientos <span >&#9662;</span>
                    </Link>
                    <ul ref={subMenuRef} className={`ul_menu ${isDropdownOpen ? 'open' : ''}`}>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/alopecia-androgenica">Alopecia androgénica</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/contorno-mandibular">Contorno mandibular</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/despigmentacion">Despigmentación</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/fillers-con-acido-hialuronico">Fillers con ácido hialurónico</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/intradermoterapia">Intradermoterapia</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/nutricion-calidad-de-piel">Nutrición y calidad de piel</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/peeling-facial">Peeling facial</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/plasma-rico-en-plaquetas">Plasma rico en plaquetas</Link></li>
                        <li className={`li_nav ${styles.li_nav}}`}><Link to="/toxina-botulinica">Toxina botulínica</Link></li>
                    </ul>
                </ul>
                <li>
                    <Link to="/nosotros" className={`nosotros ${styles.nosotros}}`}>Acerca de mi</Link>
                </li>
                <li>
                    <Link to="/resultados" className={`nosotros ${styles.nosotros}}`}>Resultados</Link>
                </li>
                <li>
                    <Link to="/contacto" className={`a_nav ${styles.a_nav}`}>Contáctanos</Link>
                </li>

            </ul>
        </nav>

    );
}

export default Navbar;