"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/carruselModule.css";

const Carrusel = () => {

    const images = [
        {
            src: "/carrusel-1.jpg",
            description: "Nuestro objetivo es tu bienestar ¡Vení y comprobá la diferencia!",
        },
        {
            src: "/carrusel-2.jpg",
            description: "Conocé nuestros tratamientos personalizados según tus necesidades.",
        },
        {
            src: "/carrusel-3.png",
            description: "Descubrí como adaptamos nuestros servicios a tus necesidades.",
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // Cambia de imagen cada 6 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [images.length]);


    return (
        <div className={`carrusel ${styles.carrusel}`}>
            <div className={`carrusel_item ${styles.carrusel_item}`} style={{ display: currentImageIndex === 0 ? 'block' : 'none' }}>
                <img className={`imagenes_carrusel ${styles.imagenes_carrusel}`} src={images[0].src} alt="Imagen 1" />
                <p className={`carrusel_description_p ${images[0].className}`}>
                    {images[0].description}
                </p>
            </div>
            <div className="carrusel-item" style={{ display: currentImageIndex === 1 ? 'block' : 'none' }}>
                <img className={`imagenes_carrusel ${styles.imagenes_carrusel}`} src={images[1].src} alt="Imagen 2" />
                <p className={`carrusel_description_p ${images[1].className}`}>
                    {images[1].description}
                </p>
            </div>
            <div className={`carrusel_item ${styles.carrusel_item}`} style={{ display: currentImageIndex === 2 ? 'block' : 'none' }}>
                <img className={`imagenes_carrusel ${styles.imagenes_carrusel}`} src={images[2].src} alt="Imagen 3" />
                <p href="/tratamientos" className={`carrusel_description_p ${images[2].className}`}>
                    {images[2].description}
                </p>
            </div>
        </div>
    );
};

export default Carrusel;