import { Typewriter } from "react-simple-typewriter";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import SpecialOffer from "../components/SpecialOffer";
import Testimonials from "../components/Testimonials";
import TempCard from "../components/TempCard";
import { FcAdvertising, FcCustomerSupport } from "react-icons/fc";

const Home = () => {
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

      <Carousel />

      <WhyChooseUs />

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
        <div className='grid lg:grid-cols-3'>
          <TempCard />
          <TempCard />
          <TempCard />
        </div>
      </div>

      {/* animate__animated animate__pulse animate__slower animate__infinite infinite */}
      <div className='my-16'>
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

      <SpecialOffer />
    </div>
  );
};

export default Home;
