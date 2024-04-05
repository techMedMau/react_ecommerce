import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import Logo from '../img/logo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(true);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true):setIsActive(false);
        });
    });
    return (
        <header className={`${isActive? 'bg-yellow-200 py-4 shadow-md':'bg-yellow-200 py-4'} fixed w-full z-10 trasition-all`}>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div>
                    <img className='w-[40px]' src={Logo} alt="" />
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
                </div>
            </div>


        </header>
    );
};

export default Header;