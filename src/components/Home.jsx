import React from 'react';
import photo11 from '../assets/Photo11.jpeg';


const Home = () => {

  return (
    <>
      <div  name='home' className='w-full h-screen relative'>
        {/* Container */}
        <div  className=' max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full '>
          <div className='  w-2/3 shadow-md hover:shadow-lg '>
            <h2  className='text-4xl sm:text-4xl  text-[#333] blur-none	'>

            </h2>
            <h3 className='text-2xl sm:text-4xl  text-[#333] blur-none	'>

            </h3>

          </div>


        </div>

        {/* Imagen en la parte inferior derecha */}
        <div className='absolute bottom-8 right-8 z-10'>
          <img
            src={photo11}
            alt="Serviabogados CM"
            className='w-48 h-auto object-contain shadow-lg rounded-lg'
          />
        </div>
      </div>


    </>
  );
};

export default Home;
