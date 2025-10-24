"use client";

import { Typography } from "@material-tailwind/react";

export function TransportationSection() {
  return (
    <div className="relative w-full bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
      {/* More translucent overlay */}
      <div className="absolute inset-0 h-full w-full bg-black/40" />

      <br />
      <br />
                
      <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-12">
        {/* Section Header */}
        <Typography 
          variant="h1" 
          className="text-center mb-8 text-white" 
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}
        >
          Getting to Kingston
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Left Column - Transportation Options */}
          <div className="space-y-4">
            <Typography
              variant="h3"
              color="white"
              className="mb-4 text-center lg:text-left border-b border-white/30 pb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Transportation Options
            </Typography>
            
            <div className="space-y-3">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Mega Bus
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Affordable bus service with multiple daily departures from various locations.
                </Typography>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  FlixBus
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Comfortable bus service connecting Kingston to major cities.
                </Typography>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Via Rail
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  Train service with Kingston located on the Ontario-Quebec route.
                </Typography>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm mt-4">
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
              </Typography>
            </div>
          </div>
          
          {/* Right Column - Via Rail Info */}
          <div className="space-y-4">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h4"
                color="white"
                className="mb-3 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Via Rail Route
              </Typography>
              
              <Typography
                color="white"
                className="mb-3 text-center text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
              </Typography>
              
              {/* Flexible image container */}
              <div className="w-full rounded-lg overflow-hidden mt-3">
                <img 
                  src="/image/map.png" 
                  alt="Via Rail Route Map" 
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Typography
                variant="h5"
                color="white"
                className="mb-1 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Conference Venue
              </Typography>
              <Typography
                color="white"
                className="text-center text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Holiday Inn Kingston Waterfront
                <br />
                2 Princess St, Kingston, ON K7L 1A2
              </Typography>
            </div>
          </div>
        </div>
        
        {/* Additional Transportation Info */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 p-5 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h4"
            color="white"
            className="mb-4 text-center border-b border-white/30 pb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            Local Transportation in Kingston
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/15 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Kingston Transit
              </Typography>
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                The local bus service can take you from transportation hubs to your accommodation and the conference venue.
              </Typography>
            </div>
            
            <div className="bg-white/15 p-4 rounded-lg">
              <Typography
                variant="h5"
                color="white"
                className="mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxi & Ride-Sharing
              </Typography>
              <Typography
                color="white"
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Taxis and ride-sharing services are readily available throughout Kingston.
              </Typography>
            </div>
          </div>
        </div>

        {/* "Within Kingston" Section */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            WITHIN KINGSTON
          </Typography>

          <div className="space-y-4">
            <Typography
              color="white"
              className="text-center italic mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              *Transportation will be provided throughout the conference via shuttles on Saturday and Sunday*
            </Typography>

            <Typography
              color="white"
              className="text-justify"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Delegates are responsible for arranging travel to and from the hotel and on Friday evening to campus. Feel free to coordinate travel from train or bus stations with other delegates through the appropriate FYIC Discord channel.
            </Typography>

            <Typography
              color="white"
              className="text-justify"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              Available methods of transportation in Kingston include city buses and taxi/uber/lyft. For day-of city bus routes and times, we advise downloading Google Maps in advance.
            </Typography>

            <ul className="space-y-2 ml-4 list-disc white-bullets">
              <li>
                <Typography
                  color="white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  <strong>Amey's Taxi</strong> 613–546–1111
                </Typography>
              </li>
              <li>
                <Typography
                  color="white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  <strong>Uber/lyft app</strong>
                </Typography>
              </li>
              <li>
                <Typography
                  color="white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  {...({} as any)}
                >
                  <strong>City bus fare</strong> is $3.50 for 90 minutes of transit – ask for a transfer slip if taking more than one bus within 90 minutes
                </Typography>
              </li>
            </ul>

            {/* Kingston Map Image */}
            <div className="mt-6">
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/kingston-map.png" 
                  alt="Kingston Map with Common Locations" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Common Locations List */}
            <div className="mt-4">
              <Typography
                variant="h4"
                color="white"
                className="mb-3 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Common Locations
              </Typography>
              
              <ol className="space-y-2 ml-4 list-decimal white-numbers">
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Holiday Inn</strong>
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Via Rail Station</strong>
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>MegaBus Station</strong>
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Queen's University</strong>
                  </Typography>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* New "At Queen's" Map Section */}
        <div className="mt-8 w-full max-w-4xl">
          <div className="w-full rounded-lg overflow-hidden">
            <img 
              src="/image/at-queens-map.png" 
              alt="Queen's University Campus Map" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* WASHROOM GUIDE Section */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            WASHROOM GUIDE
          </Typography>

          <div className="space-y-6">
            {/* Gender Inclusive Washroom Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <img 
                src="/image/gender-inclusive-washroom-location.png" 
                alt="Gender Inclusive Washroom Locations" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Washroom Locations List */}
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-4 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Gender Inclusive Washroom Locations
              </Typography>
              
              <ul className="space-y-3 ml-4 list-disc white-bullets">
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Ellis Hall</strong> - 039, 137, 433, 436
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Jeffrey Hall</strong> - 121, 324, 425, 522
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Kingston Hall</strong> - None – closest to Jeffrey
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>Biosci (BioSciences Complex)</strong> - 0591, 0594, 1389, 2288, 2289, 3288, 3289, 3490
                  </Typography>
                </li>
                <li>
                  <Typography
                    color="white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <strong>JDUC (John Deutsch University Centre)</strong> - 120, 215, 334B, 428, 430L, A102, A103, A104, A202, A203, A204, A302, A303, A304
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLUE LIGHT EMERGENCY PHONES Section */}
        <div id="blue-light-emergency-phones" className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            BLUE LIGHT EMERGENCY PHONES
          </Typography>

          <div className="space-y-6">
            {/* Two Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/blue-light-emergency-phones.png" 
                  alt="Blue Light Emergency Phones" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/blue-light-emergency-phones-map.png" 
                  alt="Blue Light Emergency Phones Map" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-4">
              <Typography
                color="white"
                className="text-justify"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                When the red button is pushed, the phone is connected directly to the Emergency Report Centre (ERC), where the exact location of the phone is indicated, and two-way audio communication is established. The phones are intended to be used in any situation where you feel threatened or anxious, if you witness an accident or a crime, or if you wish to be escorted.
              </Typography>

              <Typography
                color="white"
                className="text-justify"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Make yourself familiar with the location of the blue lights along the routes you typically walk. If you begin to feel uneasy, concerned, or afraid, don't hesitate to use them.
              </Typography>
            </div>
          </div>
        </div>



        {/* AMENITIES Section */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            AMENITIES
          </Typography>
        
          <div className="grid grid-cols-2 gap-6">
            {/* Water Bottle Fill Stations */}
            <div className="flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                WATER BOTTLE FILL STATIONS
              </Typography>
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/waterbottle-fill-stations.png" 
                  alt="Water Bottle Fill Stations" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
        
            {/* AEDs */}
            <div className="flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                AUTOMATED EXTERNAL DEFIBRILLATORS (AEDS)
              </Typography>
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/aeds.png" 
                  alt="Automated External Defibrillators" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
        
            {/* Prayer and Meditation Spaces */}
            <div className="flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                PRAYER AND MEDITATION SPACES
              </Typography>
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/prayer-and-meditation-spaces.png" 
                  alt="Prayer and Meditation Spaces" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
        
            {/* Food Available for Purchase */}
            <div className="flex flex-col items-center">
              <Typography
                variant="h5"
                color="white"
                className="mb-2 text-center"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                FOOD AVAILABLE FOR PURCHASE
              </Typography>
              <div className="w-full rounded-lg overflow-hidden">
                <img 
                  src="/image/food-available-for-purchase.png" 
                  alt="Food Available for Purchase" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* INCIDENT RESPONSE COMMITTEE Section */}
        <div id="incident-response-committee" className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Typography
            variant="h2"
            color="white"
            className="text-center mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            INCIDENT RESPONSE COMMITTEE
          </Typography>
        
          <div className="space-y-6">
            {/* What is the IRC? */}
            <div>
              <Typography
                variant="h3"
                color="white"
                className="mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                What is the IRC?
              </Typography>
              <Typography
                color="white"
                className="text-justify"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                The Incident Response Committee (IRC) is in place to ensure a safe and respectful environment at the FYIC 2025 conference.
              </Typography>
              <Typography
                color="white"
                className="text-justify mt-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                If you experience or witness an incident that causes concern and cannot be easily resolved, you are encouraged to submit a confidential incident Report Form. You may choose whether or not you are comfortable being contacted. All identifying details will remain private. The IRC's role is to listen, respond, and support delegates when issues arise.
              </Typography>
            </div>
        
            <hr className="border-white/30" />
        
            {/* IRC Chair Contact */}
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                IRC Chair Contact
              </Typography>
              <Typography
                color="white"
                className="font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Monica Paul
              </Typography>
              <Typography
                color="white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Provincial Councilor, ESSCO
              </Typography>
              <Typography
                color="white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                irc@essco.ca
              </Typography>
            </div>
        
            {/* Submitting an Incident Report */}
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Submitting an Incident Report
              </Typography>
              <Typography
                color="white"
                className="text-justify"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                A link to the Incident Report Form will be provided shortly before the conference. We strongly recommend submitting all concerns through the form, rather than using the IRC Chair email.
              </Typography>
            </div>
          </div>
        </div>

        <br />
        <br />
                  
      </section>

      {/* Custom CSS for white bullet points and numbers */}
      <style jsx global>{`
        .white-bullets {
          list-style-type: disc;
          color: white;
        }
        .white-bullets li::marker {
          color: white;
        }
        ul.white-bullets {
          color: white;
        }
        .white-numbers {
          list-style-type: decimal;
          color: white;
        }
        .white-numbers li::marker {
          color: white;
        }
        ol.white-numbers {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default TransportationSection;


// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
//       {/* More translucent overlay */}
//       <div className="absolute inset-0 h-full w-full bg-black/40" />

//       <br />
//       <br />
                
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-12">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-8 text-white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-4">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-4 text-center lg:text-left border-b border-white/30 pb-2"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-3">
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm mt-4">
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//               </Typography>
//             </div>
//           </div>
          
//           {/* Right Column - Via Rail Info */}
//           <div className="space-y-4">
//             <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-3 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Route
//               </Typography>
              
//               <Typography
//                 color="white"
//                 className="mb-3 text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Flexible image container */}
//               <div className="w-full rounded-lg overflow-hidden mt-3">
//                 <img 
//                   src="/image/map.png" 
//                   alt="Via Rail Route Map" 
//                   className="w-full h-auto max-h-64 object-contain"
//                 />
//               </div>
//             </div>
            
//             <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Conference Venue
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Holiday Inn Kingston Waterfront
//                 <br />
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-8 w-full max-w-4xl bg-white/10 p-5 rounded-lg backdrop-blur-sm">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-4 text-center border-b border-white/30 pb-2"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white/15 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-white/15 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>

//         {/* New "Within Kingston" Section */}
//         <div className="mt-8 w-full max-w-4xl bg-white/10 p-6 rounded-lg backdrop-blur-sm">
//           <Typography
//             variant="h2"
//             color="white"
//             className="text-center mb-4"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             WITHIN KINGSTON
//           </Typography>

//           <div className="space-y-4">
//             <Typography
//               color="white"
//               className="text-center italic mb-4"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               *Transportation will be provided throughout the conference via shuttles on Saturday and Sunday*
//             </Typography>

//             <Typography
//               color="white"
//               className="text-justify"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Delegates are responsible for arranging travel to and from the hotel and on Friday evening to campus. Feel free to coordinate travel from train or bus stations with other delegates through the appropriate FYIC Discord channel.
//             </Typography>

//             <Typography
//               color="white"
//               className="text-justify"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Available methods of transportation in Kingston include city buses and taxi/uber/lyft. For day-of city bus routes and times, we advise downloading Google Maps in advance.
//             </Typography>

//             <ul className="space-y-2 ml-4 list-disc white-bullets">
//               <li>
//                 <Typography
//                   color="white"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <strong>Amey's Taxi</strong> 613–546–1111
//                 </Typography>
//               </li>
//               <li>
//                 <Typography
//                   color="white"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <strong>Uber/lyft app</strong>
//                 </Typography>
//               </li>
//               <li>
//                 <Typography
//                   color="white"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <strong>City bus fare</strong> is $3.50 for 90 minutes of transit – ask for a transfer slip if taking more than one bus within 90 minutes
//                 </Typography>
//               </li>
//             </ul>

//             {/* Kingston Map Image */}
//             <div className="mt-6">
//               <div className="w-full rounded-lg overflow-hidden">
//                 <img 
//                   src="/image/kingston-map.png" 
//                   alt="Kingston Map with Common Locations" 
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>

//             {/* Common Locations List */}
//             <div className="mt-4">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-3 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Common Locations
//               </Typography>
              
//               <ol className="space-y-2 ml-4 list-decimal white-numbers">
//                 <li>
//                   <Typography
//                     color="white"
//                     style={{ fontFamily: 'Montserrat, sans-serif' }}
//                     {...({} as any)}
//                   >
//                     <strong>Holiday Inn</strong>
//                   </Typography>
//                 </li>
//                 <li>
//                   <Typography
//                     color="white"
//                     style={{ fontFamily: 'Montserrat, sans-serif' }}
//                     {...({} as any)}
//                   >
//                     <strong>Via Rail Station</strong>
//                   </Typography>
//                 </li>
//                 <li>
//                   <Typography
//                     color="white"
//                     style={{ fontFamily: 'Montserrat, sans-serif' }}
//                     {...({} as any)}
//                   >
//                     <strong>MegaBus Station</strong>
//                   </Typography>
//                 </li>
//                 <li>
//                   <Typography
//                     color="white"
//                     style={{ fontFamily: 'Montserrat, sans-serif' }}
//                     {...({} as any)}
//                   >
//                     <strong>Queen's University</strong>
//                   </Typography>
//                 </li>
//               </ol>
//             </div>
//           </div>
//         </div>

//         <br />
//         <br />
                  
//       </section>

//       {/* Custom CSS for white bullet points and numbers */}
//       <style jsx global>{`
//         .white-bullets {
//           list-style-type: disc;
//           color: white;
//         }
//         .white-bullets li::marker {
//           color: white;
//         }
//         ul.white-bullets {
//           color: white;
//         }
//         .white-numbers {
//           list-style-type: decimal;
//           color: white;
//         }
//         .white-numbers li::marker {
//           color: white;
//         }
//         ol.white-numbers {
//           color: white;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default TransportationSection;






















// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full bg-[url('//image/transportation-bg.png')] bg-cover bg-no-repeat bg-fixed">
//       <div className="absolute inset-0 h-full w-full bg-gray-900/70" />
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-12 mt-8" 
//           color="white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-6">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-6 border-b border-blue-400 pb-2"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-4">
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="blue-100"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <Typography
//               color="white"
//               className="mt-8 bg-gray-800/50 p-4 rounded-lg"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//             </Typography>
//           </div>
          
//           {/* Right Column - Map and Additional Info */}
//           <div className="space-y-8">
//             <div className="bg-gray-800/50 p-6 rounded-lg">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-4 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Conference Location
//               </Typography>
              
//               {/* Space for your location image */}
//               <div className="bg-gray-700/30 h-64 rounded-lg flex items-center justify-center mb-4">
//                 <Typography
//                   color="blue-100"
//                   className="text-center"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   [Insert Map Image Here]
//                   <br />
//                   <span className="text-sm">Holiday Inn Kingston Waterfront</span>
//                   <br />
//                   <span className="text-sm">2 Princess St, Kingston, ON</span>
//                 </Typography>
//               </div>
              
//               <Typography
//                 color="white"
//                 className="text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
            
//             <div className="bg-blue-900/30 p-6 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-4"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Cities
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Space for your Via Rail map image */}
//               <div className="bg-gray-700/30 h-48 rounded-lg flex items-center justify-center mt-4">
//                 <Typography
//                   color="blue-100"
//                   className="text-center"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <img 
//                     src="/image/map.png" 
//                     alt="Conference Location Map" 
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-16 w-full max-w-4xl bg-gray-800/50 p-8 rounded-lg">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-6 text-center border-b border-blue-400 pb-2"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-blue-900/30 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-blue-900/30 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="blue-100"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default TransportationSection;




























// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full min-h-screen bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-900/80 to-indigo-900/80" />
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-12 mt-8 text-white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-8">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-6 text-center lg:text-left border-b-2 border-blue-300 pb-3"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-6">
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-3 flex items-center gap-2"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   <span className="inline-block w-3 h-3 bg-purple-400 rounded-full"></span>
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="blue-50"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <div className="bg-blue-800/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 mt-8">
//               <Typography
//                 color="white"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//               </Typography>
//             </div>
//           </div>
          
//           {/* Right Column - Via Rail Info */}
//           <div className="space-y-8">
//             <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-6 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Route
//               </Typography>
              
//               <Typography
//                 color="blue-50"
//                 className="mb-6 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Flexible image container */}
//               <div className="w-full rounded-xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="/image/map.png" 
//                   alt="Via Rail Route Map" 
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
              
//               <Typography
//                 color="blue-100"
//                 className="mt-6 text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Map showing Via Rail stations along the Ontario-Quebec corridor
//               </Typography>
//             </div>
            
//             <div className="bg-indigo-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-4 flex items-center justify-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                 </svg>
//                 Conference Venue
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 className="text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Holiday Inn Kingston Waterfront
//                 <br />
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-16 w-full max-w-4xl bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-8 text-center border-b border-blue-300 pb-3"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-blue-800/40 p-6 rounded-lg border border-blue-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-3 flex items-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
//                 </svg>
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-blue-800/40 p-6 rounded-lg border border-blue-400/30">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-3 flex items-center gap-2"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
//                   <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
//                 </svg>
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="blue-50"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default TransportationSection;























