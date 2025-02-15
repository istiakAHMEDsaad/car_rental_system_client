import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

// icons
import { IoLogoModelS } from 'react-icons/io';
import {
  FaHouse,
  FaCalendarDays,
  FaDollarSign,
  FaBookmark,
} from 'react-icons/fa6';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const CarsCard = ({ car }) => {
  const { image, model, price, available, book_count, post_date, _id } = car || {};
  return (
    <div className='card bg-base-100 shadow-md my-10 p-3 border border-gray-300 gap-y-2 justify-between'>
      <figure>
        <img
          className='lg:w-[28rem] md:w-full w-80 h-64 object-cover rounded-md'
          src={image}
          alt='car image'
        />
      </figure>

      <div className=''>
        {/* Model */}
        <h2 className='card-title'>
          <span>
            <IoLogoModelS />
          </span>{' '}
          <span>{model}</span>
        </h2>

        {/* Price */}
        <p className='flex items-center gap-2 text-base text-gray-600 italic'>
          <span>
            <FaDollarSign />
          </span>
          <span>Price:</span>
          <span>{price}</span>
        </p>

        {/* Available */}
        <p className='flex items-center gap-2 text-base text-gray-600 italic'>
          <span>
            <FaHouse />
          </span>
          <span>Available:</span>
          {available === 'yes' ? (
            <span className='px-2 rounded-full bg-green-200/60'>
              <FcCheckmark size={20} />
            </span>
          ) : (
            <span className='px-2 rounded-full bg-red-200/60'>
              <FcCancel size={20} />
            </span>
          )}
        </p>

        {/* Total Booking */}
        <p className='flex items-center gap-2 text-base text-gray-600 italic'>
          <span>
            <FaBookmark />
          </span>
          <span>Totally book:</span>
          <span>{book_count}</span>
        </p>

        {/* Post Date */}
        <p className='flex items-center gap-2 text-base text-gray-600 italic'>
          <span>
            <FaCalendarDays />
          </span>
          <span>Post:</span>
          <span>
            {formatDistanceToNow(new Date(post_date), { addSuffix: true })}
          </span>
        </p>

        {/* Book Now */}
        <div className='mt-2 flex items-center justify-between'>
          <div className=''>
            <img
              className='w-16 h-16 object-cover rounded-full'
              src={car?.author?.author_photo}
              alt='avatar'
            />
            <p className='text-[10px] md:text-sm'>
              Author: {car?.author?.author_name}
            </p>
          </div>
          <div>
            <Link to={`/available-car/${_id}`} className='btn btn-primary'>Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CarsCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarsCard;
