import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, selectCartItemsCount } from '../features/cartSlice'; 

const Header = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <nav className='flex justify-between items-center bg-[#352b2b] p-4 px-12 text-white font-semibold'>
      <h1>Redux Shopping Cart</h1>
      <div
        className='flex items-center cursor-pointer gap-2 relative'
        onClick={() => dispatch(toggleCart())} 
      >
        <TiShoppingCart size={35} />
        <span className='font-semibold right-5'>
          {itemCount}
        </span>
      </div>
    </nav>
  );
};

export default Header;