//Can use the following code for recovery in case if the most recent code doesn't work as expected
// "use client";

// import { Typography } from "@material-tailwind/react";

// export function TransportationSection() {
//   return (
//     <div className="relative w-full bg-[url('/image/transportation-bg.png')] bg-cover bg-center bg-no-repeat">
//       {/* More translucent overlay */}
//       <div className="absolute inset-0 h-full w-full bg-black/40" />

//       <br>
//       </br>          
//       <br>
//       </br>
                
//       <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-12">
//         {/* Section Header */}
//         <Typography 
//           variant="h1" 
//           className="text-center mb-8 text-white" 
//           style={{ fontFamily: 'Montserrat, sans-serif' }}
//           {...({} as any)}
//         >
//           Getting to Kingston
//         </Typography>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
//           {/* Left Column - Transportation Options */}
//           <div className="space-y-4">
//             <Typography
//               variant="h3"
//               color="white"
//               className="mb-4 text-center lg:text-left border-b border-white/30 pb-2"
//               style={{ fontFamily: 'Montserrat, sans-serif' }}
//               {...({} as any)}
//             >
//               Transportation Options
//             </Typography>
            
//             <div className="space-y-3">
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Mega Bus
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Affordable bus service with multiple daily departures from various locations.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   FlixBus
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Comfortable bus service connecting Kingston to major cities.
//                 </Typography>
//               </div>
              
