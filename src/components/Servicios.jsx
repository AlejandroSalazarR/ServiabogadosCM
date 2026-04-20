import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaBalanceScale, FaFileContract, FaBriefcase, FaShieldAlt, FaEnvelope, FaLandmark, FaChevronLeft, FaChevronRight, FaStar, FaWhatsapp } from 'react-icons/fa';

// Importar imágenes de asesoría civil
import asesoriacivil1 from '../assets/asesoriacivil1.png';
import asesoriacivil2 from '../assets/asesoriacivil2.png';
import asesoriacivil3 from '../assets/asesoriacivil3.png';

// Importar imágenes de asesoría familia
import asesoriafamilia1 from '../assets/asesoriafamilia1.png';
import asesoriafamilia2 from '../assets/asesoriafamilia2.png';
import asesoriafamilia3 from '../assets/asesoriafamilia3.png';

// Importar imágenes de asesoría comercial
import asesoriacomercial1 from '../assets/asesoriacomercial1.png';
import asesoriacomercial2 from '../assets/asesoriacomercial2.png';
import asesoriacomercial3 from '../assets/asesoriacomercial3.png';

// Importar imágenes de asesoría administrativa
import asesoriaadministrativa1 from '../assets/asesoriaadministrativa1.png';
import asesoriaadministrativa2 from '../assets/asesoriaadministrativa2.png';
import asesoriaadministrativa3 from '../assets/asesoriaadministrativa3.png';

// Importar imágenes de asesoría laboral
import asesorialaboral1 from '../assets/asesorialaboral1.png';
import asesorialaboral2 from '../assets/asesorialaboral2.png';
import asesorialaboral3 from '../assets/asesorialaboral3.png';

// Importar imágenes de asesoría seguridad social
import asesoriass1 from '../assets/asesoriass1.png';
import asesoriass2 from '../assets/asesoriass2.png';
import asesoriass3 from '../assets/asesoriass3.png';

// Importar imágenes de asesoría constitucional
import cambio2 from '../assets/cambio2.png';
import cambio3 from '../assets/cambio3.png';
import cambio4 from '../assets/cambio4.png';
import cambio5 from '../assets/cambio5.png';
import cambio6 from '../assets/cambio6.png';
import cambio7 from '../assets/cambio7.png';
import cambio8 from '../assets/cambio8.png';

