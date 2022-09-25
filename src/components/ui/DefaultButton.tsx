interface Props {
  children: string;
  type: 'button' | 'submit';
}

export default function DefaultButton({ children, type }: Props) {
  return (
    <button
      type={type}
      className='capitalize bg-primary-cyan hover:opacity-80 transition-opacity duration-300 rounded-md text-white py-3 px-8 text-lg mt-4 lg:py-5 lg:px-14  lg:mt-0 lg:text-xl min-w-max tracking-wide'
    >
      {children}
    </button>
  );
}
