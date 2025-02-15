import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import EditButton from '../components/EditButton';
import { Link } from 'react-router-dom';

const MyCar = () => {
  const [authorPost, setAuthorPost] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortType, setSortType] = useState('none');

  useEffect(() => {
    fetchAllCarByAuthorEmail();
  }, [user]);

  const fetchAllCarByAuthorEmail = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-car/${user?.email}`
    );
    setAuthorPost(data);
  };

  // Sort Function
  const getSortedPosts = () => {
    if (sortType === 'none') return authorPost;

    const sortedPosts = [...authorPost];

    switch (sortType) {
      case 'lowest':
        return sortedPosts.sort((a, b) => a.price - b.price);
      case 'highest':
        return sortedPosts.sort((a, b) => b.price - a.price);
      case 'newest':
        return sortedPosts.sort(
          (a, b) => new Date(b.post_date) - new Date(a.post_date)
        );
      case 'oldest':
        return sortedPosts.sort(
          (a, b) => new Date(a.post_date) - new Date(b.post_date)
        );
      default:
        return sortedPosts;
    }
  };

  // handle delete function
  const handlePostData = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/single-car/${id}`
      );
      console.log(data);
      fetchAllCarByAuthorEmail();
      toast.success('Data deleted successfully');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  // delete popup confirm function
  const confirmDelete = (id) => {
    toast((t) => (
      <div className='flex gap-3 items-center'>
        <div>
          <p className='font-bold text-zinc-700'>Are you sure?</p>
        </div>

        <div className='flex gap-2'>
          <button
            className='px-3 py-1 rounded-md bg-red-400 text-white hover:bg-red-500 transition-colors'
            onClick={() => {
              toast.dismiss(t.id);
              handlePostData(id);
            }}
          >
            Yes
          </button>
          <button
            className='px-3 py-1 rounded-md bg-green-400 text-white hover:bg-green-500 transition-colors'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancle
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className='container mx-auto pt-10'>
      {/* Title */}
      <div className='flex md:flex-row flex-col items-center justify-between'>
        <div className='flex items-center justify-center gap-x-3'>
          <h2 className='text-xl font-medium text-zinc-800'>My Posted Cars</h2>
          <span className='text-sm px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-center'>
            {authorPost?.length} Cars
          </span>
        </div>

        <select
          className='px-4 py-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value='none'>Sort By</option>
          <option value='lowest'>Lowest Price</option>
          <option value='highest'>Highest Price</option>
          <option value='newest'>Newest First</option>
          <option value='oldest'>Oldest First</option>
        </select>
      </div>

      {/* Table */}
      {authorPost?.length === 0 ? (
        <div className='mt-10 flex flex-col items-center justify-center'>
          <h2 className='text-center font-semibold text-2xl text-zinc-700'>
            Currently There is No Car Available in Database <br />
            <span className='italic font-bold text-rose-400'>
              Please Add Some
            </span>
          </h2>
          <Link to={'/add-car'} className='btn btn-warning'>
            Add Car
          </Link>
        </div>
      ) : (
        <div className='flex flex-col mt-6'>
          <div className='md:-mx-4 md:-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                {/* Table Start */}
                <table className='min-w-full divide-y divide-gray-200'>
                  {/* Table Head */}
                  <thead className='bg-gray-50'>
                    {/* Table Row 1 */}
                    <tr>
                      {/* Table Head 1 image */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3 font-semibold'>
                          <span>Image</span>
                        </div>
                      </th>

                      {/* Table Head 2 model */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3 font-semibold'>
                          <span>Model</span>
                        </div>
                      </th>

                      {/* Table Head 3 price*/}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3 font-semibold'>
                          <span>Daily Price</span>
                        </div>
                      </th>

                      {/* Table Head 4 booking count */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3 font-semibold'>
                          <span>Booking Count</span>
                        </div>
                      </th>

                      {/* Table Head 5 availability */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3 font-semibold'>
                          <span>Availability</span>
                        </div>
                      </th>

                      {/* Table Head 6 date */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Posted Date</span>
                        </div>
                      </th>

                      {/* Table Head 7 operation */}
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Edit</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {/* Table Row 2 -> dynamic <- */}
                    {getSortedPosts()?.map((post) => (
                      <tr key={post?._id}>
                        {/* Table Data 1 image */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          <div className='flex items-center justify-center'>
                            <img
                              className='w-10 h-10 object-cover rounded-full'
                              src={post?.image}
                              alt='image'
                            />
                          </div>
                        </td>
                        {/* Table Data 2 model */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {post?.model}
                        </td>
                        {/* Table Data 3 daily price */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {post?.price}
                        </td>
                        {/* Table Data 4 booking count */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {post?.book_count}
                        </td>
                        {/* Table Data 5 availability */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          <div className='flex items-center gap-x-2'>
                            <p
                              className={`px-3 py-1 ${
                                post?.available === 'yes' &&
                                'text-green-500 bg-green-100/60'
                              } ${
                                post?.available === 'no' &&
                                'text-red-500 bg-red-100/60'
                              } rounded-full`}
                            >
                              {post?.available}
                            </p>
                          </div>
                        </td>
                        {/* Table Data 6 posted date */}
                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                          {format(new Date(post?.post_date), 'P')}
                        </td>
                        {/* Table Data 7 operation */}
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-6'>
                            {/* Delete Button */}
                            <button
                              onClick={() => confirmDelete(post?._id)}
                              className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none cursor-pointer'
                            >
                              {/* icon bin */}
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
                                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                />
                              </svg>
                            </button>

                            {/* Edit Button */}
                            <EditButton
                              postId={post?._id}
                              fetchAllCarByAuthorEmail={
                                fetchAllCarByAuthorEmail
                              }
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCar;
