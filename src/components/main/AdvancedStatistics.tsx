import brandRecognitionIcon from '../../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/images/icon-fully-customizable.svg';

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

const AdvancedStatistics: React.FC = () => {
  return (
    <section className='lg:mt-20 flex flex-col items-center'>
      <h2 className='text-center font-bold capitalize text-3xl mb-5 md:text-4xl lg:text-5xl'>
        advanced statistics
      </h2>
      <p className='text-neutral-grayish-violet text-center lg:text-xl max-w-screen-md'>
        Track how your links are performing across the web with our advanced statistics dashboard.
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
  );
};

export default AdvancedStatistics;
