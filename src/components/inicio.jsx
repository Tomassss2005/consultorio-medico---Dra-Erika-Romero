import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/inicioModule.css";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el navbar-toggle
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el menú desplegable
    const navRef = useRef(null); // Referencia para el navbar
    const dropdownRef = useRef(null); // Referencia para el menú de tratamientos
    const location = useLocation();

    // Alterna la visibilidad del navbar-toggle
    const toggleNavMenu = () => {
        setIsNavOpen((prev) => !prev);
    };

    // Alterna la visibilidad del menú desplegable de Tratamientos
    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen((prev) => !prev);
    };

    // Cierra el navbar y el dropdown al cambiar de página
    useEffect(() => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    // Cierra el navbar y el dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (navRef.current && !navRef.current.contains(event.target)) &&
                (dropdownRef.current && !dropdownRef.current.contains(event.target))
            ) {
                setIsNavOpen(false);
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <nav ref={navRef} className={`navbar ${styles.navbar}`}>
            <div className={`navbar_header ${styles.navbar_header}`}>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img className={`img_nav ${styles.img_nav}`} src="favicon.ico" alt="Logo médico" />
                </Link>
            </div>
            <button className={`navbar_toggle ${isNavOpen ? "open" : ""}`} onClick={toggleNavMenu}>
                &#9776;
            </button>
            <ul className={`ul_nav ${isNavOpen ? "open" : ""}`}>
                <li>
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`a_nav ${styles.a_nav}`}>
                        Inicio
                    </Link>
                </li>
                <li ref={dropdownRef}>
                    <Link to="#" className={`a_nav ${styles.a_nav}`} onClick={toggleDropdown}>
                        Tratamientos <span>&#9662;</span>
                    </Link>
                    {isDropdownOpen && (
                        <ul className={`ul_menu ${isDropdownOpen ? "open" : ""}`}>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/alopecia-androgenica" onClick={scrollToTop}>Alopecia androgénica</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/contorno-mandibular" onClick={scrollToTop}>Contorno mandibular</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/despigmentacion" onClick={scrollToTop}>Despigmentación</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/fillers-con-acido-hialuronico" onClick={scrollToTop}>Fillers con ácido hialurónico</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/intradermoterapia" onClick={scrollToTop} >Intradermoterapia</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/nutricion-calidad-de-piel" onClick={scrollToTop}>Nutrición y calidad de piel</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/peeling-facial" onClick={scrollToTop}>Peeling facial</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/plasma-rico-en-plaquetas" onClick={scrollToTop}>Plasma rico en plaquetas</Link>
                            </li>
                            <li className={`li_nav ${styles.li_nav}`}>
                                <Link to="/toxina-botulinica" onClick={scrollToTop}>Toxina botulínica</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/nosotros" onClick={scrollToTop} className={`a_nav ${styles.a_nav}`}>
                        Acerca de mí
                    </Link>
                </li>
                <li>
                    <Link to="/resultados" onClick={scrollToTop} className={`a_nav ${styles.a_nav}`}>
                        Resultados
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" onClick={scrollToTop} className={`a_nav ${styles.a_nav}`}>
                        Contáctanos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
