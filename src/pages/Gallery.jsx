import { useState } from "react";
import Lightbox from "yet-another-react-lightbox"; // Lightbox for image previews
import "yet-another-react-lightbox/styles.css"; // Lightbox CSS

// Import images from your directory
import heroImage from "../assets/gallery-hero.jpg"; // Hero image for the gallery
import img1 from "../assets/Gallery/IMG-20241021-WA0002.jpg";
import img2 from "../assets/Gallery/IMG-20241021-WA0003.jpg";
import img3 from "../assets/Gallery/IMG-20241021-WA0004.jpg";
import img4 from "../assets/Gallery/IMG-20241021-WA0005.jpg";
import img5 from "../assets/Gallery/IMG-20241021-WA0006.jpg";
import img6 from "../assets/Gallery/IMG-20241021-WA0007.jpg";
import img7 from "../assets/Gallery/IMG-20241021-WA0008.jpg";

// Import video
import video1 from "../assets/Gallery/VID-20241021-WA0001.mp4";
import Testimonial from "../components/Testimonials";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Images array
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
  ];

  // Add video to the gallery
  const slides = [
    ...images, // Spread images into the slides array
    { type: 'video', src: video1 } // Add video at the end
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gallery Hero"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl text-white opacity-0 animate-fade-in-up font-baby-gemoy"
            style={{ animationDelay: '0.3s', animationDuration: '1s' }}
          >
            Our Fun Gallery
          </h1>
          <p
            className="text-lg sm:text-xl md:text-3xl text-white mt-4 opacity-0 animate-fade-in-up font-swanky"
            style={{ animationDelay: '0.6s', animationDuration: '1s', letterSpacing:'6px' }}
          >
            Explore the best moments of our Kids Play Zone. Fun, laughter, and endless memories!
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <h2 className="text-4xl sm:text-6xl md:text-8xl text-purple-800 text-center mb-8 text-fontdinerdotcom">
          Gallery Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-6xl px-4 sm:px-0">
          {slides.map((slide, index) => (
            <div key={index} className="cursor-pointer">
              {/* Render image or video based on type */}
              {slide.type === 'video' ? (
                <video
                  controls
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpen(true);
                  }}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"  // Added fixed height and object-cover to maintain size consistency
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpen(true);
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Lightbox to open images in full-screen */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={selectedIndex}
        />
      </section>
      <Testimonial/>
    </div>
  );
};

export default Gallery;
