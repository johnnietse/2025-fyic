"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import "../globals.css";



export function AboutSponsors() {
  return (
    <>

      {/* First Section */}
      <div className="relative w-full overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Optimized background image (38MB original -> Next.js optimized) */}
        <Image
          src="/image/sponsor.png"
          alt="Sponsorship Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-0" />

        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-24">
          <Typography
            variant="h1"
            className="text-center lg:max-w-3xl font-bold"
            color="white"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            {...({} as any)}
          >
            Sponsorship
          </Typography>
        </section>
      </div>







    </>

  );
}

export default AboutSponsors;
