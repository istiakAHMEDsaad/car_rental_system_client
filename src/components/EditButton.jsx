import { useContext, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const EditButton = ({ postId, fetchAllCarByAuthorEmail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carId, setCarId] = useState({});
  const { user } = useContext(AuthContext);

  const handleClose = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsModalOpen(false);
  };

  //api effect
  useEffect(() => {
    fetchDataById();
  }, [postId]);
  //fetch data by cars id
  const fetchDataById = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-car/${postId}`
    );
    setCarId(data);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const model = form.car_model.value;
    const price = parseFloat(form.daily_rental_price.value);
    const available = form.availability.value;
    const reg_num = form.registration_num.value;
    const features = form.features.value;
    const image = form.car_image.value;
    const location = form.location.value;
    const description = form.description.value;

    const editInfo = {
      model,
      price,
      available,
      reg_num,
      features,
      image,
      location,
      description,
      author: {
        author_email: user?.email,
        author_name: user?.displayName,
        author_photo: user?.photoURL,
      },
      book_count: carId?.book_count,
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-car/${postId}`,
        editInfo
      );
      if (response.status === 200) {
        form.reset();
        toast.success('Data Updated Successfully!!!');
        setIsModalOpen(false);
        fetchAllCarByAuthorEmail();
      } else {
        toast.error('Failed to update data. Please try again.');
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
          />
        </svg>
      </button>

      {/* Edit Modal */}
      <dialog className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className='modal-box w-11/12 max-w-3xl'>
          <form method='dialog'>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={() => setIsModalOpen(false)}
            >
              <FiX size={20} />
            </button>
          </form>

          <h3 className='font-bold text-lg mb-4'>Edit Car Details</h3>

          <form onSubmit={handleEditSubmit}>
            {/* Single input */}
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              {/* Car Model */}
              <div>
                <label className='text-gray-700 ' htmlFor='car_model'>
                  Car Model
                </label>
                <input
                  id='car_model'
                  name='car_model'
                  type='text'
                  defaultValue={carId?.model}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              {/* Daily Rental Price */}
              <div>
                <label className='text-gray-700 ' htmlFor='daily_rental_price'>
                  Daily Rental Price
                </label>
                <input
                  id='daily_rental_price'
                  type='number'
                  name='daily_rental_price'
                  defaultValue={carId?.price}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              {/* Availability */}
              <div className='flex flex-col gap-2'>
                <label className='text-gray-700 ' htmlFor='availability'>
                  Availability
                </label>
                <select
                  name='availability'
                  id='availability'
                  defaultValue={carId?.available}
                  className='px-2 py-[0.6rem] rounded-md text-gray-700 border bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                >
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>

              {/* Registration Number */}
              <div>
                <label className='text-gray-700 ' htmlFor='registration_num'>
                  Registration Number
                </label>
                <input
                  id='registration_num'
                  name='registration_num'
                  defaultValue={carId?.reg_num}
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              {/* Features */}
              <div>
                <label className='text-gray-700 ' htmlFor='features'>
                  Features (e.g., GPS, AC, etc.)
                </label>
                <input
                  id='features'
                  name='features'
                  type='text'
                  defaultValue={carId?.features}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              {/* Car Image */}
              <div>
                <label className='text-gray-700 ' htmlFor='car_image'>
                  Car Image
                </label>
                <input
                  id='car_image'
                  name='car_image'
                  type='url'
                  defaultValue={carId?.image}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              {/* Location */}
              <div>
                <label className='text-gray-700 ' htmlFor='location'>
                  Location
                </label>
                <input
                  id='location'
                  name='location'
                  type='text'
                  defaultValue={carId?.location}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>

            {/* Description */}
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                name='description'
                id='description'
                defaultValue={carId?.description}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              ></textarea>
            </div>

            {/* Save Button */}
            <div className='flex justify-end mt-6 gap-1'>
              <button
                type='button'
                onClick={handleClose}
                className='btn btn-warning'
              >
                Cancle
              </button>
              <button type='submit' className='btn btn-neutral'>
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

EditButton.propTypes = {
  postId: PropTypes.number.isRequired,
  fetchAllCarByAuthorEmail: PropTypes.func.isRequired,
};

export default EditButton;
