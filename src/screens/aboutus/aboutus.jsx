import React from 'react'

export const Aboutus = () => {
  return (
    <div>  
    <section className='flex flex-col h-[600px] justify-center items-center text-white xl:h-[840px]  bg-[url(https://res.cloudinary.com/dkifusffi/image/upload/v1700232048/landing-react/cakd5gebkwdqbc1dx9rm.jpg)]'>
        <h2 className='font-extrabold text-2xl w-[400px] pb-10 text-center lg:text-4xl lg:w-[100%] xl:text-6xl'>Sobre nosotros</h2>
        <p className='w-[300px] text-center text-sm lg:w-[80%] xl:text-xl xl:pt-4'>En Atlas Basketball Shoes, combinamos estilo, rendimiento y pasión por el baloncesto. Ofrecemos una selección de zapatillas de alta calidad diseñadas para elevar tu juego y adaptarse a tu estilo. Nuestro equipo de especialistas está listo para ayudarte con consejos personalizados, asegurando que encuentres el calzado ideal. Comprometidos con la excelencia, nuestro objetivo es brindarte una experiencia inigualable como amante del baloncesto.</p>
    </section>
    
      <div className='py-10 lg:mb-28 px-6 sm:mb-28'>
    
    <div className='lg:flex lg:flex-row sm:grid sm:grid-cols-2 sm:gap-y-20'>
        <div className='px-5 py-10 lg:px-4 lg:py-2'><h5 className='text-center font-semibold text-lg py-4'>Selección de alta calidad</h5>
            <p className='text-justify'>Nuestros productos están cuidadosamente seleccionados para ofrecerte productos de alta calidad que se ajusten a tus necesidades de juego y estilo.</p>
        <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/zfkfi6bmpcsob0wsp6vq.png" alt="alta-calidad" className='object-cover w-[100%] h-[100%] pt-20 '/>
            
        </div>
        <div className='px-5 py-10 lg:px-4 lg:py-2'><h5 className='text-center font-semibold text-lg py-4'>Experiencia especializada</h5>
            <p className='text-justify'>Cualquier detalle que necesites acorde a tus características, nuestros especialistas están aquí para ayudarte a tomar decisiones informadas.</p>
        <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/v39yuyedh16auytpvcwz.jpg" alt="experiencia" className='object-cover w-[100%] h-[100%] pt-20'/>
            
        </div>
        <div className='px-5 py-10 lg:px-4 lg:py-2'><h5 className='text-center font-semibold text-lg py-4'>Compromiso con el Cliente</h5>
            <p className='text-justify'>Estamos comprometidos a brindarte un servicio de alta calidad que refleje nuestro compromiso con los clientes apasionados por el baloncesto.</p>
            <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/q2f960shs7xpbkfpwqao.jpg" alt="compromiso" className='object-cover w-[100%] h-[100%] pt-20'/>
            
            </div>
        </div>
        
    </div>
    </div>
  )
}
