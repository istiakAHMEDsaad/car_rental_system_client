import { FaCar, FaDollarSign, FaRegClock, FaHeadset } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className='my-10 container mx-auto'>
      <h3 className='text-3xl font-semibold text-center mb-6'>
        Why Choose Us?
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
        <div className='p-4'>
          <FaCar className='text-4xl text-yellow-600 mx-auto mb-2' />
          <h4 className='text-xl font-semibold'>Wide Variety of Cars</h4>
          <p>From budget-friendly options to luxury vehicles.</p>
        </div>
        <div className='p-4'>
          <FaDollarSign className='text-4xl text-yellow-600 mx-auto mb-2' />
          <h4 className='text-xl font-semibold'>Affordable Prices</h4>
          <p>Competitive daily rates you can count on.</p>
        </div>
        <div className='p-4'>
          <FaRegClock className='text-4xl text-yellow-600 mx-auto mb-2' />
          <h4 className='text-xl font-semibold'>Easy Booking Process</h4>
          <p>Seamlessly book your ride in just a few clicks.</p>
        </div>
        <div className='p-4'>
          <FaHeadset className='text-4xl text-yellow-600 mx-auto mb-2' />
          <h4 className='text-xl font-semibold'>Customer Support</h4>
          <p>24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
