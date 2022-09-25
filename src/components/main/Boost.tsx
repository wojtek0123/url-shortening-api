import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';
import GetStartedButton from '../ui/GetStartedButton';

const Boost: React.FC = () => {
  return (
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
  );
};

export default Boost;
