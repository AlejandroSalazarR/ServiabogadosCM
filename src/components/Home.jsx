import React from 'react';

const Home = () => {

  return (
    <>
      <div  name='home' className='w-full h-screen relative'>
        {/* Container */}
        <div  className=' max-w-[1000px] mx-auto px-6 flex flex-col justify-end items-center h-full pb-24 '>
          <div className='bg-black/60 backdrop-blur-sm border border-[#D4AF37]/50 rounded-xl px-8 py-4 text-center pointer-events-auto'>
            <p className='text-[#D4AF37] font-serif text-lg sm:text-xl font-bold tracking-widest'>15 AÑOS DE EXPERIENCIA</p>

          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
