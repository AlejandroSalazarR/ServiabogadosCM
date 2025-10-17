import React from 'react';
import PhotoLawyer from '../assets/Photo11.jpeg';


const About = () => {

  return (

    <>

      <div name='about' className='w-full p-32 bg-[#1F1F1F] text-stone-200  max-lg:p-0'>
        <div className='flex flex-col max-w-7xl mx-auto	 justify-center items-center w-full h-full '>

            <div className=' w-full flex flex-row justify-center items-center bg-[#595E63] shadow-md hover:shadow-lg rounded-3xl	max-lg:pr-0 sm:grid-cols-2  pr-4 max-lg:flex-col max-lg:rounded-none'>

              <img className='w-80' src={PhotoLawyer} alt="HTML icon" />

              <div className='text-[#fff] bg-[#595E63] p-8 flex flex-col justify-center self-center'>
                <p className='text-4xl pb-4 font-montserrat inline max-lg:p-4'>
                  ASESORIA ADMINISTRATIVA
                </p>
                <p className='text-xl text-[#fff]  max-lg:p-4'>Es un servicio que se enfoca en brindar apoyo y asesoramiento a empresas y organizaciones para mejorar su gestión y eficiencia en el uso de recursos. Esta área de estudio se enfoca en analizar y mejorar los procesos y procedimientos administrativos, con el fin de aumentar la productividad y reducir costos, busca identificar oportunidades, resolver desafíos y potenciar la eficiencia y rentabilidad de la empresa, alianza estratégica que busca potenciar el crecimiento y éxito de las empresas. Al contar con expertos que ofrecen perspectivas frescas y soluciones.</p>
              </div>
            </div>

        </div>
      </div>




    </>

  );
};

export default About;
