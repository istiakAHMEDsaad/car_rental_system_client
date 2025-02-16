import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';

//icons
import {
  IoLogoModelS,
  IoIosPricetags,
  IoIosPersonAdd,
  IoIosCheckmark,
  IoIosClose,
  IoIosCog,
  IoIosDocument,
} from 'react-icons/io';
import { format } from 'date-fns';

const AvailAbleCarDetails = () => {
  const { id } = useParams(); //(useParams, useLoaderData)
  const [singleData, setSingleData] = useState([]);
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetchSingleData();
  }, [id]);

  const fetchSingleData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-car/${id}`
    );
    setSingleData(data);
  };

  const { model, price, available, features, image, description, _id } =
    singleData || {};

  // console.log("2", 2);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const bookingUserMail = user?.email;
  const authorEmail = singleData?.author?.author_email;
  // const todaysDate = format(new Date(), 'P');
  const withVat = price + price * 0.05;

  const handleConfirmBooking = () => {
    if (bookingUserMail === authorEmail) {
      return toast.error("You can't book your own posted car!!!");
    }

    const bookingInformation = {
      bookingPicture: image,
      bookingModel: model,
      bookingDate: startDate,
      bookingVatPrice: withVat,
      bookingStatus: 'Pending',
      bookingMail: user?.email,
      bookId: _id
    };
    console.table(bookingInformation)

    toast.success('Booking Confirm');
    setIsModalOpen(false);
  };

  return (
    <div className='container mx-auto overflow-hidden'>
      <div>
        <h2
          className='mt-6 text-center text-3xl font-semibold text-zinc-800
          animate__animated animate__fadeIn
        '
        >
          Book Your Favourite Car
        </h2>
      </div>

      {/* Form Section */}
      <div
        className='lg:mx-16 md:mx-16 border border-gray-300 rounded-md shadow-md p-3 my-8
        animate__animated animate__fadeIn
      '
      >
        <div className='flex flex-col md:flex-row items-center'>
          {/* 1 */}
          <div className='flex-2'>
            <img
              src={image}
              alt='car image'
              className='lg:h-96 md:h-60 rounded-md'
            />
          </div>

          {/* 2 */}
          <div className='flex-2'>
            <div className='flex flex-col gap-2 lg:text-xl text-base font-semibold text-zinc-700'>
              <p className='underline'>Car Details:</p>
              <p className='flex gap-2'>
                <IoLogoModelS size={30} />{' '}
                <span className='font-normal italic'>{model}</span>
              </p>
              <p className='flex gap-2'>
                <IoIosPricetags size={30} />
                <span className='font-normal italic'>{price} $</span>
              </p>
              <p className='flex gap-2'>
                <IoIosPersonAdd size={30} />
                {/* <span className='font-normal italic'>{available === 'yes'}</span> */}
                {available === 'yes' ? (
                  <span className='font-normal italic flex items-center pl-3 rounded-full bg-green-200/60 text-green-700'>
                    available
                    <IoIosCheckmark size={30} />
                  </span>
                ) : (
                  <span className='font-normal italic flex items-center pl-3 rounded-full bg-red-200/60 text-red-700'>
                    not available
                    <IoIosClose size={30} />
                  </span>
                )}
              </p>
              <p className='flex gap-2'>
                <IoIosCog size={30} />
                <span className='font-normal italic'>{features}</span>
              </p>
              <p className='flex items-start gap-2'>
                <IoIosDocument size={50} />
                <span className='font-normal italic'>{description}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <button className='btn btn-accent' onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box relative'>
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <div className='py-4 flex flex-col'>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0'>
                {/* Date Picker */}
                <div className='flex flex-col'>
                  <label className='text-zinc-800 font-semibold text-base'>
                    Choose Your Date:
                  </label>
                  <DatePicker
                    className='px-2 py-[0.6rem] rounded-md text-gray-700 border bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                {/* Price */}
                <div className='md:pr-8'>
                  <p className='text-zinc-800 font-semibold text-base'>
                    Est. cost (+5% vat)
                  </p>
                  <p>${withVat}</p>
                </div>
              </div>
            </div>

            <h3 className='font-bold text-lg'>Confirm Booking</h3>
            <p className=''>Are you sure you want to book this car?</p>
            <div className='modal-action'>
              <button className='btn' onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                className='btn btn-primary'
                onClick={handleConfirmBooking}
              >
                Confirm Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailAbleCarDetails;
