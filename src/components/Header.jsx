import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../features/cartSlice'; 

const Header = () => {
  const itemCount = useSelector(selectCartItemsCount);
    useSelector((item)=> console.log(item))
  return (
    <nav className='flex justify-between items-center bg-[#352b2b] p-4 px-16 text-white font-semibold'>
      <h1>Redux Shopping Cart</h1>
      <div className='flex items-center cursor-pointer gap-2'>
        <TiShoppingCart size={35} />
        <span className=''>
          {itemCount}
        </span>
      </div>
    </nav>
  );
};

export default Header;
