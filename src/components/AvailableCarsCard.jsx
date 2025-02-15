import PropTypes from 'prop-types';

const AvailableCarsCard = ({ car, toggle }) => {
  const { model } = car || {};
  return (
    // card bg-base-100 w-80 shadow-sm
    <div
      className={`${
        toggle === true
          ? 'card bg-base-100 w-80 shadow-sm'
          : 'md:flex md:h-64 mb-4 border border-gray-200 rounded-md shadow-md items-center justify-center md:pl-2'
      }`}
    >
      <figure>
        <img
          className={`${
            toggle === false ? 'md:h-60 md:w-96 md:object-cover rounded-md' : ''
          }`}
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{model}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

AvailableCarsCard.propTypes = {
  car: PropTypes.object.isRequired,
  toggle: PropTypes.bool,
};

export default AvailableCarsCard;
