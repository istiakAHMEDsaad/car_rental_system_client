import axios from 'axios';
import { useEffect, useState } from 'react';
import AvailableCarsCard from '../components/AvailableCarsCard';

const AvailableCar = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchAllCarsData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-car`
      );
      setCarsData(data);
    };
    fetchAllCarsData();
  }, []);

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
      <div className='flex flex-col items-center space-y-10'>
        {/* option section */}
        <div className='flex flex-col gap-4 md:flex-row'>
          {/* Sort By Category */}
          <div>
            <select defaultValue='Pick a color' className='select'>
              <option disabled={true}>Pick a color</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>

          {/* Search field */}
          <div className='join'>
            <input className='input join-item' placeholder='Email' />
            <button className='btn join-item rounded-r-full'>Subscribe</button>
          </div>

          {/* Reset */}
          <div>
            <button className='btn'>Reset</button>
          </div>
        </div>

        {/* Card container */}
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {carsData?.map((car) => (
              <AvailableCarsCard key={car?._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;
