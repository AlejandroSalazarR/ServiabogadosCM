import * as React from 'react';
import Asesoria from '../assets/asesoria.png';
import Servicio from '../assets/servicio.png';
import Draspagna from '../assets/draspagna.png';


function ProductHowItWorks() {
    return (
        <div className="bg-[url('/src/assets/leyhor.jpg')] bg-no-repeat bg-cover bg-fixed">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative  rounded-lg ">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg  group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src={Asesoria} alt="HTML icon" className="h-full w-full object-cover object-center" />
                            </div>

                        </div>

                        <div className="group relative  rounded-lg">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src={Draspagna} alt="HTML icon" className="h-full w-full object-cover object-center" />
                            </div>

                        </div>

                        <div className="group relative  rounded-lg ">
                            <div className="relative  w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src={Servicio} alt="HTML icon" className="h-full  w-full object-cover object-center" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHowItWorks;