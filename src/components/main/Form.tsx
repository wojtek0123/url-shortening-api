import DefaultButton from '../ui/DefaultButton';
import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';

const Form: React.FC = () => {
  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
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
  );
};

export default Form;
