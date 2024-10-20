import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import CartItem from '../components/CartItem';
import { selectIsCartOpen } from '../features/cartSlice'; // Ensure path is correct

const Home = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <div className='relative'>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-grow'>
          <div className='hidden sm:flex flex-col mt-2 text-white justify-center items-center bg-[#352b2b] h-64'>
            <h1 className='text-4xl'>Lorem ipsum dolor sit amet.</h1>
            <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi, molestiae odit aut quos repudiandae nemo itaque</p>
          </div>
          <Card />
        </div>
      </div>
      {isCartOpen && (
        <div className='absolute top-0 right-0 z-10 w-full sm:w-1/3'>
          <CartItem />
        </div>
      )}
    </div>
  );
};

export default Home;
