import { Swiper, SwiperSlide } from "swiper/react";

//Module
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

// swiper style css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// image assets
import carOne from "../assets/car_1.webp";
import carTwo from "../assets/car_2.webp";
import carThree from "../assets/car_3.webp";

const Carousel = () => {
  return (
    <div className='container mx-auto px-6 py-10'>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Slide
            image={carOne}
            text='Progressively engage viral quality vectors.'
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Slide
            image={carTwo}
            text='Dramatically simplify inexpensive scenarios.'
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Slide
            image={carThree}
            text='Assertively exploit long-term high-impact internal.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
