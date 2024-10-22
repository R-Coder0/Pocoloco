import  { useState } from 'react';
import EnquiryForm from './EnquiryForm'; // Import the EnquiryForm component

const BookNowButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to toggle enquiry form

  // Toggle form visibility
  const handleButtonClick = () => {
    setIsFormOpen(true); // Open the form when the button is clicked
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <div>
      {/* Floating Book Now Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-lg flex flex-col items-center justify-center w-28 h-28 border-4 border-white"
          onClick={handleButtonClick} // Open the form on click
        >
          <span className="text-center text-lg mb-2">
            Book Now
          </span>
        </button>
      </div>

      {/* Render EnquiryForm when isFormOpen is true */}
      {isFormOpen && (
        <EnquiryForm closeForm={handleCloseForm} /> 
      )}
    </div>
  );
};

export default BookNowButton;
