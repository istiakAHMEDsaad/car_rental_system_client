import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <div className='my-10 px-4 lg:p-0 container mx-auto'>
      <h3 className='text-3xl font-semibold text-center text-zinc-700'>
        Special Offers
      </h3>
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
    </div>
  );
};

export default SpecialOffer;
