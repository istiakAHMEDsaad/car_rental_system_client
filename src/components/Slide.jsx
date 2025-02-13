import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full h-[36rem] bg-cover bg-center rounded-md'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70 rounded-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          {/* w-full px-5 py-4 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 */}
          <Link to='/available-car' className='btn btn-warning'>
            Rent Car Now
          </Link>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Slide;
