import React from 'react';
import Button from './Button';
const logo = require('../Assets/logo.png');

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white drop-shadow-md flex flex-wrap sm:flex-row gap-5 items-center justify-between'>
      <img
        src={logo}
        alt='logo'
        className='w-[70px] drop-shadow-md cursor-pointer'
      />
      <div className='flex'>
        <Button text='Add New ListBoard' secondary />
      </div>
    </div>
  );
};

export default Header;
