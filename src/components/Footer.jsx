import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import mascotImage from "../assets/monkey.png"; // Use the mascot image
import logoImage from "../assets/Pocoloco.png"; // Use Pocoloco logo

const Footer = () => {
    return (
      <footer className="relative bg-yellow-500 py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Mascot */}
          <div className="flex justify-center items-center mb-14 -mt-[4rem]">
            <h2 className="text-6xl md:text-7xl font-bold text-purple-600 inline-block font-baby-gemoy">
              POCO <br />LOCO
            </h2>
            <img
              src={mascotImage}
              alt="Monkey Mascot"
              className="inline-block w-32 md:w-48"
            />
          </div>
  
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" >
            {/* Logo and Tagline */}
            <div className="text-center md:text-left -mt-[5rem] hidden md:block">
              <img
                src={logoImage}
                alt="Pocoloco Logo"
                className="mx-auto md:mx-0 h-16 md:h-20 mb-4"
              />
              <p className="text-lg">
              Pocoloco is a vibrant and exciting kids play zone, designed to spark imagination, creativity, and endless fun. Our mission is to create a safe, joyful space where children can explore, learn, and play big every day!
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="text-center md:text-left md:ml-[45px]">
              <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-lg">
                <li className="text-[1.2rem]">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/about" className="hover:underline">
                    Activities
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/about" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Policies */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Policies</h3>
              <ul className="space-y-2 text-lg">
                <li className="text-[1.2rem]">
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/terms" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li className="text-[1.2rem]">
                  <a href="/refund" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Us */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p className="text-[1.2rem]"> Address: <a href="https://maps.app.goo.gl/gKDCjmb4Uy1YtQf96">PocoLoco, Outer Ring Rd, near Aura Banquet hall, Block BU, Ranikhet, Pitampura, Delhi, 110034</a> </p>
              <p className="text-[1.2rem]">
                Email:{" "}
                <a href="mailto:info@pocoloco.com" className="underline">
                  info@pocoloco.com
                </a>
              </p>
              <p className="text-[1.2rem]">
                Phone:{" "}
                <a href="tel:917827571775" className="underline">
                  +91 7827 571 775
                </a>
              </p>
            </div>
          </div>
  
          {/* Social Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61566521165389" className="hover:text-gray-200">
              <FaFacebookF className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/__.pocoloco/" className="hover:text-gray-200">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-200">
              <FaTwitter className="text-3xl" />
            </a>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 text-lg text-center text-white">
            <p>© 2024 Pocoloco. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

// 7827571775