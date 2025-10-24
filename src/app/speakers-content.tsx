// "use client";

// import {
//   Tab,
//   Tabs,
//   TabsHeader,
// } from "@material-tailwind/react";

// import { Typography, Button } from "@material-tailwind/react";


// import EventContentCard from "@/components/event-content-card";


// const SPEAKERS_CONTENT = [
//   {
//     title: "AI's Role in Shaping the Future",
//     des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Panel Discussion",
//     img: "/image/avatar1.jpg",
    
//   },
//   {
//     title: "Introduction to Machine Learning",
//     des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Workshop",
//     img: "/image/avatar2.jpg",
//   },
//   {
//     title: "AI in Healthcare: Revolutionizing Patient Care",
//     des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
//     name: "Marcell Glock",
//     position: "Chief Executive, Spotify",
//     panel: "Workshop",
//     img: "/image/avatar3.jpg",
//   },
// ];

// export function SpeakersContent() {
//   return (
//     <section className="py-8 px-8 lg:py-20">
//       <div className="mx-auto container">
//         {SPEAKERS_CONTENT.map((props, idx) => (
//           <EventContentCard key={idx} {...props} />
//         ))}


//         <br>
//         </br>
//         <br>
//         </br>
//         <br>
//         </br>
//         <br>
//         </br>
        
//         <div className="mt-12 text-center">
//           <Typography variant="h3" color="blue-gray" className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)} >
//             Contacting Us
//           </Typography>
//           <Typography variant="paragraph" color="gray" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)}>
//             If you would like to learn more or are interested in speaking at the conference, please contact us at{" "}
//             <a href="mailto:cirque@engsoc.queensu.ca" className="text-blue-600 underline">
//               fyic@engsoc.queensu.ca
//             </a>.
//           </Typography>
//         </div>


//       </div>

//         <br>
//         </br>
//         <br>
//         </br>
//         <br>
//         </br>
//         <br>
//         </br>

//     </section>
//   );
// }

// export default SpeakersContent;


// //

// "use client";

// import { Typography } from "@material-tailwind/react";
// import { useState, useEffect } from "react";

// export function SpeakersContent() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const images = Array.from({ length: 11 }, (_, i) => 
//     `/image/speaker-workshop-info-${i + 1}.png`
//   );

//   const openImage = (index: number) => {
//     setSelectedImage(index);
//     setCurrentIndex(index);
//     setZoomLevel(1);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//     setZoomLevel(1);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//     setZoomLevel(1);
//   };

//   const handleWheel = (e: React.WheelEvent) => {
//     if (e.deltaY < 0) {
//       // Scroll up - zoom in
//       setZoomLevel(prev => Math.min(prev + 0.1, 3));
//     } else {
//       // Scroll down - zoom out
//       setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (selectedImage !== null) {
//       if (e.key === 'Escape') {
//         closeImage();
//       } else if (e.key === 'ArrowRight') {
//         nextImage();
//       } else if (e.key === 'ArrowLeft') {
//         prevImage();
//       } else if (e.key === ' ') {
//         e.preventDefault();
//         setZoomLevel(1);
//       }
//     }
//   };

//   // Thumbnail carousel drag functionality
//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setStartX(e.pageX - e.currentTarget.offsetLeft);
//     setScrollLeft(e.currentTarget.scrollLeft);
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - e.currentTarget.offsetLeft;
//     const walk = (x - startX) * 2;
//     e.currentTarget.scrollLeft = scrollLeft - walk;
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [selectedImage]);

//   return (
//     <section className="py-8 px-8 lg:py-20">
//       <div className="container mx-auto">
//         {/* Gallery Header */}
//         <div className="text-center mb-12">
//           <Typography
//             variant="h2"
//             color="blue-gray"
//             className="font-bold mb-4"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             {...({} as any)}
//           >
//             Speaker & Workshop Information
//           </Typography>
//           <Typography
//             variant="lead"
//             color="gray"
//             className="max-w-3xl mx-auto"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             {...({} as any)}
//           >
//             Explore our comprehensive speaker sessions and workshops information as well as other relevant information for "THE BANQUET", "CASE COMPETITION", and "NETWORKING BREAKFAST" through the interactive gallery below
//           </Typography>
//         </div>

