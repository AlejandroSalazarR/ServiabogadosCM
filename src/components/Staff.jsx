import image_01 from '../assets/detenidos.jpg'
import image_02 from '../assets/asesor.jpg'
import image_03 from '../assets/ejecucion.jpg'



const features = [
  { name: 'Asesorias jurídicas', description: 'Made from natural materials. Grain and color vary with each item.', image: image_03 },
  { name: 'Derechos de peticion y Acciones de tutela', description: 'Made from natural materials. Grain and color vary with each item.', image: image_02 },
  { name: 'Afiliaciones a seguridad social', description: 'Made from natural materials. Grain and color vary with each item.', image: image_01 },
]

export default function Example() {
  return (
    <>

      <div className="bg-[#1F1F1F]  flex justify-center  text-black max-lg:pb-20 ">
        <div className="  mx-20  grid max-w-7xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 max-lg:px-8 px-24 sm:px-2 sm:py-20 lg:max-w-7xl lg:px-10 max-lg:mx-1 max-lg:pb-1">
          <div className="bg-[#595E63] shadow-md hover:shadow-lg rounded-3xl p-8">
            <p className=' text-4xl  inline text-[#fff]'>Nosotros</p>
            <p className="mt-4  text-2xl max-lg:text-base 	 text-[#fff]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad quas impedit magnam. Quia tempora debitis culpa tenetur necessitatibus voluptate? Corporis, consequuntur illum rem ducimus facere voluptatem repudiandae quam odio!
                         </p>
            <dl className=" mt-16 px-28 grid gap-x-6 gap-y-10 sm:grid-cols-3 max-lg:grid-cols-1 sm:gap-y-16 lg:gap-x-8 max-lg:px-4">
              {features.map((feature) => (
                <div key={feature.name} className="border-gray-200 bg-[#343A40]  shadow-md hover:shadow-lg rounded-md">
                  <div className="flex flex-col justify-center self-center">
                    <img className="object-cover		 h-48 w-96" src={feature.image} alt="" />
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