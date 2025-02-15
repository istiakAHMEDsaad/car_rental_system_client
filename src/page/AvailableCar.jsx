import axios from 'axios';
import { useEffect, useState } from 'react';
import AvailableCarsCard from '../components/AvailableCarsCard';
import toast from 'react-hot-toast';
import { IoGrid, IoList } from 'react-icons/io5';

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchAllCarsData = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/all-car?filter=${filter}&search=${search}`
      );
      setCarsData(data);
    };
    fetchAllCarsData();
  }, [filter, search]);

  const handleResetButton = () => {
    setFilter('');
    setSearch('');
    toast.success('Reset successfully!');
  };

  return (
    <div className='container mx-auto mt-5 overflow-hidden'>
      {/* Title */}
      <div className='flex w-full flex-col'>
        <div className='text-center text-3xl font-semibold text-zinc-700 divider'>
          <span className='animate__animated animate__flipInX animate__slower animate__infinite'>
            All Available Car
          </span>
        </div>
      </div>

      {/* option section */}
      <div className='flex flex-col items-center space-y-10'>
        <div className='flex flex-col gap-4 md:flex-row'>
          {/* Sort By Category */}
          <div>
            <select
              name='category'
              id='category'
              className='select'
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            >
              <option value=''>Filter By Category</option>
              <option value='ascending'>Lowest First</option>
              <option value='descending'>Highest First</option>
              <option value='old'>Oldest First</option>
              <option value='new'>Newest First</option>
            </select>
          </div>

          {/* Search field */}
          <div className='join'>
            <input
              className='input join-item'
              type='text'
              name='search'
              placeholder='Enter car model'
              aria-label='Enter car model'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className='btn join-item rounded-r-full'>Search</button>
          </div>

          <div className='flex gap-4'>
            <div>
              <button className='btn' onClick={() => setToggle(!toggle)}>
                {toggle === true ? <IoGrid size={20} /> : <IoList size={20} />}
              </button>
              {/* {toggle === true ? (<button></button>) : (<button></button>)} */}
            </div>

            {/* Reset */}
            <div>
              <button onClick={handleResetButton} className='btn'>
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Card container (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4) */}
        <div>
          <div
            className={`${
              toggle === true
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                : 'lg:grid lg:grid-cols-1'
            }`}
          >
            {carsData?.map((car) => (
              <AvailableCarsCard key={car?._id} car={car} toggle={toggle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;
