"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountdownTimer from "../components/CountdownTimer";
import Image from "next/image";
import { useState, useRef } from "react";

function Hero() {
  // Animation states
  const [ripple, setRipple] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; delay: number; rotation: number }[]
  >([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  const triggerEffect = () => {
    handleRipple();
    setEffectRunning(true);

    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 0.5,
      rotation: Math.random() * 60 - 30,
    }));

    setStars(newStars);

    setTimeout(() => setStars([]), 2500);
    setTimeout(() => {
      setEffectRunning(false);
      const aboutUs = document.getElementById("about-us");
      if (aboutUs) aboutUs.scrollIntoView({ behavior: "smooth" });
    }, 2700);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Video Background with Fallback */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/image/event.png"
        onError={() => {
          const fallback = document.getElementById('fallback-image');
          if (fallback) fallback.style.display = 'block';
        }}
      >
        <source src="/image/event.mp4" type="video/mp4" />
        <track kind="captions" src="" label="No captions available" />
      </video>
      <div id="fallback-image" className="absolute top-0 left-0 w-full h-full hidden">
        <Image
          src="/image/event.png"
          fill
          className="object-cover"
          alt="Fallback background"
          priority
        />
      </div>

      {/* Shooting Stars Animation */}
      {effectRunning && (
        <>
          <div className="fixed inset-0 bg-black z-40 transition-opacity duration-500" />
          {stars.map((star) => (
            <div
              key={star.id}
              className="shooting-star absolute z-50"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size * 8}px`,
                height: `${star.size * 8}px`,
                animationDelay: `${star.delay}s`,
                transform: `rotate(${star.rotation}deg)`,
              }}
            />
          ))}
        </>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70 z-10" />

      {/* Main Content - Using flex for better responsiveness */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full py-8 px-4 min-h-[100vh] box-border">
        <div className="text-center w-full max-w-5xl px-4 py-8">
          {/* Conference details - top section with accent color */}
          <div className="mb-4 sm:mb-6 bg-blue-800/30 backdrop-blur-sm rounded-lg py-3 px-4 sm:px-6 inline-block">
            <Typography
              variant="h5"
              color="white"
              className="mb-1 font-medium tracking-wider text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              {...({} as any)}
            >
              7-9 NOVEMBER @ KINGSTON
            </Typography>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="h-px w-8 sm:w-12 bg-blue-400 opacity-60 hidden sm:block"></div>
              <Typography
                variant="h4"
                color="white"
                className="font-bold text-blue-100 text-xl sm:text-2xl"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                {...({} as any)}
              >
                FYIC 2025
              </Typography>
              <div className="h-px w-8 sm:w-12 bg-blue-400 opacity-60 hidden sm:block"></div>
            </div>

            <Typography
              variant="h6"
              color="blue-100"
              className="mt-1 font-light flex items-center justify-center gap-2 text-xs sm:text-sm"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              {...({} as any)}
            >
              <span className="font-semibold text-blue-200">Presented by OSPE</span>
              <div className="relative h-4 sm:h-5 w-12 bg-white/80 p-0.5 rounded">
                <Image
                  src="/logos/ospe-logo.png"
                  alt="OSPE Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            </Typography>
          </div>

          {/* Main title with gradient text */}
          <div className="relative mb-4 sm:mb-6">
            <Typography
              variant="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              {...({} as any)}
            >
              Empowering the Next<br className="hidden sm:block" /> Generation of Engineers
            </Typography>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 left-1/4 w-8 sm:w-12 h-1 bg-blue-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-3 right-1/4 w-6 sm:w-8 h-1 bg-blue-400 rounded-full opacity-60"></div>
          </div>

          {/* Host information with subtle background */}
          <div className="mb-4 sm:mb-6 inline-block bg-gray-800/40 backdrop-blur-sm rounded-lg py-3 px-4 sm:py-4 sm:px-6">
            <div
              className="mb-2 font-medium flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Hosted by
              <span className="text-blue-200 font-semibold flex items-center gap-1 sm:gap-2">
                Queen's University
                <div className="relative h-5 sm:h-6 md:h-8 w-8 bg-white/80 p-0.5 sm:p-1 rounded">
                  <Image
                    src="/logos/queens-logo.svg"
                    alt="Queen's University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>
              with
              <span className="text-blue-200 font-semibold flex items-center gap-1 sm:gap-2">
                ESSCO
                <div className="relative h-5 sm:h-6 md:h-8 w-8 bg-white/80 p-0.5 sm:p-1 rounded">
                  <Image
                    src="/logos/essco-logo.webp"
                    alt="ESSCO Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </span>
            </div>

            {/* Tagline with emphasis */}
            <div className="inline-block border-l-4 border-blue-400 pl-2 sm:pl-4 py-1">
              <Typography
                variant="h6"
                color="blue-100"
                className="italic font-semibold text-lg sm:text-xl text-blue-50"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                {...({} as any)}
              >
                "A Present for the Future"
              </Typography>
            </div>
          </div>

          {/* Description */}
          <Typography
            variant="lead"
            color="white"
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto font-light"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            {...({} as any)}
          >
            Join us for Ontario's premier leadership and integration conference designed
            exclusively for first-year engineering students.
          </Typography>

          <CountdownTimer />

          {/* Call to action section */}
          <div className="mt-6 sm:mt-10 md:mt-12">
            <Typography
              variant="h6"
              color="white"
              className="mb-3 sm:mb-4 font-medium uppercase tracking-wider text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              {...({} as any)}
            >
              Discover What Awaits You
            </Typography>

            {/* Centered Play Button with Ripple Effect */}
            <div className="flex justify-center">
              <div className="relative">
                <IconButton
                  className="rounded-full bg-blue-600 hover:bg-blue-500 p-4 sm:p-6 md:p-8 z-10 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30"
                  onClick={triggerEffect}
                  aria-label="Experience something special"
                  {...({} as any)}
                >
                  <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </IconButton>

                {ripple && (
                  <span className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/30 animate-ripple pointer-events-none z-0" />
                )}
              </div>
            </div>

            {/* Land Acknowledgement */}
            <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20">
              <Typography
                variant="small"
                color="white"
                className="text-center italic text-xs sm:text-sm"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                {...({} as any)}
              >
                Queen's University is situated on traditional Anishinaabe and Haudenosaunee territory.
                We are grateful to be able to live, learn, and host this conference on these lands.
                This acknowledgment is a reminder of our collective responsibility to reflect on the
                histories, contributions, and resilience of Indigenous peoples, and to continue learning
                how we can actively contribute to reconciliation in meaningful ways.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
