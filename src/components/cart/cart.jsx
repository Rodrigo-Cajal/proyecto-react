import React, { useState } from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemsProducts from '../cart/cartItemsProducts';
import { formatPrice } from '../../screens/products/formatPrice';
import { clearCart } from '../../redux/cart/cartSlice';

const Cart = ({ isOpen, toggleCart = [] }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)


  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleFinalizePurchase = () => {
    setIsModalOpen(false);
    setShowThankYou(true);
    dispatch(clearCart());


    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <>
      <button
        onClick={toggleCart}
        className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <> <div className='flex flex-row'><ShoppingCart className="h-6 w-6" /> 
        <span className='bg-sky-300 px-2 h-4 w-4 flex justify-center items-center rounded-[100%] text-[10px] text-black'>{totalCartItems}</span></div></>
        }
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            style={{ top: '5rem' }}
            onClick={toggleCart}
          ></div>
          <div className="fixed right-0 top-20 bottom-0 w-1/2 xl:w-[30%] bg-white z-50 overflow-auto border-t-[0.5px] border-gray-200">
            <div className="flex flex-col h-full">
              <div className="p-4 flex flex-row justify-between">
                <h2 className="text-lg font-semibold">Productos en el Carrito</h2>

                {cartItems.length ? (
                  <Trash2 className='bg-red-600 text-white p-1 rounded-sm hover:cursor-pointer' onClick={() => dispatch(clearCart())}
                  disabled={!cartItems.length}/>
                ) : (
                  ''
                )}

              </div>

              {cartItems.length ? (
                cartItems.map((item) => {
                  return (
                    <CartItemsProducts
                      className="flex-grow overflow-auto p-4 "
                      {...item}
                      key={item.id}
                    />
                  );
                })
              ) : (
                <p className='h-full flex justify-center items-center text-center'>El Carrito está vacío!</p>
              )}

              <div className="p-4 border-t">
                {
                  cartItems.length ? (
<div className="flex flex-row justify-between items-center px-4 py-8">
                  <div>Total:</div>
                  <div className="font-semibold">{formatPrice(totalPrice)}</div>
                </div>
                  ) : ('')
                }
                
                <button
                  onClick={toggleCart}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2"
                >
                  Seguir comprando
                </button>

                {cartItems.length ? (
                  <button
                    onClick={handleModalOpen}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2"
                  >
                    Finalizar compra
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">¿Desea finalizar la compra?</h2>
            <div className="flex justify-center space-x-4">
            <button
                onClick={handleFinalizePurchase}
                className="px-4 py-2 bg-sky-500 text-black rounded hover:bg-sky-600"
              >
                Aceptar
              </button>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className=" rounded-lg p-6 w-80 shadow-lg text-center bg-green-500 text-white z-50">
          Muchas gracias por confiar en nosotros y realizar su compra. Esperamos disfrute su
          producto. ¡Saludos, Atlas Basketball Shoes!
        </div>
        </div>
      )}
    </>
  );
};

export default Cart;
