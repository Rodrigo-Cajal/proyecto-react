import React from 'react'
import {ProductsHome} from '../products/productHome'
import { Contact } from '../contact/contact'
import { AboutusHome } from '../aboutus/aboutusHome'
import ModalConfirmation from '../../components/modalConfirmation/modalConfirmation'

export const Home = () => {
  return (
    <div>
        <section className='flex flex-col h-[600px] justify-center items-center text-white xl:h-[920px]  bg-[url(https://res.cloudinary.com/dkifusffi/image/upload/v1700232048/landing-react/cakd5gebkwdqbc1dx9rm.jpg)]'>
            <h2 className='font-extrabold text-2xl w-[400px] pb-10 text-center lg:text-4xl lg:w-[100%] xl:text-6xl'>Atlas, tu mejor opción</h2>
            <h5 className='font-semibold text-lg pb-4 text-center w-[300px] lg:text-2xl lg:w-[100%] xl:text-2xl'>¡Eleva tu juego con estilo y rendimiento!</h5>
            <p className='w-[300px] text-center text-sm lg:w-[80%] xl:text-xl xl:pt-4'>Descubre la selección imparable de zapatillas de baloncesto en Atlas Basketball Shoes, donde la excelencia en calzado se encuentra con tu pasión por el basket.</p>
        </section>
        <ModalConfirmation/>
        <section >
            <AboutusHome/>
        </section>
        <section>
            
            <ProductsHome/>
            <div>
            </div>
        </section>
        <section>
            <Contact/>
        </section>
    </div>
  )
}
