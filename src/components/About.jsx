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
                  Sobre nosotros
                </p>
                <p className='text-xl text-[#fff]  max-lg:p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorem nulla magnam dolorum eaque assumenda veniam, aspernatur impedit quidem reiciendis debitis. Minus tenetur quod tempora officiis asperiores dolorum exercitationem ipsum!  </p>
              </div>
            </div>

        </div>
      </div>




    </>

  );
};

export default About;
