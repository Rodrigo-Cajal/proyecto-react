import React from "react";
import Formulario from "../../components/formik/formulario";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";


export const Contact = () => {
  return (
    
    <div className=" mt-28 lg:py-14    lg:px-14">
      <h2 className='text-3xl font-bold text-center lg:pb-14'>Contacto</h2>
      <div className="lg:flex lg:gap-10 lg:justify-center lg:items-start">
      <div className=" lg:w-[50%] flex flex-col justify-between h-[600px] pb-10">
  <h4 className="text-xl text-center p-6">
    ¿Tienes preguntas sobre nuestros productos o el proceso de compra?
  </h4>
  <p className="text-justify p-8">
    ¡No dudes en utilizar nuestro formulario de contacto! Estamos aquí
    para ayudarte en cada paso del camino. Nuestro equipo se compromete a
    atender tus consultas con prontitud y brindarte toda la información
    que necesitas. ¡Tu satisfacción es nuestra prioridad! Completa el
    formulario y te contactaremos en breve para resolver todas tus
    inquietudes.
  </p>
  <div className="flex justify-center items-center">
    <FaInstagram className="w-[30px] h-[30px]" />
    <TbBrandLinkedin  className="w-[30px] h-[30px]" />
    <FaGithub className="w-[30px] h-[30px]" />
  </div>
</div>

      <div className="bg-sky-300 rounded-md m-8 p-10 lg:w-[50%] xl:ml-40">
        <Formulario />
      </div>
      </div>
    </div>
  );
};
