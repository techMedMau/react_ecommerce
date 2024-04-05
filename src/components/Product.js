import React, { useContext } from 'react';
import { BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const { id, images, category, title, price } = product;
    return (
        <div className='shadow-lg rounded hover:scale-105 transition duration-300 p-2 group'>
            <div className='h-[200px] mb-4 relative overflow-hidden transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] rounded' src={images[0]} alt='' />
                    </div>
                </div>

                <div className='absolute top-0 -right-11 group-hover:right-0 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button onClick={() => addToCart(product, id)}>
                        <div className='flex justify-center items-center text-white w-10 h-10 rounded bg-orange-400'>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
            <h2 className='font-semibold mb-1'>{title}</h2>
            <div className='font-semibold'>${price}</div>
        </div>
    );
};

export default Product;