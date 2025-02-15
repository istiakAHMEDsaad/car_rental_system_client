import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const model = form.car_model.value;
    const price = parseFloat(form.daily_rental_price.value);
    const available = form.availability.value;
    const reg_num = form.registration_num.value;
    const features = form.features.value;
    const image = form.car_image.value;
    const location = form.location.value;
    const post_date = startDate;
    const description = form.description.value;

    const infoRes = {
      model,
      price,
      available,
      reg_num,
      features,
      image,
      location,
      post_date,
      description,
      author: {
        author_email: user?.email,
        author_name: user?.displayName,
        author_photo: user?.photoURL,
      },
      book_count: 0,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-car`, infoRes);
      form.reset();
      toast.success('Data added successfully!!!');
      navigate('/my-car');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='min-h-[calc(100vh-245px)] flex justify-center items-center my-12'>
      <section className='p-2 md:p-6 mx-auto bg-white rounded-md shadow-md'>
        {/* Form Label */}
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Post a Car Data
        </h2>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
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
                required
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
                required
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
                required
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
                type='text'
                required
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
                required
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
                required
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
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            {/* Date */}
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Posted Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='px-2 py-[0.6rem] rounded-md text-gray-700 border bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
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
              required
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            ></textarea>
          </div>

          {/* Save Button */}
          <div className='flex justify-end mt-6'>
            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCar;
