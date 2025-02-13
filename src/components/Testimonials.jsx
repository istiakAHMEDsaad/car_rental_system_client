import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

import avaOne from "../assets/ai_1.webp";
import avaTwo from "../assets/ai_2.avif";
import avaThree from "../assets/ai_3.webp";
import avaFour from "../assets/ai_4.jpg";

import Aos from "aos";
import { useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    avatar: avaOne,
    rating: 5,
    description: "Great service! Highly recommend.",
  },
  {
    name: "Jane Smith",
    avatar: avaTwo,
    rating: 4,
    description: "Very satisfied with the car rental experience.",
  },
  {
    name: "Alice Johnson",
    avatar: avaThree,
    rating: 5,
    description: "Excellent customer support and quality cars.",
  },
  {
    name: "James Calo",
    avatar: avaFour,
    rating: 4,
    description: "Very satisfied with the car rental experience.",
  },
];

const Testimonials = () => {
  useEffect(() => {
        Aos.init({duration: 1500});
      }, []);
  
  return (
    <div data-aos="fade-up" className='container mx-auto px-2 flex flex-col md:grid md:grid-cols-2 md:gap-2'>
      {testimonials.map((item, index) => (
        <div
          key={index}
          className='card card-side card-xl bg-base-100 shadow-md'
        >
          <figure>
            <img
              src={item.avatar}
              className='w-full h-52 rounded-2xl object-cover'
              alt='avatar'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{item.name}</h2>
            <p>{item.description}</p>
            <p>
              <Rating
                initialRating={item.rating}
                readonly
                fractions={2}
                emptySymbol={
                    <span className='text-xl text-yellow-400'>
                      <FaRegStar></FaRegStar>
                    </span>
                  }
                  fullSymbol={
                    <span className='text-xl text-yellow-400'>
                      <FaStar></FaStar>
                    </span>
                  }
              />
            </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Read</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

/* 
<h3 className='text-3xl font-semibold text-center mb-6'>Testimonials</h3>
        <div className='flex flex-wrap justify-center gap-6'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className='card w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <div>
                    <h4 className='text-xl font-semibold'>{testimonial.name}</h4>
                    <div className='rating'>
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <input
                          key={i}
                          type='radio'
                          name={`rating-${index}`}
                          className='mask mask-star-2 bg-yellow-500'
                          checked
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p>{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
*/
