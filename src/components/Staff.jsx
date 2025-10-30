import image_01 from '../assets/civil.jpg'
import image_02 from '../assets/asesor.jpg'
import image_03 from '../assets/ejecucion.jpg'
import PhotoLawyer from '../assets/Photo11.jpeg'



const features = [
  { name: 'Asesoría administrativa', description: 'Made from natural materials. Grain and color vary with each item.', image: PhotoLawyer },
  { name: 'Asesorias jurídicas', description: 'Made from natural materials. Grain and color vary with each item.', image: image_03 },
  { name: 'Derechos de peticion y Acciones de tutela', description: 'Made from natural materials. Grain and color vary with each item.', image: image_02 },
  { name: 'Asesoria civil', description: 'Made from natural materials. Grain and color vary with each item.', image: image_01 },
]

export default function Example() {
  return (
    <>

      <div name='nosotros' className="bg-[#1F1F1F]  flex justify-center  text-black max-lg:pb-20 ">
        <div className="  mx-20  grid max-w-7xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 max-lg:px-8 px-24 sm:px-2 sm:py-20 lg:max-w-7xl lg:px-10 max-lg:mx-1 max-lg:pb-1">
          <div className="bg-[#595E63] shadow-md hover:shadow-lg rounded-3xl p-8">
            <p className=' text-4xl  inline text-[#fff]'>Nosotros</p>
            <p className="mt-4  text-2xl max-lg:text-base 	 text-[#fff]">
             Somos un equipo de profesionales del derecho comprometidos con la defensa de tus derechos e intereses. Con amplia experiencia en diversas áreas del derecho, ofrecemos asesoría jurídica integral, personalizada y de calidad. Nuestro objetivo es brindarte soluciones integrales efectivas, acompañamiento en cada etapa del proceso con un servicio cercano, transparente y orientado a resultados. En Serviabogados CM, tu tranquilidad y satisfacción son nuestra prioridad.
                         </p>
            <dl className=" mt-16 px-4 grid gap-x-4 gap-y-10 sm:grid-cols-4 max-lg:grid-cols-1 sm:gap-y-16 max-lg:px-4">
              {features.map((feature) => (
                <div key={feature.name} className="border-gray-200 bg-[#343A40]  shadow-md hover:shadow-lg rounded-md">
                  <div className="flex flex-col justify-center self-center">
                    <img className="object-cover h-48 w-full" src={feature.image} alt="" />
                  </div>
                  <dt className="text-lg flex justify-center items-center	h-36 p-4	font-bold	 text-center text-gray-200 max-lg:text-base ">{feature.name}</dt>

                  {/* <dd className="mt-2 text-sm text-white">{feature.description}</dd> */}
                  <dd className="mt-2 text-sm text-white"></dd>
                </div>
              ))}
            </dl>

          </div>

        </div>

      </div>
    </>
  )
}