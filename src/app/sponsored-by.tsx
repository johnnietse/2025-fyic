"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "talent4energy.png",
  "OSPE-logo-2025.png", 
  "EngSocLogo.png",
  "BGC.jpg",
  "smith-engineering-logo.jpg",
  "linamar-logo.png",
  "how-to-change-the-world-logo.png",
  "essco-logo.png"
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">

        <Typography variant="h2" color="blue-gray" className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)}>
          2025 FYIC Sponsors
        </Typography>
        <br />
        <br />
        <Typography variant="lead" color="gray" className="mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)}>
          FYIC 2025 is proudly presented by OSPE. Thank you to our sponsors – talent4energy (T4E), ONTARIO SOCIETY OF PROFESSIONAL ENGINEERS (OSPE), Engineering Society of Queen's University, BGC, SMITH ENGINEERING (Queen's University), LINAMAR, HOW TO CHANGE THE WORLD, and ESSCO!
        </Typography>

        <br />
        <br />
        
        <Typography variant="h4" color="blue-gray" className="mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}   {...({} as any)} >
          SPONSORED BY
        </Typography>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {SPONSORS.map((logo, key) => (
            <div key={key} className="flex items-center justify-center">
              <Image
                width={200}
                height={100}
                src={`/logos/${logo}`}
                alt={logo.replace('.png', '').replace('.jpg', '').replace(/-/g, ' ')}
                className="max-w-[180px] max-h-[80px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

    </section>
  );
}

export default SponsoredBy;
