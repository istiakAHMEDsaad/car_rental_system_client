import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

//icons
import { FcCancel, FcEmptyTrash, FcCalendar } from 'react-icons/fc';
import toast from 'react-hot-toast';
import axios from 'axios';

const MyBookingsTable = ({ bookingData, fetchBookingData }) => {
  const {
    bookingPicture,
    bookingModel,
    bookingDate,
    bookingVatPrice,
    bookingStatus,
    _id,
  } = bookingData || {};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forDeleteModal, setForDeleteModal] = useState(false);
  const [forDateModal, setForDateeModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const deleteModalOpen = () => {
    setForDeleteModal(true);
  };

  const dateModalOpen = () => {
    setForDateeModal(true);
  };

  //update status
  const handleStatusChange = async (id, _, status) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/booking-status-update/${id}`,
        { bookingStatus: status }
      );
      toast.success('Canceled successfully');
      setIsModalOpen(false);
      fetchBookingData(); //all fetch data prop drilling through another page
    } catch (error) {
      toast.error(error?.message);
    }
  };

  //update date
  const handleUpdateDate = async (id, updatedDate) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/bookingdate-update/${id}`,
        { bookingDate: updatedDate }
      );
      toast.success('Update date successfully');
      setForDateeModal(false);
      fetchBookingData();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  //delete booking
  const handleDeleteBookings = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-booking/${id}`
      );
      toast.success('Booking history deleted');
      setForDeleteModal(false);
      fetchBookingData();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <tr className='hover:bg-gray-100 transition-colors'>
      {/* car image */}
      <td className='md:pl-6 pl-2 py-2 text-sm text-gray-500  whitespace-nowrap'>
        <div>
          <img
            className='h-12 w-12 object-cover rounded-full'
            src={bookingPicture}
            alt='car picture'
          />
        </div>
      </td>

      {/* car model */}
      <td className='px-2 py-2 text-sm text-gray-500  whitespace-nowrap'>
        {bookingModel}
      </td>

      {/* booking date */}
      <td className='py-2 text-sm text-gray-500  whitespace-nowrap'>
        <span>{format(new Date(bookingDate), 'P')}, </span>
        <span>{format(new Date(bookingDate), 'p')}</span>
      </td>

      {/* total price */}
      <td className='md:pl-6 pl-3 py-2 text-sm text-gray-500  whitespace-nowrap'>
        $ {bookingVatPrice}
      </td>

      {/* status */}
      <td className='lg:pl-10 md:pl-8 pl-5 py-2 text-sm text-gray-500  whitespace-nowrap '>
        {bookingStatus}
      </td>

      {/* operation */}
      <td className='py-2 text-sm text-gray-500  whitespace-nowrap'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleOpenModal}
            className='px-1 py-[2px] rounded-md bg-red-100 cursor-pointer transition-colors hover:bg-red-200'
          >
            <FcCancel size={26} />
          </button>

          <button
            onClick={deleteModalOpen}
            className='px-1 py-[2px] rounded-md bg-red-100 cursor-pointer transition-colors hover:bg-red-200'
          >
            <FcEmptyTrash size={26} />
          </button>

          <button
            onClick={dateModalOpen}
            className='px-1 py-[2px] rounded-md bg-cyan-100 cursor-pointer transition-colors hover:bg-cyan-200'
          >
            <FcCalendar size={26} />
          </button>
        </div>
      </td>
      {/* cancel modal */}
      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box relative'>
            {/* Close Button */}
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h3 className='font-bold text-lg'>Confirm Canceling</h3>
            <p className=''>Are you sure you want to cancel this booked car?</p>
            <div className='modal-action'>
              <button className='btn' onClick={() => setIsModalOpen(false)}>
                Close
              </button>
              <button
                onClick={() =>
                  handleStatusChange(_id, bookingStatus, 'Canceled')
                }
                className='btn btn-primary'
              >
                Cancel Now
              </button>
            </div>
          </div>
        </div>
      )}
      {/* delete modal */}
      {forDeleteModal && (
        <div className='modal modal-open'>
          <div className='modal-box relative'>
            {/* Close Button */}
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => setForDeleteModal(false)}
            >
              ✕
            </button>

            <h3 className='font-bold text-lg'>Confirm Deleting</h3>
            <p className=''>Are you sure you want to delete this booked car?</p>
            <div className='modal-action'>
              <button className='btn' onClick={() => setForDeleteModal(false)}>
                Close
              </button>
              <button
                onClick={() => handleDeleteBookings(_id)}
                className='btn btn-primary'
              >
                Delete Now
              </button>
            </div>
          </div>
        </div>
      )}
      {/* update date modal */}
      {forDateModal && (
        <div className='modal modal-open'>
          <div className='border border-gray-300 shadow-md w-80 md:w-96 h-[28rem] rounded-md bg-white relative flex flex-col items-center'>
            {/* Close Button */}
            <button
              className='btn btn-sm btn-circle absolute right-2 top-2'
              onClick={() => setForDateeModal(false)}
            >
              ✕
            </button>

            <h3 className='font-bold text-lg mt-8 mb-4'>Please Choose Date</h3>
            <div className='mb-60'>
              <DatePicker
                className='px-2 py-[0.6rem] rounded-md text-gray-700 border bg-white border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='modal-action'>
              <button className='btn' onClick={() => setForDateeModal(false)}>
                Close
              </button>
              <button
                onClick={() => handleUpdateDate(_id, startDate)}
                className='btn btn-primary'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

MyBookingsTable.propTypes = {
  bookingData: PropTypes.object.isRequired,
  fetchBookingData: PropTypes.func,
};

export default MyBookingsTable;
