import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBookingsTable from '../components/MyBookingsTable';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookData, setMyBookData] = useState([]);

  useEffect(() => {
    fetchBookingData();
  }, [user]);

  const fetchBookingData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`
    );
    setMyBookData(data);
  };
  console.log(myBookData);
  return (
    <div className='container mx-auto'>
      {/* Length */}
      <div className='flex items-center gap-x-3 mt-6'>
        <h2 className='text-lg font-medium text-gray-800 '>My Booking Car</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {myBookData?.length} Booking
        </span>
      </div>

      {/* Table */}
      <div className='flex flex-col mt-6'>
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
