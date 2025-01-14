import React from "react";
import { formatPrice } from "../../screens/products/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";


const CartItemsProducts = ({ name, price, image, quantity, id }) => {
const dispatch = useDispatch();



  return (
   <div className="grid grid-cols-3 items-center gap-4 mx-2 my-2 p-2 rounded-md bg-sky-300">
  <div className="flex justify-center">
    <img src={image} alt={name} className="w-auto h-auto" />
  </div>
  <div className="text-center">
    <h4 className="text-sm">{name}</h4>
    <p className="font-semibold text-sm">{formatPrice(price)}</p>
  </div>
  <div className="flex justify-center gap-2">
    <button className="bg-sky-200 px-2 rounded-full font-semibold text-sm" onClick={() => dispatch(removeFromCart(id))}>-</button>
    <p className="text-sm">{quantity}</p>
    <button className="bg-sky-200 px-2 rounded-full font-semibold text-sm" onClick={() => dispatch(addToCart({ name, price, image, quantity, id }))}>+</button>
  </div>
</div>

  );
};

export default CartItemsProducts;
