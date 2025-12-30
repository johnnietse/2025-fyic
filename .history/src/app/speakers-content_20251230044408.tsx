// Most recent code
"use client";

import { Typography } from "@material-tailwind/react";
import { useState, useEffect, useRef } from "react";

export function SpeakersContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // New state for draggable icon
  const [iconPosition, setIconPosition] = useState({ x: 20, y: 80 });
  const [isDraggingIcon, setIsDraggingIcon] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

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
      setZoomLevel(prev => Math.min(prev + 0.1, 3));
    } else {
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
    setStartX(e.pageX - (e.currentTarget as HTMLElement).offsetLeft);
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
    const x = e.pageX - (e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  // Draggable icon functionality
  const handleIconMouseDown = (e: React.MouseEvent) => {
    if (iconRef.current) {
      setIsDraggingIcon(true);
      const rect = iconRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleIconMouseMove = (e: MouseEvent) => {
    if (!isDraggingIcon) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Constrain to viewport boundaries
    const maxX = window.innerWidth - (iconRef.current?.offsetWidth || 60);
    const maxY = window.innerHeight - (iconRef.current?.offsetHeight || 60);
    
    setIconPosition({
      x: Math.max(10, Math.min(newX, maxX)),
      y: Math.max(10, Math.min(newY, maxY))
    });
  };

  const handleIconMouseUp = () => {
    setIsDraggingIcon(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    if (isDraggingIcon) {
      document.addEventListener('mousemove', handleIconMouseMove);
      document.addEventListener('mouseup', handleIconMouseUp);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleIconMouseMove);
      document.removeEventListener('mouseup', handleIconMouseUp);
    };
  }, [selectedImage, isDraggingIcon, dragOffset]);

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
                className="flex-shrink-0 w-48 h-64 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden relative"
                onClick={() => openImage(index)}
              >
                <img
                  src={src}
                  alt={`Speaker Workshop Info ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Subtle slide indicator - removed the dark bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3">
                  <Typography
                    variant="small"
                    className="font-semibold drop-shadow-md"
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
            {/* Draggable Back to Gallery Icon */}
            <div
              ref={iconRef}
              className={`fixed z-60 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 shadow-2xl cursor-pointer transition-all duration-200 ${
                isDraggingIcon ? 'scale-110 shadow-xl' : 'hover:scale-105'
              }`}
              style={{
                left: `${iconPosition.x}px`,
                top: `${iconPosition.y}px`,
                touchAction: 'none'
              }}
              onMouseDown={handleIconMouseDown}
              onClick={(e) => {
                // Only trigger close if not dragging
                if (!isDraggingIcon) {
                  closeImage();
                }
              }}
              title="Click to go back to gallery | Drag to move"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12">
                <svg 
                  className="w-6 h-6 mb-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                <span className="text-xs font-semibold leading-none text-center">
                  Gallery
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
            >
              ×
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
            >
              ›
            </button>

            {/* Current Slide Indicator */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-black/50 backdrop-blur-sm text-white rounded-full px-4 py-2 shadow-lg">
                <Typography
                  variant="small"
                  className="font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  {...({} as any)}
                >
                  Slide {currentIndex + 1} of {images.length}
                </Typography>
              </div>
            </div>

            {/* Mobile Layout: Instructions above zoom controls */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-xs">
              {/* Instructions for Mobile - Above zoom controls */}
              <div className="text-white text-sm bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg mb-3 md:hidden">
                <Typography
                  variant="small"
                  className="font-medium text-center"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  {...({} as any)}
                >
                  Scroll to zoom • Arrows to navigate
                </Typography>
              </div>

              {/* Zoom Controls */}
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
                  className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg text-sm md:text-base"
                >
                  Zoom Out
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg text-sm md:text-base"
                >
                  Reset
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
                  className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg text-sm md:text-base"
                >
                  Zoom In
                </button>
              </div>
            </div>

            {/* Desktop Layout: Instructions in bottom right */}
            <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 z-10 shadow-lg hidden md:block">
              <Typography
                variant="small"
                className="font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                {...({} as any)}
              >
                Scroll to zoom • Arrows to navigate • Space to reset
              </Typography>
            </div>

            {/* Image Container */}
            <div 
              className="max-w-full max-h-full overflow-auto cursor-zoom-in mt-8 mb-32 md:mb-0 md:mt-0"
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
        
        /* Mobile-specific touch improvements */
        @media (max-width: 768px) and (orientation: portrait) {
          .mobile-touch-zoom {
            touch-action: pan-x pan-y pinch-zoom;
          }
        }
      `}</style>
    </section>
  );
}

export default SpeakersContent;










// Recoverable code in case if the code above doesn't work

// "use client";

// import { Typography } from "@material-tailwind/react";
// import { useState, useEffect, useRef } from "react";

// export function SpeakersContent() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
  
//   // New state for draggable icon
//   const [iconPosition, setIconPosition] = useState({ x: 20, y: 80 });
//   const [isDraggingIcon, setIsDraggingIcon] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const iconRef = useRef<HTMLDivElement>(null);

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
//       setZoomLevel(prev => Math.min(prev + 0.1, 3));
//     } else {
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

//   // Draggable icon functionality
//   const handleIconMouseDown = (e: React.MouseEvent) => {
//     if (iconRef.current) {
//       setIsDraggingIcon(true);
//       const rect = iconRef.current.getBoundingClientRect();
//       setDragOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });
//     }
//   };

//   const handleIconMouseMove = (e: MouseEvent) => {
//     if (!isDraggingIcon) return;
    
//     const newX = e.clientX - dragOffset.x;
//     const newY = e.clientY - dragOffset.y;
    
//     // Constrain to viewport boundaries
//     const maxX = window.innerWidth - (iconRef.current?.offsetWidth || 60);
//     const maxY = window.innerHeight - (iconRef.current?.offsetHeight || 60);
    
//     setIconPosition({
//       x: Math.max(10, Math.min(newX, maxX)),
//       y: Math.max(10, Math.min(newY, maxY))
//     });
//   };

//   const handleIconMouseUp = () => {
//     setIsDraggingIcon(false);
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
    
//     if (isDraggingIcon) {
//       document.addEventListener('mousemove', handleIconMouseMove);
//       document.addEventListener('mouseup', handleIconMouseUp);
//     }
    
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('mousemove', handleIconMouseMove);
//       document.removeEventListener('mouseup', handleIconMouseUp);
//     };
//   }, [selectedImage, isDraggingIcon, dragOffset]);

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
//                 className="flex-shrink-0 w-48 h-64 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden relative"
//                 onClick={() => openImage(index)}
//               >
//                 <img
//                   src={src}
//                   alt={`Speaker Workshop Info ${index + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Subtle slide indicator - removed the dark bar */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3">
//                   <Typography
//                     variant="small"
//                     className="font-semibold drop-shadow-md"
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

//           {/* DDQIC Link Section */}
//           <div className="text-center mt-8 mb-12">
//             <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
//               <Typography
//                 variant="h5"
//                 color="blue-gray"
//                 className="mb-3"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//                 {...({} as any)}
//               >
//                 Want to Learn More About DDQIC?
//               </Typography>
//               <Typography
//                 variant="paragraph"
//                 color="gray-700"
//                 className="mb-4"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//                 {...({} as any)}
//               >
//                 Discover more about the Dunin-Deshpande Queen's Innovation Centre and their initiatives.
//               </Typography>
//               <a
//                 href="https://www.queensu.ca/innovationcentre/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 Click Here to Learn More About DDQIC!
//                 <svg 
//                   className="w-4 h-4 ml-2" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth={2} 
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Magazine Popup Modal */}
//         {selectedImage !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
//             {/* Draggable Back to Gallery Icon */}
//             <div
//               ref={iconRef}
//               className={`fixed z-60 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 shadow-2xl cursor-pointer transition-all duration-200 ${
//                 isDraggingIcon ? 'scale-110 shadow-xl' : 'hover:scale-105'
//               }`}
//               style={{
//                 left: `${iconPosition.x}px`,
//                 top: `${iconPosition.y}px`,
//                 touchAction: 'none'
//               }}
//               onMouseDown={handleIconMouseDown}
//               onClick={(e) => {
//                 // Only trigger close if not dragging
//                 if (!isDraggingIcon) {
//                   closeImage();
//                 }
//               }}
//               title="Click to go back to gallery | Drag to move"
//             >
//               <div className="flex flex-col items-center justify-center w-12 h-12">
//                 <svg 
//                   className="w-6 h-6 mb-1" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth={2} 
//                     d="M10 19l-7-7m0 0l7-7m-7 7h18" 
//                   />
//                 </svg>
//                 <span className="text-xs font-semibold leading-none text-center">
//                   Gallery
//                 </span>
//               </div>
//             </div>

//             {/* Close Button */}
//             <button
//               onClick={closeImage}
//               className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
//             >
//               ×
//             </button>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
//             >
//               ‹
//             </button>

//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm"
//             >
//               ›
//             </button>

//             {/* Current Slide Indicator - Replaced the dark bar */}
//             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
//               <div className="bg-black/50 backdrop-blur-sm text-white rounded-full px-4 py-2 shadow-lg">
//                 <Typography
//                   variant="small"
//                   className="font-semibold"
//                   style={{ fontFamily: "Montserrat, sans-serif" }}
//                   {...({} as any)}
//                 >
//                   Slide {currentIndex + 1} of {images.length}
//                 </Typography>
//               </div>
//             </div>

//             {/* Zoom Controls */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//               <button
//                 onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
//                 className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg"
//               >
//                 Zoom Out
//               </button>
//               <button
//                 onClick={() => setZoomLevel(1)}
//                 className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 3))}
//                 className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all shadow-lg"
//               >
//                 Zoom In
//               </button>
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
//             <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 z-10 shadow-lg">
//               <Typography
//                 variant="small"
//                 className="font-medium"
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
