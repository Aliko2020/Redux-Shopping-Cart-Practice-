import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useSelector } from 'react-redux';

const Card = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('https://fakestoreapiserver.reactbd.com/tech');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  // Helper function to truncate text
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      name: product.title,
      image: product.image,
      price: product.price,
    }));
  };

  return (
    <div className='flex justify-center flex-wrap gap-4'>
      {products.map((product) => (
        <div key={product._id} className='relative p-4 rounded-lg sm:max-w-xs'>
          {product.isNew && (
            <span className='absolute top-5 right-2 bg-red-500 text-white p-2 text-xs'>
              New
            </span>
          )}
          <img src={product.image} alt={product.title} className='' />
          <h2 className='text-md font-semibold text-[#352b2b]'>{product.brand} - {product.title}</h2>
          <p className='flex items-center gap-2'>
            <span className='text-[#878585] text-lg'>${product.price}</span>
            <span className='text-[#c3c0c0] line-through'>${product.oldPrice}</span>
          </p>
          <p className=''>{truncateText(product.description, 120)}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className='mt-2 bg-[#352b2b] px-4 py-2 hover:bg-[#817a7a] cursor-pointer text-white border-2 rounded-sm'
          >
            BUY NOW
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Card;
