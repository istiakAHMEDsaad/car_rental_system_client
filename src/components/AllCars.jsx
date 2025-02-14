import axios from 'axios';
import { useEffect, useState } from 'react';
import CarsCard from './CarsCard';

const AllCars = () => {
  const [cars, setAllCars] = useState([]);

  useEffect(() => {
    const fetchAllCar = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-car`
      );
      setAllCars(data);
    };
    fetchAllCar();
  }, []);

  console.log(cars);

  return (
    <div>
      <div>
        {cars?.map((car)=>(
            <CarsCard key={car?._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllCars;
