import React from 'react'

export const AboutusHome = () => {
  return (
    <div>
    <div className='py-10 lg:mb-28 px-6 sm:mb-28'>
        
        <h2 className='text-3xl font-bold text-center py-14'>Sobre nosotros</h2>
        <div className='lg:flex lg:flex-row sm:grid sm:grid-cols-2 sm:gap-y-20'>
            <div className='px-5 py-10 lg:px-4 lg:py-2'>
            <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/zfkfi6bmpcsob0wsp6vq.png" alt="alta-calidad" className='object-cover w-[100%] h-[100%] '/>
                <h5 className='text-center font-semibold text-lg py-4'>Selección de alta calidad</h5>
                <p className='text-justify'>Nuestros productos están cuidadosamente seleccionados para ofrecerte productos de alta calidad que se ajusten a tus necesidades de juego y estilo.</p>
            </div>
            <div className='px-5 py-10 lg:px-4 lg:py-2'>
            <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/v39yuyedh16auytpvcwz.jpg" alt="experiencia" className='object-cover w-[100%] h-[100%]'/>
                <h5 className='text-center font-semibold text-lg py-4'>Experiencia especializada</h5>
                <p className='text-justify'>Cualquier detalle que necesites acorde a tus características, nuestros especialistas están aquí para ayudarte a tomar decisiones informadas.</p>
            </div>
            <div className='px-5 py-10 lg:px-4 lg:py-2'>
                <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/q2f960shs7xpbkfpwqao.jpg" alt="compromiso" className='object-cover w-[100%] h-[100%]'/>
                <h5 className='text-center font-semibold text-lg py-4'>Compromiso con el Cliente</h5>
                <p className='text-justify'>Estamos comprometidos a brindarte un servicio de alta calidad que refleje nuestro compromiso con los clientes apasionados por el baloncesto.</p>
                </div>
            </div>
            
        </div>
        <a href='/nosotros' className='bg-sky-300 text-black py-2 px-4 mx-[43%] my-10 flex justify-center items-center text-center rounded-md'>Saber más</a>
        </div>
  )
}