// Componente de carrusel de imágenes
const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Transición automática cada 4 segundos
    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1F1F1F]'>
            {/* Imagen actual */}
            <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1}`}
                className='w-full h-full object-contain transition-opacity duration-500'
            />

            {/* Overlay gradiente */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>

            {/* Flechas de navegación */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300'
                        aria-label='Imagen anterior'
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNext}
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300'
                        aria-label='Siguiente imagen'
                    >
                        <FaChevronRight size={20} />
                    </button>

                    {/* Indicadores */}
                    <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentImageIndex
                                        ? 'w-8 h-2 bg-white'
                                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const services = [
    {
        icon: <FaLandmark size={32} />,
        title: 'ASESORÍA CONSTITUCIONAL',
        description: 'SERVIABOGADOS C.M, ofrece servicios de asesoría Constitucional y representación jurídica en la protección de los derechos fundamentales, la defensa y garantías constitucionales en la representación en derechos de petición ante autoridades públicas y privadas, acciones de inconstitucionalidad, acciones de tutela, acciones de grupo y popular; y demás mecanismos de control constitucional, asegurando la correcta aplicación de la Constitución y la protección efectiva de los intereses de los clientes.',
        color: '#D4AF37',
        images: [cambio2, cambio3, cambio4]
    },
    {
        icon: <FaBalanceScale size={32} />,
        title: 'ASESORÍA CIVIL',
        description: 'SERVIABOGADOS C.M brinda asesoría legal en asuntos civiles relacionados con contratos, obligaciones, procesos declarativos y ejecutivos; y todos los conflictos que surjan contractual y extracontractual entre particulares y entidades del Estado, ofreciendo soluciones jurídicas y acompañamiento profesional para cada caso en particular.',
        color: '#4A90E2',
        images: [asesoriacivil1, asesoriacivil2, asesoriacivil3]
    },
    {
        icon: <FaBalanceScale size={32} />,
        title: 'ASESORÍA EN FAMILIA',
        description: 'SERVIABOGADOS C.M brinda asesoría y acompañamiento jurídico especializado en derecho de familia, orientado a proteger los derechos y el bienestar de cada integrante del grupo familiar, se atiende asuntos relacionados con divorcios, sucesiones, fijación y modificación de cuotas alimentarias, custodia y régimen de visitas, filiación, adopción y demás conflictos familiares, ofreciendo soluciones legales ajustadas al debido proceso y a la normatividad vigente para cada caso específico.',
        color: '#E74C3C',
        images: [asesoriafamilia1, asesoriafamilia2, asesoriafamilia3]
    },
    {
        icon: <FaBriefcase size={32} />,
        title: 'ASESORÍA COMERCIAL',
        description: 'SERVIABOGADOS C.M se centra en brindar asesoría legal a empresas y comerciantes, abarcando temas como la constitución de sociedades, la redacción de contratos comerciales, la resolución de conflictos en obligaciones adquiridas por medio de títulos valores como letras, pagares, cheques, contratos de compraventa entre otros tipos de contratos, también se maneja temas relacionados como la protección de la propiedad intelectual, derecho de autor y marca; todo ello adaptado a las necesidades específicas de sus clientes.',
        color: '#27AE60',
        images: [asesoriacomercial1, asesoriacomercial2, asesoriacomercial3]
    },
    {
        icon: <FaBriefcase size={32} />,
        title: 'ASESORÍA ADMINISTRATIVA',
        description: 'SERVIABOGADOS C.M brinda asesoría jurídica especializada en derecho administrativo, orientada a la defensa y protección de los derechos de las personas naturales y jurídicas frente a las entidades del Estado, utilizando los métodos alternativos de solución de conflictos; y se instaura derechos de petición ante autoridades públicas y privadas. Se realiza trámites administrativos ante el sistema integrado de información sobre multas y sanciones por infracciones de tránsito, en temas relacionados con los comparendos, se acompaña a nuestros clientes en trámites administrativos, contratación estatal, conflictos contractuales y extracontractuales, recursos administrativos y demás asuntos relacionados con la función pública, garantizando un servicio técnico, responsable y conforme a la normatividad vigente.',
        color: '#9B59B6',
        images: [asesoriaadministrativa1, asesoriaadministrativa2, asesoriaadministrativa3]
    },
    {
        icon: <FaFileContract size={32} />,
        title: 'ASESORÍA LABORAL',
        description: 'SERVIABOGADOS C.M brinda asesoría jurídica especializada en derecho laboral empresarial, brindando asesoría integral a empresas en la gestión legal de sus relaciones laborales, acompañando a los empleadores en la prevención de riesgos laborales, elaboración y revisión de contratos laborales, contratación, despidos y liquidaciones, defensa en procesos administrativos y judiciales, con el objetivo de garantizar el cumplimiento de la normatividad laboral vigente, prevenir y proteger los intereses de las empresas en la solución de conflictos, promover relaciones laborales justas, estables y legalmente seguras. Orientada a la protección de los derechos y deberes de los trabajadores y empleadores. Contar con una asesoría jurídica laboral adecuada permite prevenir conflictos ante el Ministerio del Trabajo y procesos judiciales.',
        color: '#F39C12',
        images: [asesorialaboral1, asesorialaboral2, asesorialaboral3]
    },
    {
        icon: <FaShieldAlt size={32} />,
        title: 'ASESORÍA EN SEGURIDAD SOCIAL',
        description: 'SERVIABOGADOS C.M brinda asesoría especializada en la seguridad social, orientada a la protección de los derechos de los afiliados al sistema de seguridad social, acompañando a nuestros clientes en asuntos relacionados con pensiones, incapacidades, riesgos laborales, afiliaciones, reclamaciones ante EPS, ARL y fondos de pensiones, así como en procesos administrativos y judiciales, garantizando un servicio técnico, responsable y conforme a la normatividad vigente.',
        color: '#16A085',
        images: [asesoriass1, asesoriass2, asesoriass3]
    },
    {
        icon: <FaShieldAlt size={32} />,
        title: 'DERECHOS DE PETICIÓN Y ACCIONES DE TUTELA',
        description: 'Elaboramos y tramitamos derechos de petición ante entidades públicas y privadas, así como acciones de tutela para la protección inmediata de derechos fundamentales. Te acompañamos en todo el proceso.',
        color: '#E74C3C',
        images: [cambio5, cambio6, cambio7]
    },
    {
        icon: <FaStar size={32} />,
        title: '¿POR QUÉ ELEGIR A SERVIABOGADOS C.M.?',
        description: 'Porque se caracteriza por brindar una asesoría legal integral, personalizada y comprometida, basada en el conocimiento técnico profesional, confidencialidad y acompañamiento permanente, ofreciendo una amplia gama de servicios legales, garantizando soluciones jurídicas claras y orientadas a resultados. Consulta tu caso en particular y te brindaremos la asesoría legal que requieres.',
        color: '#D4AF37',
        images: [cambio8]
    },
    {
        icon: <FaEnvelope size={32} />,
        title: 'CONTÁCTANOS',
        description: '¿Tienes alguna consulta legal? No dudes en contactarnos. Estamos disponibles para atender tus inquietudes y brindarte la mejor asesoría jurídica.<br/><br/><strong>Correo:</strong> serviabogadoscm@gmail.com<br/><strong>WhatsApp:</strong> <a href="https://wa.me/573178913023?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20nuestros%20servicios" target="_blank" style="color: #25D366; text-decoration: none; font-weight: bold;">+57 317 891 3023</a>',
        color: '#25D366',
        images: []
    }
];

export default function ProductCategories() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleService = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div name='servicios' className='py-20 bg-[#1F1F1F] max-lg:py-12'>
            <div className='max-w-5xl mx-auto px-6'>
                {/* Título */}
                <div className="text-center mb-16 max-lg:mb-10">
                    <p className='text-4xl font-serif font-bold tracking-wider text-stone-200 mb-2'>SERVICIOS JURÍDICOS</p>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                </div>

                {/* Lista de servicios tipo acordeón */}
                <div className='space-y-4'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                        >
                            {/* Header del servicio - siempre visible */}
                            <button
                                onClick={() => toggleService(index)}
                                className='w-full p-6 flex items-center justify-between text-left hover:bg-[#333] transition-colors duration-300 max-lg:p-4'
                            >
                                <div className='flex items-center gap-4 flex-1'>
                                    <div 
                                        style={{ color: service.color }}
                                        className='flex-shrink-0'
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className='text-xl font-serif font-bold text-white max-lg:text-base'>
                                        {service.title}
                                    </h3>
                                </div>
                                <div 
                                    className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                    style={{ color: service.color }}
                                >
                                    <FaChevronDown size={24} />
                                </div>
                            </button>

                            {/* Contenido expandible */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className='px-6 pb-6 pt-2 max-lg:px-4 max-lg:pb-4'>
                                    <div 
                                        className='w-16 h-1 mb-4'
                                        style={{ backgroundColor: service.color }}
                                    ></div>

                                    {/* Carrusel de imágenes si existen */}
                                    <ImageCarousel images={service.images} />

                                    {/* Descripción */}
                                    <div
                                        className='text-gray-300 leading-relaxed text-lg max-lg:text-base whitespace-pre-line'
                                        dangerouslySetInnerHTML={{ 
                                            __html: service.description 
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className='text-center mt-12'>
                    <a
                        href="https://wa.me/573178913023?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20nuestros%20servicios"
                        target="_blank"
                        rel="noreferrer"
                        className='inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
                    >
                        <FaWhatsapp size={24} />
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    );
}