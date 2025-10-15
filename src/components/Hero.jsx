import React from 'react';
import Home from "./Home";
import heroVid from '../assets/lawers.mp4';

const Hero = () => {
    return (
        <div className='w-full h-[100vh] top-[90px]'>
            <video
                className='object-cover h-full w-full absolute -z-10'
                src={heroVid}
                type="video/mp4"
                autoPlay
                loop
                muted
            />
            <div className='w-full h-[100%] flex flex-col justify-center'>
                <Home />
            </div>
        </div>
    );
};

export default Hero;