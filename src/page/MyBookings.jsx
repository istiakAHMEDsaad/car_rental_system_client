import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBookingsTable from '../components/MyBookingsTable';
import DailyPriceChart from '../components/DailyPriceChart';
import toast from 'react-hot-toast';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookData, setMyBookData] = useState([]);
  const [postDate, setPostedDate] = useState([]);
  const [allPrices, setAllPrices] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchBookingData();
    }
  }, [user]);

  const fetchBookingData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`
    );
    setMyBookData(data);
  };

  //price
  useEffect(() => {
    fetchDailyPrice();
  }, []);
  const fetchDailyPrice = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-cars`
      );
      setPostedDate(data?.map((date) => date.post_date));
      setAllPrices(data?.map((car) => car.price));
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='container mx-auto'>
      {/* chart */}
      <div className='my-6'>
        <DailyPriceChart postDate={postDate} allPrices={allPrices} />
      </div>

      {/* Length */}
      <div className='flex items-center gap-x-3 mt-20'>
        <h2 className='text-lg font-medium text-gray-800 '>My Booking Car</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {myBookData?.length} Booking
        </span>
      </div>

      {/* Table */}
      <div className='flex flex-col my-8'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-amber-100/70'>
                  <tr className='font-semibold'>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Car Image</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500'
                    >
                      <span>Car Model</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Booking Date</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500'
                    >
                      Total Price
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500'
                    >
                      Booking Status
                    </th>

                    <th className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white divide-y divide-gray-200'>
                  {myBookData?.map((bookingData) => (
                    <MyBookingsTable
                      key={bookingData?._id}
                      bookingData={bookingData}
                      fetchBookingData={fetchBookingData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
