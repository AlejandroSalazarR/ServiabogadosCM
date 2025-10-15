import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '25vh',
    cursor: 'pointer',
    transition: theme.transitions.create(['transform', 'box-shadow'], {
        duration: 300,
    }),

    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
        transform: 'scale(1.02)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor ',
        borderRadius: '24px',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: 'https://manosalvaspartners.com/wp-content/uploads/2018/09/asesoria-legal.jpg',
        title: 'Asesoria juridica civil',
        width: '50%',
        description: 'Ofrecemos asesoría integral en temas de derecho civil, incluyendo contratos, sucesiones, obligaciones y responsabilidad civil. Nuestro equipo de expertos te acompaña en la resolución de conflictos y la protección de tus derechos patrimoniales y personales.',
    },

    {
        url: 'https://casallasabogados.co/wp-content/uploads/2024/05/ADMINISTRATIVO.jpg',
        title: 'Asesoria juridica administrativa',
        width: '50%',
        description: 'Es un servicio que se enfoca en brindar apoyo y asesoramiento a empresas y organizaciones para mejorar su gestión y eficiencia en el uso de recursos. Esta área de estudio se enfoca en analizar y mejorar los procesos y procedimientos administrativos, con el fin de aumentar la productividad y reducir costos, busca identificar oportunidades, resolver desafíos y potenciar la eficiencia y rentabilidad de la empresa, alianza estratégica que busca potenciar el crecimiento y éxito de las empresas. Al contar con expertos que ofrecen perspectivas frescas y soluciones.',
    },
    {
        url: 'https://gestioncalidadsas.com/wp-content/uploads/2020/05/Gestion-Calidad-05-1024x683.jpg',
        title: 'Asesoria juridica laboral',
        width: '38%',
        description: 'Brindamos asesoría especializada en derecho laboral, incluyendo contratos de trabajo, terminaciones, liquidaciones, conflictos laborales, acoso laboral y todo lo relacionado con las relaciones entre empleadores y trabajadores.',
    },
    {
        url: 'https://www.kienyke.com/sites/default/files/styles/interna_relacionado_seccion_xl_l_m/public/2021-08/accion-de-tutela-2%20%281%29.jpg?itok=iK-iECmb',
        title: 'Derechos de peticion y Acciones de tutela',
        width: '38%',
        description: 'Elaboramos y tramitamos derechos de petición ante entidades públicas y privadas, así como acciones de tutela para la protección inmediata de derechos fundamentales. Te acompañamos en todo el proceso hasta obtener una respuesta favorable.',
    },
    {
        url: 'https://invisenales.com/wp-content/uploads/2020/06/Captura-de-Pantalla-2020-07-09-a-las-6.54.52-p.-m..png',
        title: 'Asesorias en multas de transito',
        width: '24%',
        description: 'Te asesoramos en la impugnación de comparendos de tránsito, recursos de apelación y procesos administrativos relacionados con multas vehiculares. Defendemos tus derechos ante las autoridades de tránsito.',
    },
    {
        url: 'https://3.bp.blogspot.com/-7Xb4k74cKoM/V08JDva5iQI/AAAAAAAAAus/HTHDvG3F2_kCXqPIzPqA1yGMGH4spffaACLcB/s1600/SEGURIDAD%2BSOCIAL.jpg',
        title: 'Afiliacion a seguridad social',
        width: '40%',
        description: 'Gestionamos procesos de afiliación y traslado al sistema de seguridad social integral (salud, pensión y riesgos laborales). Asesoramos tanto a empleadores como trabajadores independientes en sus obligaciones y derechos en materia de seguridad social.',
    },
    {
        url: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Otros servicios',
        width: '20%',
        description: 'Ofrecemos una amplia gama de servicios legales adicionales adaptados a tus necesidades específicas. Consulta con nosotros sobre tu caso particular y te brindaremos la asesoría especializada que requieres.',
    },
    {
        url: 'https://alarmtech.com.do/wp-content/uploads/2019/05/contact-us-1024x350.jpg',
        title: 'Contactanos',
        width: '40%',
        description: '¿Tienes alguna consulta legal? No dudes en contactarnos. Estamos disponibles para atender tus inquietudes y brindarte la mejor asesoría jurídica. Comunícate con nosotros y agenda tu cita.',
    }

];

export default function ProductCategories() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedService(null);
    };

    return (
        <>
            <div data-scroll-container name='servicios' className='pt-20 pb-32 bg-[#1F1F1F]  max-lg:p-0'>
                <div className='flex flex-col 	 justify-center items-center h-full'>
                    <div className='max-w-[1000px] w-max  grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4 max-lg:pt-4'>
                            <p className='text-4xl inline text-stone-200  pb-4 '>Servicios</p>

                        </div>
                    </div>

                    <div className='w-full  bg-[#1F1F1F] text-stone-800'>

                        <Container className='max-w-7xl mx-auto' component="section"  >
                            <Typography variant="h4" marked="center" align="center" component="h2">
                            </Typography>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {images.map((image) => (

                                    <ImageIconButton
                                        key={image.title}
                                        style={{
                                            width: image.width,
                                        }}
                                        onClick={() => handleOpenModal(image)}
                                    >

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center 40%',
                                                backgroundImage: `url(${image.url})`,
                                            }}
                                        />
                                        <ImageBackdrop className="imageBackdrop" />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'common.white',
                                            }}
                                        >
                                            <Typography
                                                component="h3"
                                                variant="h6"
                                                color="inherit"
                                                className="imageTitle"
                                            >
                                                {image.title}
                                                <div className="imageMarked" />
                                            </Typography>
                                        </Box>

                                    </ImageIconButton>

                                ))}
                            </Box>
                        </Container>

                    </div>
                </div>

            </div>

            {/* Modal para mostrar información detallada del servicio */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={openModal}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
                            maxWidth: 800,
                            bgcolor: '#2a2a2a',
                            borderRadius: 4,
                            boxShadow: 24,
                            p: 0,
                            outline: 'none',
                            maxHeight: '90vh',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {selectedService && (
                            <>
                                {/* Botón de cerrar */}
                                <IconButton
                                    onClick={handleCloseModal}
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        color: 'white',
                                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                                        zIndex: 10,
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.7)',
                                        },
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                {/* Imagen de fondo */}
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 250,
                                        backgroundImage: `url(${selectedService.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                            p: 3,
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            component="h2"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                            }}
                                        >
                                            {selectedService.title}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Contenido */}
                                <Box
                                    sx={{
                                        p: 4,
                                        overflowY: 'auto',
                                        flex: 1,
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#e0e0e0',
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            textAlign: 'justify',
                                        }}
                                    >
                                        {selectedService.description}
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}