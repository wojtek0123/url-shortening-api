import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='flex justify-between pt-10 max-w-[1440px] mx-auto relative px-5 2xl:px-0'>
      <img src={logo} alt='Shortly' />
      <button
        type='button'
        title='hamburger menu'
        className='p-2 lg:hidden cursor-pointer z-10'
        onClick={() => setShowMenu((prevState) => !prevState)}
      >
        <p className='w-7 h-1 mb-[0.4rem] bg-neutral-gray'></p>
        <p className='w-7 h-1 my-[0.4rem] bg-neutral-gray'></p>
        <p className='w-7 h-1 mt-[0.4rem] bg-neutral-gray'></p>
      </button>
      <div className='hidden lg:flex items-center justify-between w-full ml-8 text-neutral-gray'>
        <div>
          <a
            className='px-2 py-1 mx-2 hover:text-primary-dark-violet transition-colors duration-300'
            href='#'
          >
            Features
          </a>
          <a
            className='px-2 py-1 mx-2 hover:text-primary-dark-violet transition-colors duration-300'
            href='#'
          >
            Pricing
          </a>
          <a
            className='px-2 py-1 mx-2 hover:text-primary-dark-violet transition-colors duration-300'
            href='#'
          >
            Resources
          </a>
        </div>
        <div>
          <a className='px-2 py-1 mr-6 hover:text-primary-dark-violet transition-colors duration-300 cursor-pointer'>
            Login
          </a>
          <a className='rounded-3xl px-5 py-2 bg-primary-cyan text-white cursor-pointer hover:opacity-60 transition-opacity'>
            Sign up
          </a>
        </div>
      </div>
      {showMenu && (
        <div className='bg-primary-dark-violet absolute -bottom-6 left-5 right-5 translate-y-full px-5 py-5 flex flex-col z-10 text-white rounded-xl items-center justify-center text-xl lg:hidden'>
          <a className='my-3 p-1 cursor-pointer'>Features</a>
          <a className='my-3 p-1 cursor-pointer'>Pricing</a>
          <a className='my-3 p-1 cursor-pointer'>Resources</a>
          <div className='w-full h-[1px] bg-neutral-grayish-violet my-4'></div>
          <a className='my-3 p-1 cursor-pointer'>Login</a>
          <a className='w-full bg-primary-cyan py-3 rounded-3xl cursor-pointer text-center mt-3 mb-5 capitalize'>
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
