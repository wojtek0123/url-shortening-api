import logo from './assets/images/logo.svg';
import logoWhite from './assets/images/logo-white.svg';
import background from './assets/images/illustration-working.svg';
import GetStartedButton from './components/GetStartedButton';
import React, { useState } from 'react';
import DefaultButton from './components/DefaultButton';
import brandRecognitionIcon from './assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from './assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from './assets/images/icon-fully-customizable.svg';
import bgBoostMobile from './assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from './assets/images/bg-boost-desktop.svg';

const advancedStatistics = [
  {
    id: 'brand-recognition',
    icon: brandRecognitionIcon,
    title: 'Brand recognition',
    text: `Boost your brand recognition with each click. Generic links don't mean a thing.
    Branded links help instil confidence in your content.`,
    translate: '',
  },
  {
    id: 'detailed-records',
    icon: detailedRecordsIcon,
    title: 'Detailed records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    translate: 'translate-y-10',
  },
  {
    id: 'fully-customizable',
    icon: fullyCustomizableIcon,
    title: 'Fully customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    translate: 'translate-y-20',
  },
];

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <div className='min-h-screen font-poppins mx-auto w-full'>
      <header className='overflow-hidden'>
        <nav className='flex justify-between pt-10 max-w-[1440px] mx-auto relative px-5 2xl:px-0'>
          <img src={logo} alt='Shortly' />
          <button
            type='button'
            title='hamburger menu'
            className='p-2 lg:hidden cursor-pointer z-10'
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
        <div className='w-full grid mt-14 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 max-w-[1440px] mx-auto lg:mt-24 pl-5 2xl:pl-0'>
          <div className='w-full pl-3 lg:col-start-2 lg:col-end-3  lg:row-start-1 lg:row-end-2 flex items-center justify-center'>
            <img
              src={background}
              alt=''
              className='translate-x-20 xl:translate-x-24 scale-[1.40] mb-8 sm:mb-16 mt-6 sm:pl-8xl:mt-10'
            />
          </div>
          <div className='lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 flex flex-col lg:items-start justify-center sm:mt-14 lg:mb-20'>
            <h1 className='capitalize text-4xl sm:text-5xl text-center lg:text-left font-bold mt-10 xl:text-6xl 2xl:text-7xl'>
              More than just shorter links
            </h1>
            <p className='my-6 text-neutral-grayish-violet text-center font-poppins lg:text-left lg:mr-10'>
              Build your brands recognition and get detailed insights on how your links are
              performing.
            </p>
            <div className='w-full flex justify-center items-center lg:justify-start'>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </header>
      {/*  */}
      <main className='flex flex-col justify-center items-center mt-44 bg-primary-gray'>
        <div className='mx-auto max-w-[1440px] w-full px-5 2xl:px-0'>
          <div className='relative rounded-lg  w-full overflow-hidden -translate-y-1/2'>
            <img
              src={bgBoostMobile}
              alt=''
              className='inset-0 bg-primary-dark-violet w-full max-h-[200px] lg:hidden'
            />
            <img
              src={bgBoostDesktop}
              alt=''
              className='inset-0 bg-primary-dark-violet w-full hidden max-h-[180px] lg:block'
            />
            <form
              onSubmit={onSubmit}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full  items-center justify-center lg:items-start lg:px-20 lg:pb-5 lg:pt-10 p-7'
            >
              <div className='w-full flex flex-col lg:flex-row'>
                <input
                  type='text'
                  className='rounded-md px-5 py-3 w-full lg:mr-8 md:text-lg'
                  aria-label='link'
                  placeholder='Shorten a link here...'
                />
                <small className='lg:hidden text-secondary-red mt-1'>Please add a link</small>
                <DefaultButton type='submit'>Shorten it!</DefaultButton>
              </div>
              <small className='hidden lg:flex items-start justify-start text-left text-lg mt-2 text-secondary-red'>
                Please add a link
              </small>
            </form>
          </div>

          <section className='lg:mt-20 flex flex-col items-center'>
            <h2 className='text-center font-bold capitalize text-3xl mb-5 md:text-4xl lg:text-5xl'>
              advanced statistics
            </h2>
            <p className='text-neutral-grayish-violet text-center lg:text-xl max-w-screen-md'>
              Track how your links are performing across the web with our advanced statistics
              dashboard.
            </p>

            <div className='flex flex-col items-center justify-center xl:items-center mt-20 xl:flex-row xl:justify-between relative w-full'>
              <div className='hidden xl:block w-full h-2 bg-primary-cyan absolute top-1/2 z-0'></div>
              <div className='absolute flex top-16 bottom-0 w-2 bg-primary-cyan z-0 xl:hidden'></div>
              {advancedStatistics.map((advancedStatistic) => (
                <div
                  key={advancedStatistic.id}
                  className={`flex flex-col items-center lg:items-start bg-white rounded-md px-6 pb-10 max-w-lg mt-14 xl:mt-0 xl:max-w-sm ${advancedStatistic.translate} z-10`}
                >
                  <div className='rounded-full bg-primary-dark-violet flex items-center justify-center p-5 -translate-y-1/2'>
                    <img src={advancedStatistic.icon} alt='' />
                  </div>
                  <h3 className='font-bold text-2xl mb-4'>{advancedStatistic.title}</h3>
                  <p className='text-center lg:text-left text-neutral-grayish-violet'>
                    {advancedStatistic.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className='bg-primary-dark-violet mt-36 w-full relative'>
          <img
            src={bgBoostMobile}
            alt=''
            className='relative inset-0 bg-primary-dark-violet w-full max-h-[300px] lg:hidden'
          />
          <img
            src={bgBoostDesktop}
            alt=''
            className='relative inset-0 bg-primary-dark-violet w-full hidden max-h-[300px] lg:block'
          />
          <div className='z-10 flex items-center justify-center flex-col h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-3xl text-white mb-5 md:text-4xl lg:text-5xl'>
              Boost your links today
            </h3>
            <GetStartedButton />
          </div>
        </section>
      </main>
      <footer className='w-full bg-neutral-very-dark-violet text-white pt-14 flex items-center justify-center lg:pb-14'>
        <div className='flex flex-col lg:flex-row w-full lg:items-start lg:justify-between max-w-[1440px] px-5 2xl:px-0'>
          <img src={logoWhite} alt='Shortly' className='mx-auto lg:ml-0 lg:mr-48' />
          <div className='flex flex-col items-center justify-center lg:justify-start lg:items-start lg:flex-row lg:mr-20'>
            <div className='flex flex-col justify-center items-center lg:items-start mt-14 lg:mt-0 lg:mr-10'>
              <h4 className='mb-4 text-lg'>Features</h4>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Link Shortening
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Branded Links
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Analytics
              </a>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 lg:mt-0 lg:mx-10 lg:items-start'>
              <h4 className='mb-4 text-lg'>Resources</h4>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Blog
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Developers
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Support
              </a>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 lg:mt-0 lg:ml-10 lg:items-start'>
              <h4 className='mb-4 text-lg'>Company</h4>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                About
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Our Team
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Careers
              </a>
              <a
                href='#'
                rel='noopener'
                className='text-neutral-grayish-violet my-1 hover:text-primary-cyan transition-colors duration-300'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='py-10 flex items-center justify-center lg:py-0'>
            <a href='#' title='facebook' className='mx-3 p-1'>
              <svg className='w-6 h-6 fill-white hover:fill-primary-cyan transition-colors duration-300'>
                <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' />
              </svg>
            </a>
            <a href='#' title='twitter' className='mx-3 p-1'>
              <svg className='w-6 h-5 fill-white hover:fill-primary-cyan transition-colors duration-300'>
                <path d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z' />
              </svg>
            </a>
            <a href='#' title='pinterest' className='mx-3 p-1 rounded-full'>
              <svg className='w-6 h-6 fill-white hover:fill-primary-cyan transition-colors duration-300'>
                <path d='M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' />
              </svg>
            </a>
            <a href='#' title='instagram' className='mx-3 p-1'>
              <svg className='w-6 h-6 fill-white hover:fill-primary-cyan transition-colors duration-300'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
