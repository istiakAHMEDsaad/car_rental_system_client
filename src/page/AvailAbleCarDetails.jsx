import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const AvailAbleCarDetails = () => {
  const { id } = useParams(); //(useParams, useLoaderData)
  const [singleData, setSingleData] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetchSingleData();
  }, [id]);

  const fetchSingleData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-car/${id}`
    );
    setSingleData(data);
  };

  const { model, price, available, features, image, description } =
    singleData || {};
  
  const bookingUserMail = user?.email;
  const authorEmail = singleData?.author?.author_email;

  const handleBookCar = () => {
    if(bookingUserMail === authorEmail){
      return toast.error("You can't book your own posted car!!!" )
    }
  }

  return (
    <div className='container mx-auto'>
      <div>
        <h2 className='mt-6 text-center text-3xl font-semibold text-zinc-800'>
          Book Your Favourite Car
        </h2>
      </div>

      {/* Form Section */}
      <div className='lg:mx-16 md:mx-16 border border-gray-300 rounded-md shadow-md p-3 my-8'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* 1 */}
          <div className='flex-2'>
            <img src={image} alt='car image' className='lg:h-96 md:h-60' />
          </div>

          {/* 2 */}
          <div className='flex-2'>
            <div className='flex flex-col gap-2 lg:text-xl text-base font-semibold text-zinc-700'>
              <p className='flex gap-2'>
                Model: <span className='font-normal italic'>{model}</span>
              </p>
              <p className='flex gap-2'>
                Daily Price: <span className='font-normal italic'>{price}</span>
              </p>
              <p className='flex gap-2'>
                Available Price:{' '}
                <span className='font-normal italic'>{available}</span>
              </p>
              <p className='flex gap-2'>
                Features: <span className='font-normal italic'>{features}</span>
              </p>
              <p className='flex gap-2'>
                Description:{' '}
                <span className='font-normal italic'>{description}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <button onClick={handleBookCar} className='btn btn-accent'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AvailAbleCarDetails;
