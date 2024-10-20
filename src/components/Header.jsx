import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, selectCartItemsCount } from '../features/cartSlice'; 

const Header = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <nav className='fixed top-0 left-0 w-full z-20 flex justify-between px-8 items-center bg-[#352b2b] p-4 text-white font-semibold'>
      <h1>Redux Shopping Cart</h1>
      <div
        className='flex items-center cursor-pointer gap-2 relative'
        onClick={() => dispatch(toggleCart())} 
      >
        <TiShoppingCart size={35} />
        <span className='absolute top-0 font-semibold right-0 transform -translate-y-1/2 translate-x-1/2'>
          {itemCount}
        </span>
      </div>
    </nav>
  );
};

export default Header;
