import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/inicioModule.css";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el navbar-toggle
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el menú desplegable de Tratamientos
    const subMenuRef = useRef(null);
    const location = useLocation();

    // Alterna la visibilidad del navbar-toggle
    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Alterna la visibilidad del menú desplegable de Tratamientos
    const toggleDropdown = (e) => {
        e.preventDefault(); // Evita que el link recargue la página
        setIsDropdownOpen(!isDropdownOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Cierra el navbar y el dropdown al cambiar de página
    useEffect(() => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${styles.navbar}`}>
            <div className={`navbar_header ${styles.navbar_header}`}>
                <Link to="/" onClick={scrollToTop}>
                    <img className={`img_nav ${styles.img_nav}`} src="favicon.ico" alt="Logo médico" />
                </Link>
            </div>
            <button className={`navbar_toggle ${isNavOpen ? "open" : ""}`} onClick={toggleNavMenu}>
                &#9776;
            </button>
            <ul className={`ul_nav ${isNavOpen ? "open" : ""}`}>
                <li>
                    <Link to="/" onClick={scrollToTop} className={`a_nav ${styles.a_nav}`}>
                        Inicio
                    </Link>
                </li>
                <ul className="ul">
                    <Link to="#" className={`a_nav ${styles.a_nav}`} onClick={toggleDropdown}>
                        Tratamientos <span>&#9662;</span>
                    </Link>
                    <ul ref={subMenuRef} className={`ul_menu ${isDropdownOpen ? "open" : ""}`}>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/alopecia-androgenica">Alopecia androgénica</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/contorno-mandibular">Contorno mandibular</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/despigmentacion">Despigmentación</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/fillers-con-acido-hialuronico">Fillers con ácido hialurónico</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/intradermoterapia">Intradermoterapia</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/nutricion-calidad-de-piel">Nutrición y calidad de piel</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/peeling-facial">Peeling facial</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/plasma-rico-en-plaquetas">Plasma rico en plaquetas</Link>
                        </li>
                        <li className={`li_nav ${styles.li_nav}`}>
                            <Link to="/toxina-botulinica">Toxina botulínica</Link>
                        </li>
                    </ul>
                </ul>
                <li>
                    <Link to="/nosotros" className={`a_nav ${styles.a_nav}`}>
                        Acerca de mi
                    </Link>
                </li>
                <li>
                    <Link to="/resultados" className={`a_nav ${styles.a_nav}`}>
                        Resultados
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className={`a_nav ${styles.a_nav}`}>
                        Contáctanos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
