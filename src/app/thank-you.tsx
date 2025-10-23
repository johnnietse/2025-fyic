"use client";

import { Typography } from "@material-tailwind/react";

export function ThankYou() {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Typography 
            variant="h1" 
            color="blue-gray" 
            className="mb-6 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            THANK YOU!
          </Typography>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-6">
            <Typography
              variant="lead"
              color="blue-gray"
              className="text-lg md:text-xl text-justify leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              From the FYIC 2025 Organizing Committee, thank you for giving us the opportunity to make an impact on your engineering journey.
            </Typography>

            <Typography
              variant="lead"
              color="blue-gray"
              className="text-lg md:text-xl text-justify leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              We cannot wait to welcome you to Queen's campus this November; we hope this conference will remain a highlight of your academic career and you are able to get the most out of your weekend.
            </Typography>

            <Typography
              variant="lead"
              color="blue-gray"
              className="text-lg md:text-xl text-justify leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              We look forward to meeting you all soon!
            </Typography>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <Typography
                color="blue-gray"
                className="text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Sincerely,
              </Typography>
              
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-3xl md:text-4xl mt-4"
                style={{ 
                  fontFamily: "'Dancing Script', cursive, 'Great Vibes', cursive, 'Parisienne', cursive, sans-serif",
                  fontWeight: 'normal'
                }}
                {...({} as any)}
              >
                FYIC 2025 Organizing Committee
              </Typography>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="text-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Load cursive fonts from Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Parisienne&display=swap');
      `}</style>
    </section>
  );
}

export default ThankYou;
