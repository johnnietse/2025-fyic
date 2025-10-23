"use client";

import Image from "next/image";

export function SponsorsSection() {
  return (
    <div className="w-full bg-white">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Image of the sponsor note - everything included */}
          <div className="bg-white rounded-lg">
            <Image
              src="/image/sponsor-note-image.png" // Replace with your actual image path
              alt="A Note to Our Sponsors - Thank you letter from Noah Del Rizzo, Sponsorship Director"
              width={800}
              height={1000}
              className="w-full h-auto rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponsorsSection;