//         {/* Image Gallery */}
//         <div className="mt-8">
//           <Typography
//             variant="h4"
//             color="blue-gray"
//             className="mb-6 text-center"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             {...({} as any)}
//           >
//             Browse Through Our Speaker Sessions, Workshops, and other relevant information (e.g., THE BANQUET, CASE COMPETITION, and NETWORKING BREAKFAST)
//           </Typography>

//           {/* Thumbnail Carousel */}
//           <div 
//             className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide cursor-grab active:cursor-grabbing"
//             onMouseDown={handleMouseDown}
//             onMouseLeave={handleMouseLeave}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//           >
//             {images.map((src, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-48 h-64 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
//                 onClick={() => openImage(index)}
//               >
//                 <img
//                   src={src}
//                   alt={`Speaker Workshop Info ${index + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
//                   <Typography
//                     variant="small"
//                     className="font-semibold"
//                     style={{ fontFamily: "Montserrat, sans-serif" }}
//                     {...({} as any)}
//                   >
//                     Slide {index + 1}
//                   </Typography>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Instructions */}
//           <div className="text-center mt-4">
//             <Typography
//               variant="small"
//               color="gray"
//               className="italic"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//               {...({} as any)}
//             >
//               Click on any slide to open the magazine viewer • Drag to scroll through thumbnails
//             </Typography>
//           </div>
//         </div>

//         {/* Magazine Popup Modal */}
//         {selectedImage !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//             {/* Close Button */}
//             <button
//               onClick={closeImage}
//               className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
//             >
//               ×
//             </button>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
//             >
//               ‹
//             </button>

//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
//             >
//               ›
//             </button>

//             {/* Zoom Controls */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//               <button
//                 onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
//                 className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
//               >
//                 Zoom Out
//               </button>
//               <button
//                 onClick={() => setZoomLevel(1)}
//                 className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
//               >
//                 Reset Zoom
//               </button>
//               <button
//                 onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
//                 className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
//               >
//                 Zoom In
//               </button>
//             </div>

//             {/* Current Image Info */}
//             <div className="absolute top-4 left-4 text-white z-10 bg-black bg-opacity-50 rounded-lg px-3 py-2">
//               <Typography
//                 variant="small"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//                 {...({} as any)}
//               >
//                 Slide {currentIndex + 1} of {images.length}
//               </Typography>
//             </div>

//             {/* Image Container */}
//             <div 
//               className="max-w-full max-h-full overflow-auto cursor-zoom-in"
//               onWheel={handleWheel}
//             >
//               <img
//                 src={images[currentIndex]}
//                 alt={`Speaker Workshop Info ${currentIndex + 1}`}
//                 className="transition-transform duration-200"
//                 style={{
//                   transform: `scale(${zoomLevel})`,
//                   maxWidth: '90vw',
//                   maxHeight: '90vh',
//                   objectFit: 'contain'
//                 }}
//               />
//             </div>

//             {/* Instructions for Modal */}
//             <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 rounded-lg px-3 py-2 z-10">
//               <Typography
//                 variant="small"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//                 {...({} as any)}
//               >
//                 Scroll to zoom • Arrows to navigate • Space to reset
//               </Typography>
//             </div>
//           </div>
//         )}

//         {/* Contacting Us Section */}
//         <div className="mt-16 text-center">
//           <Typography
//             variant="h3"
//             color="blue-gray"
//             className="mb-4"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             {...({} as any)}
//           >
//             Contacting Us
//           </Typography>
//           <Typography
//             variant="paragraph"
//             color="gray"
//             className="text-lg"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             {...({} as any)}
//           >
//             If you would like to learn more or are interested in speaking at the
//             conference, please contact us at{" "}
//             <a
//               href="mailto:fyic@engsoc.queensu.ca"
//               className="text-blue-600 underline hover:text-blue-800 transition-colors"
//             >
//               fyic@engsoc.queensu.ca
//             </a>
//             .
//           </Typography>
//         </div>
//       </div>

