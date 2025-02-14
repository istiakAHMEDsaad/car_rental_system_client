import { Typewriter } from "react-simple-typewriter";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import SpecialOffer from "../components/SpecialOffer";
import Testimonials from "../components/Testimonials";
import { FcAdvertising, FcCustomerSupport } from "react-icons/fc";
import AllCars from "../components/AllCars";
import Aos from "aos";
import { useEffect } from "react";


const Home = () => {
  useEffect(()=>{
    Aos.init()
  }, [])
  
  return (
    <div className='container mx-auto mt-2'>
      {/* Heading */}
      <h2 className='font-semibold text-4xl text-zinc-700 py-2 text-center italic'>
        Drive Your Dreams{" "}
        <span className='text-yellow-600'>
          <Typewriter
            words={["Today", "Tomorrow", "In Future"]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>

      {/* Carousel */}
      <Carousel />

      {/* Icon section */}
      <WhyChooseUs />

      {/* 6/8 card from db section */}
      <div>
        {/* animate__animated animate__flash animate__slower animate__infinite infinite */}
        <h2
          className='
          mb-4 text-4xl font-semibold text-center italic text-zinc-800 flex items-center justify-center gap-3
          animate__animated animate__flash animate__slower animate__infinite infinite
        '
        >
          <span>Our Latest Car</span>
          <span>
            {" "}
            <FcAdvertising />
          </span>
        </h2>
        <div data-aos="fade-up" className='grid lg:grid-cols-3'>
          <AllCars/>
        </div>
      </div>

      
      {/* Testimonial Custormer review */}
      <div data-aos='fade-up' className='my-16'>
        <h2
          className='
        mb-4 text-4xl font-semibold text-center italic text-zinc-800 flex items-center justify-center gap-3
        '
        >
          <span>What Our Customer Says</span>
          <span>
            <FcCustomerSupport />
          </span>
        </h2>
        <Testimonials />
      </div>

      {/* Special Offer */}
      <SpecialOffer />
    </div>
  );
};

export default Home;
{/* animate__animated animate__pulse animate__slower animate__infinite infinite */}