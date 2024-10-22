import { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import video from "../assets/Pocoloco.mp4";
import { FiArrowRight, FiPlus, FiMinus } from "react-icons/fi";
import mascotImage from "../assets/monkey.png";
import pencilIcon from "../assets/pencil.jpg";
import mazeImage from "../assets/kidsClimbing.jpg";
import explore from "../assets/explore.jpg";
import centerImage from "../assets/MidImage.jpg";
import Another from "../assets/another.jpg";
import Testimonial from "../components/Testimonials";

// Define an array for activities to display dynamically
const activitiesData = [
  {
    title: "Climb Big",
    description:
      "A variety of climbing features means that kids never run out of things to climb on, over, under, through, and around.",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Explore",
    description:
      "The maze is packed with lots of different obstacles waiting to be explored. Easy or challenging, they all encourage kids to move, act and develop abilities: get ready to cross bridges, balance on a beam...",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Spin Big",
    description: "Spin like a top, fun is guaranteed!",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Build Big",
    description:
      "Kids can design and build their own giant structures in the fun block arena. The only limit is their imagination!",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Ride Big",
    description:
      "No License? No Problem!! Promise, you won’t get pulled over 😊",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Slide Big",
    description:
      "A classic: climb up the play structure, zoom back down. Again and again!",
    image: explore, // You can replace it with respective image
  },
  {
    title: " Kick Big",
    description:
      "Score a goal. Play with friends, or go head-to-head with the grownups in our soccer arena!",
    image: explore, // You can replace it with respective image
  },
  {
    title: "Dance Big",
    description: "Bust a move on the dance floor.",
    image: explore, // You can replace it with respective image
  },
];
const TotsData = [
  {
    title: "Slide Big",
    description:
      "Soft slides are the perfect height for our smallest adventurers.",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Bounce Big",
    description:
      "All kids love the ball pit: swimming, floating or diving… it doesn’t matter!",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Crawl Big",
    description:
      "All kids love the ball pit: swimming, floating or diving… it doesn’t matter!",
    image: mazeImage, // You can replace it with respective image
  },
  {
    title: "Ride Big",
    description: "Climb aboard a bicycle or even a motorcycle!",
    image: mazeImage, // You can replace it with respective image
  },
];

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // To track which activity is active

  // Function to toggle active state
  const toggleActivity = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index); // Open the selected activity
    }
  };

  return (
    <div>
      {/* Full-screen Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh]">
        {/* Full-screen Video Background */}
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Enquiry Form Modal */}
        {isFormOpen && <EnquiryForm closeForm={() => setIsFormOpen(false)} />}
      </div>

      {/* Play Big Section */}
      <section className="relative bg-yellow-500 pt-12 pb-0 md:py-20 text-center">
        <div className="relative z-10 flex flex-row justify-center items-center">
          <h1 className="text-6xl md:text-9xl font-bold text-white inline-block font-baby-gemoy mt-[-2rem] md:mt-[-10rem]">
            Play{" "}
            <span className="text-purple-600">
              {" "}
              <br />
              Big
            </span>
          </h1>
          <img
            src={mascotImage}
            alt="Monkey Mascot"
            className="inline-block -ml-2 w-44 md:w-72 -mt-[10rem] md:mt-[-16rem]"
          />
        </div>

        <div className="mt-6 md:mt-8">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-800">
            70+ INDOOR PLAYGROUNDS
          </h2>
          <p className="text-lg md:text-2xl font-extrabold text-purple-800">
            Where age is just a number, but fun never gets old
          </p>
        </div>

        <div className="bg-white mx-4 md:mx-auto mt-10 md:mt-12 p-4 md:p-6 max-w-4xl rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0 md:mr-6">
            <img
              src={pencilIcon}
              alt="Pencil Icon"
              className="w-14 md:w-20 h-14 md:h-20"
            />
          </div>
          <div className="flex-grow text-left">
            <h3 className="text-2xl md:text-4xl text-purple-700 font-fontdinerdotcom mb-3">
              VISIT KIDS EMPIRE EFFICIENTLY!
            </h3>
            <p className="text-lg md:text-2xl font-bold text-gray-700 leading-relaxed">
              Save time by signing your waiver online.
            </p>
            <p className="text-md md:text-lg font-semibold text-gray-700 leading-relaxed">
              Speed up your entry by signing our waiver ahead of time, you just
              need to select your location and fill out the form. Maximize
              playtime, minimize wait time! Waiver mandatory for every child and
              adult attending Kids Empire.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full flex items-center"
              onClick={() => setIsFormOpen(true)}
            >
              Sign your waiver
              <FiArrowRight className="ml-2 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Maze Section */}
      <section className="relative bg-yellow-500 py-16 px-4 md:py-12">
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
              d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,170.7C672,181,768,203,864,218.7C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-[110rem] mx-auto">
          <div className="text-left w-full md:w-1/2 mb-12">
            <h3 className="text-sm font-bold text-purple-900 uppercase tracking-[2px] font-Montserrat">
              Our Playground
            </h3>
            <div className="flex justify-between relative">
              <h1 className="text-[70px] sm:text-[90px] text-white leading-tight text-fontdinerdotcom mb-2 sm:mb-1 sm:-mt-8">
                The Maze
              </h1>
              {/* Monkey Mascot on the right side, hidden on mobile */}
              <img
                src={mascotImage}
                alt="Monkey Mascot"
                className="hidden md:block w-32 sm:w-44 md:w-60 md:mt-[-6rem] ml-[28rem] absolute"
              />
            </div>
            <p className="text-lg sm:text-xl font-extrabold text-purple-800 mb-4 sm:mb-6 font-Montserrat sm:mr-[26rem]">
              Active play is incredibly beneficial for kids. At Kids Empire, we
              have created the perfect place to let out all that great kid
              energy and Play Big!
            </p>
          </div>

          {/* Activities List */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full md:w-[50.666666%] mx-auto">
            <ul className="space-y-4 sm:space-y-6">
              {activitiesData.map((activity, index) => (
                <div key={index}>
                  <div
                    className="flex flex-row sm:flex-row items-center justify-between cursor-pointer py-4"
                    onClick={() => toggleActivity(index)}
                  >
                    <h4 className="text-xl sm:text-2xl font-bold text-purple-700 font-Absortile-Bold">
                      {activity.title}
                    </h4>
                    {activeIndex === index ? (
                      <FiMinus className="text-pink-500 text-3xl" />
                    ) : (
                      <FiPlus className="text-pink-500 text-3xl" />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="flex flex-col items-start sm:flex-row sm:items-start mt-4">
                      <div className="w-full sm:w-1/2">
                        <p className="text-base sm:text-lg text-gray-700 font-Montserrat font-semibold leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                      <div className="w-full sm:w-1/2 mt-4 sm:mt-0 relative ">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="object-cover rounded-lg sm:absolute sm:rotate-[8deg] sm:top-[-5rem] sm:right-[4rem] sm:w-[21rem] sm:h-[18rem]"
                          style={{ boxShadow: "10px 10px green" }}
                        />
                      </div>
                    </div>
                  )}
                  <hr className="my-4" />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* TOTS Section */}
      <section className="relative bg-yellow-500 py-16 px-4 md:py-12 -mb-[32px]">
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
              d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,170.7C672,181,768,203,864,218.7C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-[110rem] mx-auto">
          <div className="text-left w-full md:w-1/2 mb-12">
            <h3 className="text-sm font-bold text-purple-900 uppercase tracking-[2px] font-Montserrat">
              Our Playground
            </h3>
            <div className="flex justify-between relative">
              <h1 className="text-[70px] sm:text-[90px] text-white leading-tight text-fontdinerdotcom mb-2 sm:mb-1 sm:-mt-8">
                TOTS
              </h1>
              {/* Monkey Mascot on the right side, hidden on mobile */}
              <img
                src={mascotImage}
                alt="Monkey Mascot"
                className="hidden md:block w-32 sm:w-44 md:w-60 md:mt-[-6rem] ml-[28rem] absolute"
              />
            </div>
            <p className="text-lg sm:text-[1.6rem] font-extrabold text-purple-800 mb-[-0.5rem] sm:mb-6 font-Montserrat sm:mr-[26rem]">
              Even the smallest kids in diapers like to Play Big. They’ll love
              discovering new ways to climb up, down, and all-around
              age-appropriate structures made just for tots
            </p>
          </div>

          {/* Activities List */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full md:w-[50.666666%] mx-auto">
            <ul className="space-y-4 sm:space-y-6">
              {TotsData.map((activity, index) => (
                <div key={index}>
                  <div
                    className="flex flex-row sm:flex-row items-center justify-between cursor-pointer py-4"
                    onClick={() => toggleActivity(index)}
                  >
                    <h4 className="text-xl sm:text-2xl font-bold text-purple-700 font-Absortile-Bold">
                      {activity.title}
                    </h4>
                    {activeIndex === index ? (
                      <FiMinus className="text-pink-500 text-3xl" />
                    ) : (
                      <FiPlus className="text-pink-500 text-3xl" />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="flex flex-col items-start sm:flex-row sm:items-start mt-4">
                      <div className="w-full sm:w-1/2">
                        <p className="text-base sm:text-lg text-gray-700 font-Montserrat font-semibold leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                      <div className="w-full sm:w-1/2 mt-4 sm:mt-0 relative ">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="object-cover rounded-lg sm:absolute sm:rotate-[8deg] sm:top-[-5rem] sm:right-[4rem] sm:w-[21rem] sm:h-[18rem]"
                          style={{ boxShadow: "10px 10px green" }}
                        />
                      </div>
                    </div>
                  )}
                  <hr className="my-4" />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* center image */}
      <section className="relative bg-white text-center">
        <div className="w-full flex justify-center my-8">
          <img
            src={centerImage}
            alt="Center Image"
            className="max-w-full h-auto w-[100vw]"
          />
        </div>
      </section>
      {/* Field Trips */}
      <section className="bg-white py-12 md:pt-0 pb-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-sm font-bold text-purple-700 uppercase tracking-[2px] font-Montserrat mb-2">
              10+ Kids?
            </h3>
            <h1 className="text-6xl md:text-7xl text-purple-900 font-baby-gemoy leading-tight mb-6">
              Field Trips
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Have a big group that wants to Play Big?
            </h3>
            <p className="text-lg md:text-2xl font-semibold text-gray-700 mb-8">
              We love to host organizations and groups of 10+ kids. We have a
              variety of different options for all types of groups. Just fill in
              our contact form and someone from our support team will call you
              back.
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
              onClick={() => setIsFormOpen(true)}
            >
              Fill in our form
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <div className="relative">
              <img
                src={Another} // Using the imported image here
                alt="Field Trips"
                className="w-full h-auto rounded-lg border-4"
                style={{ boxShadow: "10px 10px green" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Snaks */}
      <section className="bg-[#e0f7fa] py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-sm font-bold text-purple-700 uppercase tracking-[2px] font-Montserrat mb-2">
              Feeling Hungry?
            </h3>
            <h1 className="text-5xl md:text-7xl text-purple-900  font-baby-gemoy leading-tight mb-6">
              Everyone Loves a Snack
            </h1>
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-8 font-Montserrat">
              For a quick nibble or a tasty treat, make sure to stop by our
              snack bar. We have a special Kids Menu designed to please even the
              fussiest snackers (and their parents)! If you’ve worked up an even
              bigger appetite, you can just sign out, enjoy a meal nearby, and
              then get right back to playing! Your ticket is good for
              readmission all day.
            </p>

            {/* Price and Details */}
            <h3 className="text-4xl md:text-5xl text-purple-800 mb-4  text-fontdinerdotcom">
              Cheap Rate Snack Box
            </h3>
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              POCOLOCO comes with:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 font-bold">✔</span>
                <p className="ml-2">Doritos, Cheetos, or Lay’s</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold">✔</span>
                <p className="ml-2">
                  String cheese, snack pack, or apple sauce
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold">✔</span>
                <p className="ml-2">Capri-Sun, Honest Juice drink, or water</p>
              </li>
            </ul>
            <p className="text-lg font-bold text-purple-700 mt-6">
              Plus FREE LOLLIPOP AND 5 FLAMES (ADDED TO YOUR CARD)
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <div className="relative">
              <img
                src={Another} // Use the snack box image
                alt="Snack Box"
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "10px 10px #7A40DB" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Souviner */}
      <section className="relative bg-white py-16 px-4 md:py-20 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section - Title, Description */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-[#7A40DB] uppercase tracking-widest mb-2">
              KIDS EMPIRE GOODIES
            </h3>
            <h1 className="text-7xl text-[#7A40DB] mb-4 text-fontdinerdotcom">
              SOUVENIR
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              You can also find in our park
            </h2>
            <p className="text-xl font-medium text-gray-800 mb-8 font-Montserrat">
              Want to keep a souvenir when leaving the park or needing more
              things to entertain your children during your visit? We offer a
              selection of goodies for your comfort and your child&apos;s fun!
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={Another}
              alt="Kids Empire Souvenir"
              className="w-full object-cover rounded-lg shadow-lg"
              style={{ boxShadow: "10px 10px #7A40DB" }}
            />
          </div>
        </div>
      </section>
      <Testimonial/>
    </div>
  );
};

export default Home;
