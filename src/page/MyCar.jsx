import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyCar = () => {
  const [authorPost, setAuthorPost] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchAllCarByAuthorEmail();
  }, [user]);

  const fetchAllCarByAuthorEmail = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-car/${user?.email}`
    );
    setAuthorPost(data);
  };

  console.log(authorPost);

  return (
    <div className='container mx-auto pt-10'>
      {/* Title */}
      <div className='flex items-center gap-x-3'>
        <h2 className='text-xl font-medium text-zinc-800'>My Posted Cars</h2>
        <span className='text-sm px-3 py-1 rounded-full bg-lime-100 text-lime-800'>
          {authorPost?.length} Cars
        </span>
      </div>

      {/* Table */}
      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              {/* Table Start */}
              <table className='min-w-full divide-y divide-gray-200'>
                {/* Table Head */}
                <thead className='bg-gray-50'>
                  {/* Table Row 1 */}
                  <tr>
                    {/* Table Head 1 */}
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Model</span>
                      </div>
                    </th>

                    {/* Table Head 2 */}
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Post Date</span>
                      </div>
                    </th>

                    {/* Table Head 3 */}
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Price</span>
                      </div>
                    </th>

                    {/* Table Head 4 */}
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Availability</span>
                      </div>
                    </th>

                    {/* Table Head 5 */}
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Features</span>
                      </div>
                    </th>

                    {/* Table Head 6 */}
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
                  {/* Table Row 2 */}
                  <tr>
                    {/* Table Data 1 */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      abc
                    </td>
                    {/* Table Data 2 */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      def
                    </td>
                    {/* Table Data 3 */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      ghi
                    </td>
                    {/* Table Data 4 */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      jkl
                    </td>
                    {/* Table Data 5 */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      mno
                    </td>
                    {/* Table Data 6 */}
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        {/* Delete Button */}
                        <button className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none cursor-pointer'>
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
                        <button className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none cursor-pointer'>
                          {/* edit icon */}
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCar;
