import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

// eslint-disable-next-line react/prop-types
const EnquiryForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form inputs
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service credentials (replace with your own)
    const serviceId = 'service_lynjw5r';
    const templateId = 'template_mt3id96';
    const userId = 'gQzRVH2zS7vhP5goT';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
        setIsSubmitting(false);
        closeForm(); // Close form after successful submission
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded-lg"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