//       {/* Custom CSS for hiding scrollbar */}
//       <style jsx global>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default SpeakersContent;




"use client";

import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export function SpeakersContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = Array.from({ length: 11 }, (_, i) => 
    `/image/speaker-workshop-info-${i + 1}.png`
  );

  const openImage = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
    setZoomLevel(1);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      // Scroll up - zoom in
      setZoomLevel(prev => Math.min(prev + 0.1, 3));
    } else {
      // Scroll down - zoom out
      setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === ' ') {
        e.preventDefault();
        setZoomLevel(1);
      }
    }
  };

  // Thumbnail carousel drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...({} as any)}
          >
            Speaker & Workshop Information
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="max-w-3xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...({} as any)}
          >
            Explore our comprehensive speaker sessions and workshops information as well as other relevant information for "THE BANQUET", "CASE COMPETITION", and "NETWORKING BREAKFAST" through the interactive gallery below
          </Typography>
        </div>

        {/* Image Gallery */}
        <div className="mt-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-6 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...({} as any)}
          >
            Browse Through Our Speaker Sessions, Workshops, and other relevant information (e.g., THE BANQUET, CASE COMPETITION, and NETWORKING BREAKFAST)
          </Typography>

          {/* Thumbnail Carousel */}
          <div 
            className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-64 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
                onClick={() => openImage(index)}
              >
                <img
                  src={src}
                  alt={`Speaker Workshop Info ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  <Typography
                    variant="small"
                    className="font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    {...({} as any)}
                  >
                    Slide {index + 1}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="text-center mt-4">
            <Typography
              variant="small"
              color="gray"
              className="italic"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              {...({} as any)}
            >
              Click on any slide to open the magazine viewer • Drag to scroll through thumbnails
            </Typography>
          </div>

          {/* DDQIC Link Section */}
          <div className="text-center mt-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                {...({} as any)}
              >
                Want to Learn More About DDQIC?
              </Typography>
              <Typography
                variant="paragraph"
                color="gray-700"
                className="mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                {...({} as any)}
              >
                Discover more about the Dunin-Deshpande Queen's Innovation Centre and their initiatives.
              </Typography>
              <a
                href="https://www.queensu.ca/innovationcentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Click Here to Learn More About DDQIC!
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Magazine Popup Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              ×
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              ›
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              <button
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
                className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
              >
                Zoom Out
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
              >
                Reset Zoom
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
                className="bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg hover:bg-opacity-70 transition-all"
              >
                Zoom In
              </button>
            </div>

            {/* Current Image Info */}
            <div className="absolute top-4 left-4 text-white z-10 bg-black bg-opacity-50 rounded-lg px-3 py-2">
              <Typography
                variant="small"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                {...({} as any)}
              >
                Slide {currentIndex + 1} of {images.length}
              </Typography>
            </div>

            {/* Image Container */}
            <div 
              className="max-w-full max-h-full overflow-auto cursor-zoom-in"
              onWheel={handleWheel}
            >
              <img
                src={images[currentIndex]}
                alt={`Speaker Workshop Info ${currentIndex + 1}`}
                className="transition-transform duration-200"
                style={{
                  transform: `scale(${zoomLevel})`,
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Instructions for Modal */}
            <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 rounded-lg px-3 py-2 z-10">
              <Typography
                variant="small"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                {...({} as any)}
              >
                Scroll to zoom • Arrows to navigate • Space to reset
              </Typography>
            </div>
          </div>
        )}

        {/* Contacting Us Section */}
        <div className="mt-16 text-center">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...({} as any)}
          >
            Contacting Us
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="text-lg"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            {...({} as any)}
          >
            If you would like to learn more or are interested in speaking at the
            conference, please contact us at{" "}
            <a
              href="mailto:fyic@engsoc.queensu.ca"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              fyic@engsoc.queensu.ca
            </a>
            .
          </Typography>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default SpeakersContent;
