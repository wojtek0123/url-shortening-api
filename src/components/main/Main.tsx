import Form from './Form';
import AdvancedStatistics from './AdvancedStatistics';

const Main: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center mt-44 bg-primary-gray'>
      <div className='mx-auto max-w-[1440px] w-full px-5 2xl:px-0'>
        <Form />
        <AdvancedStatistics />
      </div>
    </main>
  );
};

export default Main;
