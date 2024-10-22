import {
  FaSmile,
  FaBullseye,
  FaMagic,
  FaLinkedin,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import aboutHeroImage from "../assets/gallery-hero.jpg"; // Hero section image
import visionImage from "../assets/explore.jpg"; // Vision section image
import missionImage from "../assets/kidsClimbing.jpg";
import sectionImage from "../assets/kidsClimbing.jpg"; // Mission section image
import Testimonial from "../components/Testimonials";
import founderImage from '../assets/profile.jpg'
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-yellow-500 py-48 text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto relative z-10 text-white">
          <h1 className="md:text-7xl text-5xl mb-4 font-baby-gemoy">
            About Us
          </h1>
          <p
            className="text-2xl font-semibold font-swanky"
            style={{ letterSpacing: "8px" }}
          >
            We’d love to hear from you! Reach out to us with any questions,
            comments, or fun ideas!
          </p>
        </div>
      </section>
      {/* Our ABout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Text Side */}
          <div className="w-full md:w-1/2 pr-[0.5rem] pl-[0.5rem]">
            <h2 className="text-6xl text-[#eab308] mb-4 text-fontdinerdotcom">
              WELCOME TO POCOLOCO
            </h2>
            <p className="text-lg leading-relaxed font-bold text-gray-700 font-Montserrat">
              We are passionate about your children&apos;s enjoyment and safety,
              and we take strong steps to provide an unforgettable experience at
              Pocoloco. Our playground is designed to cater to all kinds of
              imaginative play, adventure, and creative learning, while ensuring
              that parents can relax and watch their kids have the time of their
              lives.
            </p>

            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-purple-900 mb-2">
                Focus on Fun and Safety
              </h3>
              <p className="text-lg text-gray-600 font-Montserrat">
                At Pocoloco, we believe in providing the safest environment
                while encouraging creativity and adventure. Every game, every
                corner of the play zone is carefully designed to ensure both fun
                and safety for kids of all ages.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-purple-900 mb-2">
                Commitment to Quality
              </h3>
              <p className="text-lg text-gray-600 font-Montserrat">
                We take pride in offering high-quality experiences. From our
                play equipment to our friendly staff, everything at Pocoloco is
                geared towards providing the best experience possible for your
                kids.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={sectionImage}
              alt="Pocoloco Kids Play Area"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col md:flex-row w-full h-auto">
        {/* Left Side: Heading with Background */}
        <div className="w-full md:w-1/2 bg-violet-700 text-white flex items-center justify-center p-12 font-swanky">
          <h2 className="text-6xl font-bold leading-tight text-center">
            We Build <br /> Future
          </h2>
        </div>

        {/* Right Side: Descriptive Text */}
        <div className="w-full md:w-1/2 bg-green-100 flex items-center p-12">
          <p className="text-xl leading-relaxed text-black font-semibold font-Montserrat">
            At <b>Pocoloco Kids Play Zone</b>, we believe in creating a space
            where fun meets learning! Our state-of-the-art play facilities
            encourage children to explore, grow, and ignite their creativity.
            From climbing walls to interactive games, our environment is
            designed to be safe, engaging, and packed with adventure.
            <br />
            <br />
            Come and watch your child build new skills, make friends, and most
            importantly, have fun in a world full of colors and imagination!
          </p>
        </div>
      </section>
      {/* Vision Section */}
      <section className="bg-purple-100 py-16 px-4">
        <div className="max-w-[93rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={visionImage}
              alt="Kids playing in playground"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-6xl text-purple-700 mb-4 text-fontdinerdotcom">
              Our Vision
            </h2>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              At <b>Pocoloco Kids Play Zone</b>, our vision is to be the
              ultimate destination where children can let their imaginations
              soar. We create an environment that fosters creativity,
              exploration, and development.
            </p>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              We aim to inspire children to dream big, play bigger, and create
              memories that will last a lifetime. Our carefully designed play
              structures and activities are crafted to support their growth,
              both physically and mentally.
            </p>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              From interactive games to exciting learning spaces,{" "}
              <b>Pocoloco</b> provides endless opportunities for your child to
              learn, explore, and make friends, all while having fun in a safe
              and engaging environment.
            </p>
            <p
              className="text-xl text-gray-700 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              We believe in nurturing every child&apos;s potential and offering
              a world full of adventure, fun, and learning—where every visit to{" "}
              <b>Pocoloco</b> becomes a cherished memory.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#eab308] py-16 px-4">
        <div className="max-w-[93rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-6xl text-purple-700 mb-4 text-fontdinerdotcom">
              Our Mission
            </h2>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              At <b>Pocoloco Kids Play Zone</b>, our vision is to be the
              ultimate destination where children can let their imaginations
              soar. We create an environment that fosters creativity,
              exploration, and development.
            </p>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              We aim to inspire children to dream big, play bigger, and create
              memories that will last a lifetime. Our carefully designed play
              structures and activities are crafted to support their growth,
              both physically and mentally.
            </p>
            <p
              className="text-xl text-gray-700 mb-4 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              From interactive games to exciting learning spaces,{" "}
              <b>Pocoloco</b> provides endless opportunities for your child to
              learn, explore, and make friends, all while having fun in a safe
              and engaging environment.
            </p>
            <p
              className="text-xl text-gray-700 leading-relaxed font-Montserrat"
              style={{ fontWeight: "600" }}
            >
              We believe in nurturing every child&apos;s potential and offering
              a world full of adventure, fun, and learning—where every visit to{" "}
              <b>Pocoloco</b> becomes a cherished memory.
            </p>
          </div>
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={missionImage}
              alt="Kids playing in playground"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl text-purple-600 mb-4 text-fontdinerdotcom">
            Our Core Values
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-Montserrat">
            At Pocoloco, we believe in fostering an environment built on
            creativity, inclusivity, and safety. Our values are at the heart of
            everything we do, and we strive to instill these values in every
            child who visits our play zone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-yellow-100 rounded-lg shadow-lg">
              <FaSmile className="text-purple-600 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Creativity</h3>
              <p className="text-lg">
                Encouraging imaginative play and creativity in every child.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-yellow-100 rounded-lg shadow-lg">
              <FaBullseye className="text-purple-600 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Safety</h3>
              <p className="text-lg">
                Providing a safe and secure environment for kids to explore
                freely.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-yellow-100 rounded-lg shadow-lg">
              <FaMagic className="text-purple-600 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Inclusivity</h3>
              <p className="text-lg">
                Welcoming kids of all backgrounds to join the fun.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder */}
      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Image Side */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={founderImage}
              alt="Founder"
              className="rounded-full h-72 w-72 object-cover shadow-lg"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 pl-8">
            <h2 className="text-6xl text-purple-700 mb-4 text-fontdinerdotcom">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-Montserrat mb-4">
              <b>Shruti Gupta</b>, the visionary behind Pocoloco, has dedicated her
              life to creating spaces where children can learn, grow, and have
              fun. With over 20 years of experience in child development and
              recreational facilities, Jane ensures that every aspect of
              Pocoloco reflects her passion for providing safe and engaging play
              environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-Montserrat mb-4">
              Jane’s vision for Pocoloco goes beyond just play. She believes in
              building communities where parents and children can come together
              to create lasting memories. Under her leadership, Pocoloco has
              grown into a trusted destination for families, known for its
              innovation, quality, and commitment to child development.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/__.pocoloco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566521165389"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
};

export default About;
