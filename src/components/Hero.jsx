import { useState } from 'react';
const Hero = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className='bg-gray-100 pb-12 overflow-y-hidden'
      style={{ minHeight: 700 }}
    >
      <dh-component>
        <nav className='w-full border-b'>
          <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
            <div aria-label='Home. logo' role='img'>
              <img
                className='w-[150px] md:w-[250px] mix-blend-multiply'
                src='/logo.jpg'
                alt='logo'
              />
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={`${
                  show ? 'hidden' : ''
                } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              >
                <svg
                  aria-haspopup='true'
                  aria-label='open Main Menu'
                  xmlns='http://www.w3.org/2000/svg'
                  className='md:hidden icon icon-tabler icon-tabler-menu'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  strokeLinecap='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </button>
              <div
                id='menu'
                className={` ${show ? '' : 'hidden'} md:block lg:block `}
              >
                <button
                  onClick={() => setShow(!show)}
                  className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                >
                  <svg
                    aria-label='close main menu'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='#2c3e50'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                  <li className='text-gray-700 font-medium cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui'>
                    <a href='/'>Home</a>
                  </li>
                  <li className='text-gray-700 font-medium cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui md:ml-5 lg:ml-10'>
                    <a href='/'>Products</a>
                  </li>
                  <li className='text-gray-700 font-medium cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui md:ml-5 lg:ml-10'>
                    <a href='/'>About</a>
                  </li>
                  <li className='text-gray-700 font-medium  cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui md:ml-5 lg:ml-10'>
                    <a href='/'>Quote</a>
                  </li>
                  <li className='text-gray-700 font-medium cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui md:ml-5 lg:ml-10'>
                    <a href='/'>Resources</a>
                  </li>
                  <li className='text-gray-700 font-medium cursor-pointer text-base lg:text-lg pt-10 md:pt-0 hover:text-ui md:ml-5 lg:ml-10'>
                    <a href='/'>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href='tel:+918178540300'
              className='focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm'
            >
              +91-8178540300
              <span className='inline-block	px-4 align-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </span>
            </a>
          </div>
        </nav>
        <div className='bg-gray-100'>
          <div className='container mx-auto flex flex-col items-center py-12 sm:py-24'>
            <div className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10'>
                Get Insurance Policy and
                <br />
                <span className='text-indigo-700'> Save 20% </span>!
              </h1>
              <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                rerum harum deserunt placeat, consequuntur impedit et velit fuga
                iste eos ad ducimus similique fugiat eveniet, dolorum dolores
                perferendis maiores repellat.
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <a
                href='#'
                className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm'
              >
                Get a Quote
              </a>
              <a
                href='tel:+918178540300'
                className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm'
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
};

export default Hero;
