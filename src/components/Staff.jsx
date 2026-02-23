import image_01 from '../assets/civil.png'
import image_02 from '../assets/asesor.jpg'
import image_03 from '../assets/ejecucion.jpg'
import PhotoLawyer from '../assets/photo12.png'



const features = [
  { name: 'Asesoría administrativa', description: 'Made from natural materials. Grain and color vary with each item.', image: PhotoLawyer },
  { name: 'Asesorias jurídicas', description: 'Made from natural materials. Grain and color vary with each item.', image: image_03 },
  { name: 'Derechos de peticion y Acciones de tutela', description: 'Made from natural materials. Grain and color vary with each item.', image: image_02 },
  { name: 'Asesoria civil', description: 'Made from natural materials. Grain and color vary with each item.', image: image_01 },
]

export default function Example() {
  return (
    <>

      <div name='quienes-somos' className="bg-[#1F1F1F]  flex justify-center  text-black max-lg:pb-20 ">
        <div className="  mx-20  grid max-w-7xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 max-lg:px-8 px-24 sm:px-2 sm:py-20 lg:max-w-7xl lg:px-10 max-lg:mx-1 max-lg:pb-1">
          <div className="bg-[#595E63] shadow-md hover:shadow-lg rounded-3xl p-8">
            
            {/* QUIÉNES SOMOS */}
            <div className="text-center mb-8">
              <p className='text-4xl font-serif font-bold tracking-wider text-[#fff] mb-2'>QUIÉNES SOMOS</p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <p className="mt-4 text-2xl max-lg:text-base text-[#fff]">
              SERVIABOGADOS CM. Está comprometido en brindar una asesoría con ética profesional, compromiso y responsabilidad, se cuenta con una amplia experiencia en todas las ramas del derecho, brindando asesoría integral y soluciones personalizadas para cada cliente. Nuestro compromiso es brindar soluciones integrales y efectivas, brindando acompañamiento en cada etapa del proceso garantizando la mejor defensa y el acompañamiento legal.
            </p>

            {/* MISIÓN */}
            <div className="text-center mt-12 mb-8">
              <p className='text-4xl font-serif font-bold tracking-wider text-[#fff] mb-2'>MISIÓN</p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <p className="mt-4 text-2xl max-lg:text-base text-[#fff]">
              SERVIABOGADOS CM. Ofrece asesoría legal integral y de alta calidad, orientada a proteger los derechos e intereses de nuestros clientes. Nos comprometemos a brindar soluciones jurídicas eficaces, basadas en la ética, la transparencia y la innovación.
            </p>

            {/* VISIÓN */}
            <div className="text-center mt-12 mb-8">
              <p className='text-4xl font-serif font-bold tracking-wider text-[#fff] mb-2'>VISIÓN</p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <p className="mt-4 text-2xl max-lg:text-base text-[#fff]">
              SERVIABOGADOS CM. Tiene como propósito consolidarse como un referente de excelencia en el ámbito legal, destacando la innovación, compromiso con la justicia y la satisfacción de nuestros clientes. Aspiramos a expandir nuestros servicios a nivel nacional e internacional, manteniendo siempre los más altos estándares de ética y profesionalismo.
            </p>

            {/* VALORES CORPORATIVOS */}
            <div className="text-center mt-12 mb-8">
              <p className='text-4xl font-serif font-bold tracking-wider text-[#fff] mb-2'>VALORES CORPORATIVOS</p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <div className="mt-4 text-2xl max-lg:text-base text-[#fff] space-y-4">
              <p><strong>1. Ética:</strong> Actuamos con integridad y transparencia en todas nuestras acciones.</p>
              <p><strong>2. Compromiso:</strong> Nos dedicamos plenamente a la defensa y protección de los intereses de nuestros clientes.</p>
              <p><strong>3. Excelencia:</strong> Buscamos la calidad y la mejora continua en todos nuestros servicios.</p>
              <p><strong>4. Responsabilidad:</strong> Asumimos con seriedad y profesionalismo nuestras obligaciones legales y sociales.</p>
              <p><strong>5. Innovación:</strong> Incorporamos soluciones creativas y tecnológicas para adaptarnos a las necesidades cambiantes.</p>
              <p><strong>6. Colaboración:</strong> Fomentamos el trabajo en equipo y la comunicación efectiva tanto internamente como con nuestros clientes.</p>
            </div>

            {/* Servicios - mantiene las tarjetas originales */}
            <div className="text-center mt-16 mb-8">
              <p className='text-4xl font-serif font-bold tracking-wider text-[#fff] mb-2'>SERVICIOS</p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <dl className="mt-8 px-4 grid gap-x-4 gap-y-10 sm:grid-cols-4 max-lg:grid-cols-1 sm:gap-y-16 max-lg:px-4">
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