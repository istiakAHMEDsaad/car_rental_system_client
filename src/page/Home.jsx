import { Typewriter } from "react-simple-typewriter";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import SpecialOffer from "../components/SpecialOffer";
import Testimonials from "../components/Testimonials";

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

      <div></div>

      <Testimonials />

      <SpecialOffer />
    </div>
  );
};

export default Home;