//               <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//                 <Typography
//                   variant="h5"
//                   color="white"
//                   className="mb-1"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Via Rail
//                 </Typography>
//                 <Typography
//                   color="white"
//                   className="text-sm"
//                   style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   {...({} as any)}
//                 >
//                   Train service with Kingston located on the Ontario-Quebec route.
//                 </Typography>
//               </div>
//             </div>
            
//             <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm mt-4">
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 When you arrive in Kingston, both the Megabus and Via Rail stations have bus routes that can take you to your hotel.
//               </Typography>
//             </div>
//           </div>
          
//           {/* Right Column - Via Rail Info */}
//           <div className="space-y-4">
//             <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h4"
//                 color="white"
//                 className="mb-3 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Via Rail Route
//               </Typography>
              
//               <Typography
//                 color="white"
//                 className="mb-3 text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston is located on the Ontario-Quebec route for ViaRail. Cities that have train stations are shown in the figure below.
//               </Typography>
              
//               {/* Flexible image container */}
//               <div className="w-full rounded-lg overflow-hidden mt-3">
//                 <img 
//                   src="/image/map.png" 
//                   alt="Via Rail Route Map" 
//                   className="w-full h-auto max-h-64 object-contain"
//                 />
//               </div>
//             </div>
            
//             <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1 text-center"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Conference Venue
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-center text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Holiday Inn Kingston Waterfront
//                 <br />
//                 2 Princess St, Kingston, ON K7L 1A2
//               </Typography>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional Transportation Info */}
//         <div className="mt-8 w-full max-w-4xl bg-white/10 p-5 rounded-lg backdrop-blur-sm">
//           <Typography
//             variant="h4"
//             color="white"
//             className="mb-4 text-center border-b border-white/30 pb-2"
//             style={{ fontFamily: 'Montserrat, sans-serif' }}
//             {...({} as any)}
//           >
//             Local Transportation in Kingston
//           </Typography>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-white/15 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Kingston Transit
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 The local bus service can take you from transportation hubs to your accommodation and the conference venue.
//               </Typography>
//             </div>
            
//             <div className="bg-white/15 p-4 rounded-lg">
//               <Typography
//                 variant="h5"
//                 color="white"
//                 className="mb-1"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxi & Ride-Sharing
//               </Typography>
//               <Typography
//                 color="white"
//                 className="text-sm"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }}
//                 {...({} as any)}
//               >
//                 Taxis and ride-sharing services are readily available throughout Kingston.
//               </Typography>
//             </div>
//           </div>
//         </div>

//         <br>
//         </br>          
//         <br>
//         </br>
                  
//       </section>
//     </div>
//   );
// }

// export default TransportationSection;
