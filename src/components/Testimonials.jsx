import profile from '../assets/profile.jpg'
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
      {
        name: "John Doe",
        title: "Parent of 2 kids",
        feedback: "Awesome Fun at Poco Loco Kids Play Area in Pitampura! Had a fantastic time at this trampoline park in Delhi. The place is spacious, full of exciting activities, and perfect for a fun day out. It's definitely the best play zone near me for some adventure and entertainment. Highly recommend!",
        image: profile,
      },
      {
        name: "Jane Smith",
        title: "Mother of 3",
        feedback: "Perfect Venue for Birthday Parties!Celebrated a birthday at Poco Loco Kids Play Area in Pitampura, and it was such a fun experience! The trampoline park in Rohini is a hit, with zipline and other activities. If you’re looking for the best birthday party places near me, this is the spot!",
        image: profile,
      },
      {
        name: "Emma Wilson",
        title: "Teacher",
        feedback: "Top Play Zone in Delhi! If you’re looking for the best play zone in Delhi, Poco Loco is the place. With trampolines, a zipline, and a massive play area, it’s the ideal spot for a day of fun. Definitely one of the best trampoline parks near me for a thrilling experience!",
        image: profile,
      },
    ];
  
    return (
        <section className="py-16 bg-gradient-to-r from-purple-100 via-white to-yellow-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl text-purple-700 mb-12 text-fontdinerdotcom">What Our Customers Say</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 text-yellow-500 text-4xl">
                  <FaStar />
                </div>
                <div className="absolute -top-4 -right-4 text-yellow-500 text-4xl">
                  <FaStar />
                </div>
  
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} avatar`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-300 shadow-lg"
                />
                <h3 className="text-2xl font-semibold text-purple-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-bold">{testimonial.title}</p>
  
                {/* Feedback in a speech bubble */}
                <div className="relative bg-yellow-100 p-4 rounded-xl text-left text-gray-700 shadow-md">
                  <span className="absolute -top-2 left-2 w-6 h-6 bg-yellow-100 transform rotate-45"></span>
                  <p className="text-lg font-Montserrat">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  