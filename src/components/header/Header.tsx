import background from '../../assets/images/illustration-working.svg';
import GetStartedButton from '../ui/GetStartedButton';
import Navigation from '../navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header className='overflow-hidden'>
      <Navigation />
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
  );
};

export default Header;
