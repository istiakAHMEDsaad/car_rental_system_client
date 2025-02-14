import PropTypes from 'prop-types';
import { format } from 'date-fns';

// icons
import { IoLogoModelS } from 'react-icons/io';
import { FaGear, FaCalendarDays } from 'react-icons/fa6';
import { CiPaperplane } from 'react-icons/ci';

const CarsCard = ({ car }) => {
  const { model, image, features, post_date, description } = car || {};
  return (
    <div className='card bg-base-100 shadow-md my-10 p-3 border border-gray-300 gap-y-2 justify-between'>
      <figure>
        <img
          className='lg:w-[28rem] md:w-full w-80 h-full object-cover rounded-md'
          src={image}
          alt='car image'
        />
      </figure>

      <div className=''>
        {/* Title */}
        <h2 className='card-title'>
          <span>
            <IoLogoModelS />
          </span>{' '}
          <span>{model}</span>
        </h2>

        {/* Features */}
        <p className='flex items-center gap-3 text-base text-gray-600'>
          <span>
            <FaGear />
          </span>{' '}
          <span>{features}</span>
        </p>

        {/* Post Date */}
        <p className='flex items-center gap-3 text-base text-gray-600'>
          <span>
            <FaCalendarDays />
          </span>{' '}
          <span>{format(new Date(post_date), 'P')}</span>
        </p>

        {/* Description */}
        <p className='flex items-center gap-3 text-base text-gray-600'>
          <span>
            <CiPaperplane />
          </span>{' '}
          <span>{description}</span>
        </p>

        <div className='mt-2 flex items-center justify-between'>
          <div className=''>
            <img
              className='w-16 h-16 object-cover rounded-full'
              src={car?.author?.author_photo}
              alt='avatar'
            />
            <p className='text-[10px] md:text-sm'>Author: {car?.author?.author_name}</p>
          </div>
          <div>
          <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>

        {/* <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

CarsCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarsCard;
