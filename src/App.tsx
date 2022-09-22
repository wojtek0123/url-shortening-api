import logo from './assets/images/logo.svg';
import background from './assets/images/illustration-working.svg';
import GetStartedButton from './components/GetStartedButton';
import { useState } from 'react';
// import Background from './components/Background';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='px-5 min-h-screen font-poppins mx-auto w-full 2xl:px-0'>
      <header>
        <nav className='flex justify-between pt-10 2xl:px-0 max-w-[1440px] mx-auto relative'>
          <img src={logo} alt='Shortly' />
          <button
            type='button'
            title='hamburger menu'
            className='pt-1 lg:hidden'
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
            <div className='w-7 h-1 mb-[0.4rem] bg-neutral-gray'></div>
            <div className='w-7 h-1 my-[0.4rem] bg-neutral-gray'></div>
            <div className='w-7 h-1 mt-[0.4rem] bg-neutral-gray'></div>
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
            <div className='bg-primary-dark-violet absolute -bottom-6 translate-y-full w-full px-5 py-5 flex flex-col z-10 text-white rounded-xl items-center justify-center text-xl'>
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
        <div className='w-full grid mt-14 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 max-w-[1440px] mx-auto lg:mt-24'>
          <div className='w-full pl-3 lg:col-start-2 lg:col-end-3  lg:row-start-1 lg:row-end-2 flex items-center justify-center'>
            <img
              src={background}
              alt=''
              className='translate-x-20 xl:translate-x-24 scale-[1.40] mb-8 sm:mb-16 mt-6 sm:pl-8 xl:mt-10'
            />
          </div>
          <div className='lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 flex flex-col lg:items-start justify-center sm:mt-14 lg:mb-20'>
            <h1 className='capitalize text-4xl sm:text-5xl text-center lg:text-left font-bold mt-10 xl:text-6xl 2xl:text-7xl'>
              More than just shorter links
            </h1>
            <p className='my-6 text-neutral-gray text-center font-poppins lg:text-left'>
              Build your brands recognition and get detailed insights on how your links are
              performing.
            </p>
            <div className='w-full flex justify-center items-center lg:justify-start'>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </header>
      <main className='mx-auto w-full max-w-[1440px]'></main>
    </div>
  );
}

export default App;
