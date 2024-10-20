import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, incrementQuantity, decrementQuantity, removeFromCart } from '../features/cartSlice'; // Ensure path is correct

const CartItem = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='flex flex-col bg-white mt-2'>
      <header className='bg-[#c12e2e] p-4 px-16 text-white font-semibold'>
        <span>Cart ({cartItems.length})</span>
      </header>
      {cartItems.map((item) => (
        <div key={item.id} className='mt-8 flex items-center gap-10'>
          <img className='w-28' src={item.image} alt={item.title} />
          <p className='flex flex-col gap-2 justify-center items-center'>
            <span>{item.title}</span>
            <span>${item.price}</span>
          </p>
          <div className='flex flex-col justify-center items-center'>
            <FaPlus onClick={() => dispatch(incrementQuantity(item))} className='cursor-pointer' />
            <span>{item.quantity}</span>
            <AiOutlineMinus onClick={() => dispatch(decrementQuantity(item))} className='cursor-pointer' />
          </div>
          <button onClick={() => dispatch(removeFromCart(item))} className='bg-red-500 py-2 px-4 text-white rounded-md cursor-pointer'>
            Remove
          </button>
        </div>
      ))}
      <hr />
      <footer className='flex justify-between items-center bg-[#352b2b] text-white p-4 mt-auto'>
        <p className='text-xl font-semibold'>
          Total: ${totalPrice.toFixed(2)}
        </p>
        <button className='mt-2 px-4 py-2 cursor-pointer border-2 rounded-sm'>
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default CartItem;
