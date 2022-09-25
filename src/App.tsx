import logo from './assets/images/logo.svg';
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
    </div>
  );
}
