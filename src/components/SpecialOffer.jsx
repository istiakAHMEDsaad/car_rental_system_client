import { RiDiscountPercentFill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import Aos from "aos";
import { useEffect } from "react";


const SpecialOffer = () => {
  useEffect(() => {
      Aos.init({duration: 1500});
    }, []);

  return (
    <div data-aos="fade-up" className='my-10 px-4 lg:p-0 container mx-auto'>
      <h3 className='text-3xl font-semibold text-center text-zinc-700 mb-8'>
        Special Offers
      </h3>

      {/* container */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        {/* First Ticket */}
        <div className='card bg-base-100 shadow-sm border border-gray-300 lg:hover:scale-105 lg:transition-transform'>
          <div className='card-body'>
            <span className='badge badge-xs badge-neutral'>Hot Discount</span>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-bold'>Get special discount</h2>
              <span className='text-xl flex items-center'>
                15
                <RiDiscountPercentFill />
              </span>
            </div>
            <p>Get 15% off for weekend rentals!</p>
            <div className='mt-6'>
              <button className='btn btn-primary btn-block'>Learn More</button>
            </div>
          </div>
        </div>

        {/* Second Ticket */}
        <div className='card bg-base-100 shadow-sm border border-gray-300 lg:hover:scale-105 lg:transition-transform'>
          <div className='card-body'>
            <span className='badge badge-xs badge-neutral'>Hot Price</span>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-bold'>Hot Price Deal</h2>
              <span className='text-xl flex items-center'>
                99/
                <HiCurrencyDollar />
              </span>
            </div>
            <p>Luxury cars at $99/day this holiday season!</p>
            <div className='mt-6'>
              <button className='btn btn-primary btn-block'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

/* 
<div className='flex md:flex-row flex-col gap-2 items-center justify-center mt-4'>
        <motion.div
          className='p-10 bg-yellow-100 rounded-lg shadow-md'
          whileHover={{ scale: 1.05 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className='text-xl font-bold'>
            Get 15% off for weekend rentals!
          </h4>
          <button className='mt-2 btn btn-neutral text-white rounded'>
            Learn More
          </button>
        </motion.div>
        <motion.div
          className='p-10 bg-yellow-100 rounded-lg shadow-md'
          whileHover={{ scale: 1.05 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className='text-xl font-bold'>
            Luxury cars at $99/day this holiday season!
          </h4>
          <button className='mt-2 btn btn-neutral text-white rounded'>
            Book Now
          </button>
        </motion.div>
      </div>
*/

/* 
<ul className='mt-6 flex flex-col gap-2 text-xs'>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-success'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-success'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-success'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-success'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className='opacity-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-base-content/50'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='line-through'>Seamless cloud integration</span>
            </li>
            <li className='opacity-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-4 me-2 inline-block text-base-content/50'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='line-through'>
                Real-time collaboration tools
              </span>
            </li>
          </ul>
*/
