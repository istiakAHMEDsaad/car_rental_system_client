import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="container mx-auto mt-2">
      {/* Heading */}
      <h2 className="font-semibold text-4xl text-zinc-700 py-2 text-center italic">
        Drive Your Dreams{" "}
        <span className="text-yellow-600">
          <Typewriter
            words={["Today", "Tomorrow", "In Future"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>

      
    </div>
  );
};

export default Home;
