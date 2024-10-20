import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import CartItem from '../components/CartItem';
import { selectIsCartOpen, toggleCart } from '../features/cartSlice'; // Ensure path is correct

const Home = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch(toggleCart());
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, dispatch]);

  return (
    <div className='relative pt-16'> 
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
        <div ref={cartRef} className='absolute top-0 right-0 z-10 w-full sm:w-1/3'>
          <CartItem />
        </div>
      )}
    </div>
  );
};

export default Home;
