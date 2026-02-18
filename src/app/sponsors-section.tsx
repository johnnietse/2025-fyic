"use client";

import { Typography } from "@material-tailwind/react";

export function SponsorsSection() {
  return (
    <div className="w-full bg-white">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Letter Container */}
          <div className="bg-white p-8 md:p-12 border-l-4 border-blue-600">
            {/* Letter Header */}
            <div className="mb-12">
              <Typography
                variant="h1"
                color="blue-gray"
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                A NOTE TO OUR SPONSORS
              </Typography>
              <div className="w-20 h-0.5 bg-blue-600"></div>
            </div>

            {/* Letter Content */}
            <div className="space-y-8">
              <Typography
                variant="paragraph"
                color="gray-700"
                className="text-lg leading-8"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Dear Sponsors,
              </Typography>

              <div className="space-y-6">
                {[
                  "On behalf of the First Year Integration Conference 2025 team, I want to sincerely thank you for your generous support. Your sponsorship was essential in making this year's conference possible, and truly made a profound impact on countless first year students.",

                  "The First Year Integration Conference is designed to help first-year engineering students adjust to university life by building connections, gaining valuable insights, and developing the skills they need to succeed. Thanks to your contribution, we were able to create a welcoming and engaging environment where delegates could meet other motivated and like minded engineering students, explore opportunities beyond the classroom and truly get a grasp of what engineering in Ontario has to offer.",

                  "Your support has not only enriched the experience of this year's participants but will also leave a lasting impact on their future careers. By investing in first-year students, you are helping to inspire the next generation of engineers regardless of discipline, fostering a brighter, more innovative future for Ontario and beyond.",

                  "We are deeply grateful for your belief in the potential of these young minds and for your commitment to their growth and success. Together, we are building a stronger, more dynamic engineering community, one that paves the way for a brighter, more prosperous tomorrow."
                ].map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="paragraph"
                    color="gray-700"
                    className="text-lg leading-8"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>

              {/* Closing Section */}
              <div className="mt-16 space-y-8">
                <Typography
                  variant="paragraph"
                  color="gray-700"
                  className="text-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  With sincere gratitude,
                </Typography>

                {/* Signature Section */}
                <div>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="text-3xl mb-1"
                    style={{
                      fontFamily: "var(--font-dancing-script), cursive",
                      fontWeight: '700'
                    }}
                    {...({} as any)}
                  >
                    Noah Del Rizzo
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="text-base font-medium"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    {...({} as any)}
                  >
                    Sponsorship Director
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponsorsSection;
