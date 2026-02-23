import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Home from "./Home";
import image1 from '../assets/lawyer1.png';
import image2 from '../assets/lawyer2.png';

const Hero = () => {
    const images = [image1, image2];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Transición automática cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='w-full h-[100vh] relative overflow-hidden bg-[#1F1F1F]'>
            {/* Carrusel de imágenes en contenedor limitado */}
            <div className='absolute inset-0 flex items-center justify-center bg-[#1F1F1F]'>
                <div className='relative w-[95%] 2xl:w-full max-w-[2400px] h-[85vh] max-lg:w-full max-lg:h-full z-0'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 rounded-2xl overflow-hidden max-lg:rounded-none ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Serviabogados CM ${index + 1}`}
                                className='w-full h-full object-cover'
                            />
                            {/* Overlay oscuro para mejor legibilidad del texto */}
                            <div className='absolute inset-0 bg-black opacity-40'></div>
                        </div>
                    ))}

                    {/* Flecha izquierda */}
                    <button
                        onClick={goToPrevious}
                        className='absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-[#D4AF37] hover:scale-110 text-white p-3 rounded-full transition-all duration-300 max-lg:p-2 max-lg:left-2 cursor-pointer'
                        aria-label='Imagen anterior'
                    >
                        <FaChevronLeft size={24} className='max-lg:text-lg' />
                    </button>

                    {/* Flecha derecha */}
                    <button
                        onClick={goToNext}
                        className='absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-[#D4AF37] hover:scale-110 text-white p-3 rounded-full transition-all duration-300 max-lg:p-2 max-lg:right-2 cursor-pointer'
                        aria-label='Siguiente imagen'
                    >
                        <FaChevronRight size={24} className='max-lg:text-lg' />
                    </button>

                    {/* Indicadores */}
                    <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 max-lg:bottom-6'>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    index === currentIndex
                                        ? 'w-12 h-3 bg-[#D4AF37]'
                                        : 'w-3 h-3 bg-white/60 hover:bg-white hover:scale-125'
                                }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className='w-full h-[100%] flex flex-col justify-center z-10 relative pointer-events-none'>
                <Home />
            </div>
        </div>
    );
};

export default Hero;