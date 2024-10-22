import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';  // Import EmailJS
import mascotImage from '../assets/monkey.png';  // Use the mascot image
import heroImage from '../assets/gallery-hero.jpg';  // Hero section image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS credentials
    const serviceID = 'service_lynjw5r';
    const templateID = 'template_mt3id96';
    const userID = 'gQzRVH2zS7vhP5goT';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Message successfully sent!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });  // Clear form after success
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-yellow-500 py-48 text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto relative z-10 text-white">
          <h1 className="md:text-7xl text-5xl mb-4 font-baby-gemoy">Contact Us</h1>
          <p className="text-2xl font-semibold font-swanky" style={{ letterSpacing: '8px' }}>
            We’d love to hear from you! Reach out to us with any questions, comments, or fun ideas!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-white to-yellow-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-white rounded-3xl shadow-xl border-4 border-purple-500 transform hover:scale-105 transition-transform">
            <h2 className="text-5xl font-bold mb-8 text-center text-purple-700">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                className="w-full p-4 mb-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                className="w-full p-4 mb-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                className="w-full p-4 mb-4 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 px-6 rounded-full w-full md:w-auto font-bold shadow-md"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <img src={mascotImage} alt="Monkey Mascot" className="w-40 mb-6 animate-bounce" />
            <h2 className="text-5xl font-bold mb-4 text-purple-700">Get In Touch</h2>
            <p className="text-xl mb-4">PocoLoco, Outer Ring Rd, near Aura Banquet hall, Block BU, Ranikhet, Pitampura, Delhi, 110034</p>
            <p className="text-xl mb-4">
              Email: <a href="mailto:info@pocoloco.com" className="text-purple-700 hover:text-purple-500">info@pocoloco.com</a>
            </p>
            <p className="text-xl mb-6"> Phone: <a href="tel:+917827571775">+91 782 757 1775</a> </p>

            <div className="flex space-x-6 text-4xl mt-6">
              <a href="https://www.facebook.com/profile.php?id=61566521165389" className="text-blue-600 hover:text-blue-800 transform hover:scale-110 transition-transform">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/__.pocoloco/" className="text-pink-600 hover:text-pink-800 transform hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-purple-700">Find Us Here</h2>
          <div className="w-full h-96 border-4 border-purple-500 shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0226943337334!2d77.13781077550401!3d28.718867775617703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01b70fdbefe9%3A0xca2c4bae0cd9a8ed!2sPoco%20Loco%20Kids%20Play%20area%20in%20Pitampura%20Delhi!5e0!3m2!1sen!2sin!4v1729510654794!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
