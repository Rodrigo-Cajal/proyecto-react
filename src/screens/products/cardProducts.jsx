import React from 'react';
import { formatPrice } from './formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProducts = ({ id, name, price, image }) => {
  const dispatch = useDispatch()

  return (
    <div className='bg-black text-white flex flex-col justify-center items-center m-2 px-4 py-8 rounded-lg'>
      <img src={image} alt={name} className='h-auto w-[200px] rounded-md' />
      <div className='text-center pt-8'>

        <div className='font-semibold'>
          <h3>{name}</h3>
        </div>

        <div>
          <span>{formatPrice(price)}</span>
        </div>

        <div>
          <button
            
            className='font-semibold bg-sky-300 rounded-md px-2 py-1 text-black'
          onClick={() => dispatch(addToCart({ id, name, price, image }))}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
