import { useState } from 'react';
import { FaPaintBrush, FaSwimmer, FaTree, FaBasketballBall, FaMusic, FaPuzzlePiece, FaStar, FaSmile } from 'react-icons/fa'; // Added extra icons
import sectionImage from '../assets/explore.jpg';
import hero from '../assets/Hero/Activity-hero.jpg';
import EnquiryForm from '../components/EnquiryForm'; // Import the EnquiryForm component

const Activities = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage enquiry form visibility

  const activities = [
    {
      name: "Creative Arts",
      description: "Let your kids express themselves with paint, drawing, and various other arts and crafts.",
      icon: <FaPaintBrush className="text-yellow-500 text-6xl" />,
    },
    {
      name: "Swimming Fun",
      description: "Supervised swimming activities for your children in our kid-friendly pools.",
      icon: <FaSwimmer className="text-blue-500 text-6xl" />,
    },
    {
      name: "Outdoor Adventure",
      description: "Climbing walls, zip lines, and other outdoor activities that will challenge your child’s adventurous spirit.",
      icon: <FaTree className="text-green-500 text-6xl" />,
    },
    {
      name: "Sports Games",
      description: "Fun, engaging sports activities such as basketball, soccer, and much more.",
      icon: <FaBasketballBall className="text-orange-500 text-6xl" />,
    },
    {
      name: "Music & Dance",
      description: "Let your kids discover rhythm and movement with our music and dance activities.",
      icon: <FaMusic className="text-purple-500 text-6xl" />,
    },
    {
      name: "Puzzles & Games",
      description: "Boost your child's critical thinking with interactive puzzles and mind-boggling games.",
      icon: <FaPuzzlePiece className="text-red-500 text-6xl" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-yellow-500 py-48 text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto relative z-10 text-white">
          <h1 className="md:text-7xl text-5xl mb-4 font-baby-gemoy">Activities</h1>
          <p className="text-2xl font-semibold font-swanky" style={{ letterSpacing: '8px' }}>
            Explore a wide variety of fun and educational activities designed to ignite your child’s imagination!
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-700 mb-12 text-fontdinerdotcom">Exciting Activities for Every Child</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">{activity.icon}</div>
                <h3 className="text-3xl font-bold text-purple-900 mb-4">{activity.name}</h3>
                <p className="text-lg text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pocoloco Section */}
      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Text Side */}
          <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-5xl font-bold text-purple-700 mb-8 text-fontdinerdotcom">Why Choose Pocoloco?</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <FaStar className="text-yellow-500 text-4xl mr-4" />
                <p className="text-lg leading-relaxed font-bold text-gray-700">
                  Safe, supervised environment where children can explore and have fun.
                </p>
              </li>
              <li className="flex items-start">
                <FaSmile className="text-purple-500 text-4xl mr-4" />
                <p className="text-lg leading-relaxed text-gray-700">
                  Friendly and professional staff dedicated to making every visit special.
                </p>
              </li>
              <li className="flex items-start">
                <FaTree className="text-green-500 text-4xl mr-4" />
                <p className="text-lg leading-relaxed text-gray-700">
                  Diverse range of activities that inspire creativity, learning, and adventure.
                </p>
              </li>
              <li className="flex items-start">
                <FaPaintBrush className="text-red-500 text-4xl mr-4" />
                <p className="text-lg leading-relaxed text-gray-700">
                  Hands-on creative arts programs that let kids express themselves.
                </p>
              </li>
              <li className="flex items-start">
                <FaBasketballBall className="text-orange-500 text-4xl mr-4" />
                <p className="text-lg leading-relaxed text-gray-700">
                  A variety of sports activities that promote physical activity and teamwork.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Image Side */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={sectionImage}
              alt="Happy children at Pocoloco"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Promotional Section with Image and Booking Button */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Side */}
          <div className="w-full md:w-1/2 pr-[0.5rem] pl-[0.5rem] text-center md:text-left">
            <h2 className="text-6xl text-[#eab308] mb-4 text-fontdinerdotcom">Join the Fun at Pocoloco!</h2>
            <p className="text-lg leading-relaxed font-bold text-gray-700 font-Montserrat">
              Whether your child loves arts, sports, or adventure, Pocoloco has something for everyone. We are committed to providing the best environment for your children to learn, play, and grow.
            </p>
            <button
              onClick={() => setIsFormOpen(true)} // Open the enquiry form
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 px-6 rounded-full font-bold mt-8 shadow-md"
            >
              Book an Activity
            </button>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={sectionImage}
              alt="Children at Pocoloco"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {isFormOpen && (
        <EnquiryForm closeForm={() => setIsFormOpen(false)} /> // Pass function to close the form
      )}
    </div>
  );
};

export default Activities;
