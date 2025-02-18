import axios from 'axios';
import { useEffect, useState } from 'react';
import CarsCard from './CarsCard';

const AllCars = () => {
  const [cars, setAllCars] = useState([]);

  useEffect(() => {
    const fetchAllCar = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/limited-car?limit=6`
      );
      setAllCars(data);
    };
    fetchAllCar();
  }, []);


  return (
    <div>
      <div className='grid lg:grid-cols-3 lg:gap-2'>
        {cars?.map((car)=>(
            <CarsCard key={car?._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllCars;
