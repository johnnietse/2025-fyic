// "use client";

// import {
//   Tab,
//   Tabs,
//   TabsHeader,
// } from "@material-tailwind/react";

// import EventContentCard from "@/components/event-content-card";


// const EVENT_CONTENT = [
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

// export function EventContent() {
//   return (
//     <section className="py-8 px-8 lg:py-20">
//       <Tabs value="Day1" className="mb-8">
//         <div className="w-full flex mb-8 flex-col items-center">
//           <TabsHeader className="h-12 w-72 md:w-96">
//             <Tab value="Day1" className="font-medium">
//               Day 1
//             </Tab>
//             <Tab value="Day2" className="font-medium">
//               Day 2
//             </Tab>
//             <Tab value="Day3" className="font-medium">
//               Day 3
//             </Tab>
//           </TabsHeader>
//         </div>
//       </Tabs>
//       <div className="mx-auto container">
//         {EVENT_CONTENT.map((props, idx) => (
//           <EventContentCard key={idx} {...props} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default EventContent;


////



"use client";

import { useState } from "react";

const EVENTS_BY_DAY = {
  "Day 1": [
    {
      date: "November 29 2025",
      time: "8:00 AM – 10:00 PM",
      title: "FYIC 2025: First Year Integration Conference 2025",
      location: "Holiday Inn Kingston Waterfront, 2 Princess St, Kingston",
      description:
        "EARLY BIRD PRICING – $15 TICKETS UNTIL DECEMBER 31, 2024. (Regular price: $25) The First Year Integration Conference (FYIC) is hosting its annual conference on January 25th at the Holiday Inn Kingston – Waterfront! Join us for a day of workshops, speaker sessions, and networking – all focused on kickstarting …",
      price: "$15",
    },

    {
      date: "January 29 2025",
      time: "10:30 AM – 12:00 PM",
      title: "Keynote: Engineering the Future – AI & Sustainability",
      location: "Holiday Inn Kingston Waterfront, Conference Room A",
      description:
        "Join industry leader Dr. Maya Singh as she explores the intersection of artificial intelligence and sustainable infrastructure, and how engineers can lead the way toward a greener future.",
      price: "Included with registration",
    },
    {
      date: "January 29 2025",
      time: "1:00 PM – 2:30 PM",
      title: "Workshop: Strategic Networking for Engineers",
      location: "Holiday Inn Kingston Waterfront, Room B2",
      description:
        "This interactive workshop will give students practical tools for building professional relationships, making the most out of conferences, and developing a personal brand.",
      price: "",
    },
    



  ],
  "Day 2": [
    {
      date: "November 30 2025",
      time: "6:00 PM – 8:00 PM",
      title: "Taster Event",
      location: "Rose Innovation Hub – Mitchell Hall, 69 Union St, Kingston",
      description: "",
      price: "",
    },
    {
      date: "November 30 2025",
      time: "10:00 AM – 12:00 PM",
      title: "Engineering Innovation Panel",
      location: "Dupuis Hall, Room 215, Queen's University",
      description:
        "Join us for a discussion with alumni innovators who have launched startups and led cutting-edge engineering projects. Great for students interested in entrepreneurship and tech leadership.",
      price: "Free",
    },
    {
      date: "November 30 2025",
      time: "1:00 PM – 3:00 PM",
      title: "Leadership in Tech Workshop",
      location: "Beamish-Munro Hall, Room 313",
      description:
        "An interactive workshop focusing on communication, team dynamics, and leading design teams. Open to all engineering students.",
      price: "$5",
    },
    
  ],
  "Day 3": [
    {
      date: "December 1 2025",
      time: "7:00 PM – 10:00 PM",
      title: "Industry Night: Finance and Consulting in STEM",
      location: "Clark Hall Pub, 30 5 Field Company Lane, Kingston",
      description:
        "Curious about how your STEM skills can open doors to careers in finance and consulting? This event is an opportunity to get prepared for the busy hiring season ahead! First Year Integration Conference (FYIC) is collaborating with EngSoc Professional Development (PD) and CREO Solutions for Industry Night! EngSoc PD will …",
      price: "",
    },
    {
      date: "December 1 2025",
      time: "9:00 AM – 11:00 AM",
      title: "Breakfast with Industry: Civil and Mining Engineering",
      location: "Ellis Hall Lobby, Queen’s University",
      description:
        "Network over breakfast with industry representatives from Hatch, SNC-Lavalin, and other leading firms in civil and mining. Bring your resumes!",
      price: "Free with RSVP",
    },
    {
      date: "December 1 2025",
      time: "2:00 PM – 4:00 PM",
      title: "Resume & Cover Letter Critique Booths",
      location: "Walter Light Hall Atrium",
      description:
        "Get instant feedback on your resume and cover letter from upper-year students and engineering alumni. First come, first served.",
      price: "",
    },
    
  ],
};

export function EventContent() {
  // const [activeDay, setActiveDay] = useState("Day 1");
  const [activeDay, setActiveDay] = useState<keyof typeof EVENTS_BY_DAY>("Day 1");


  return (
    <section className="py-12 px-6 md:px-12">
      {/* Tabs */}
      {/* <div className="flex justify-center mb-8 gap-4">
        {Object.keys(EVENTS_BY_DAY).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full border ${
              activeDay === day
                ? "bg-blue-900 text-white border-blue-900"
                : "bg-white text-blue-900 border-blue-300"
            }`}
          >
            {day}
          </button>
        ))}
      </div> */}

      <div className="flex justify-center mb-8 gap-2 bg-gray-100 rounded-full p-1 max-w-fit mx-auto">
        {/* {Object.keys(EVENTS_BY_DAY).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full transition font-medium ${
              activeDay === day
                ? "bg-white text-black shadow"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))} */}

        {(Object.keys(EVENTS_BY_DAY) as (keyof typeof EVENTS_BY_DAY)[]).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full transition font-medium ${
              activeDay === day
                ? "bg-white text-black shadow"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}

      </div>


      {/* Events */}
      <div className="space-y-10 max-w-4xl mx-auto">
        {EVENTS_BY_DAY[activeDay].map((event, idx) => (
          <div key={idx} className="flex gap-6 items-start">
            {/* Date Block */}
            <div className="text-center w-16 shrink-0">
              <div className="text-sm font-medium uppercase text-gray-500">
                {event.date.split(" ")[0]}
              </div>
              <div className="text-2xl font-bold text-blue-900 leading-none">
                {event.date.split(" ")[1]}
              </div>
              <div className="text-sm text-gray-500">
                {event.date.split(" ")[2]}
              </div>
            </div>

            {/* Event Info */}
            <div className="flex-1">
              <p className="text-sm text-gray-600">{event.time}</p>
              <h3 className="text-lg font-bold text-black mt-1">{event.title}</h3>
              <p className="text-sm text-gray-700 italic">{event.location}</p>
              {event.description && (
                <p className="text-sm text-gray-700 mt-2">{event.description}</p>
              )}
              {event.price && (
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {event.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    </section>
  );
}

export default EventContent;










///// SECOND PART OF THE CODE

// "use client";

// import {
//   Tab,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   TabPanel,
// } from "@material-tailwind/react";

// import EventContentCard from "@/components/event-content-card";

// // Group events by day
// const EVENT_CONTENT_BY_DAY = {
//   Day1: [
//     {
//       title: "AI's Role in Shaping the Future",
//       des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges...",
//       name: "Marcell Glock",
//       position: "Chief Executive, Spotify",
//       panel: "Panel Discussion",
//       img: "/image/avatar1.jpg",
//     },
//   ],
//   Day2: [
//     {
//       title: "Introduction to Machine Learning",
//       des: "Explore the basic principles, algorithms, and applications of Machine Learning...",
//       name: "Marcell Glock",
//       position: "Chief Executive, Spotify",
//       panel: "Workshop",
//       img: "/image/avatar2.jpg",
//     },
//   ],
//   Day3: [
//     {
//       title: "AI in Healthcare: Revolutionizing Patient Care",
//       des: "This session is a must-attend for healthcare professionals, AI enthusiasts...",
//       name: "Marcell Glock",
//       position: "Chief Executive, Spotify",
//       panel: "Workshop",
//       img: "/image/avatar3.jpg",
//     },
//   ],
// };

// export function EventContent() {
//   return (
//     <section className="py-8 px-8 lg:py-20">
//       <Tabs value="Day1" className="mb-8">
//         {/* Tab Navigation */}
//         <div className="w-full flex mb-8 flex-col items-center">
//           <TabsHeader className="h-12 w-72 md:w-96">
//             <Tab value="Day1" className="font-medium">
//               Day 1
//             </Tab>
//             <Tab value="Day2" className="font-medium">
//               Day 2
//             </Tab>
//             <Tab value="Day3" className="font-medium">
//               Day 3
//             </Tab>
//           </TabsHeader>
//         </div>

//         {/* Content for each tab */}
//         <TabsBody>
//           {Object.entries(EVENT_CONTENT_BY_DAY).map(([day, events]) => (
//             <TabPanel key={day} value={day}>
//               <div className="mx-auto container space-y-6">
//                 {events.map((props, idx) => (
//                   <EventContentCard key={idx} {...props} />
//                 ))}
//               </div>
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </Tabs>
//     </section>
//   );
// }

// export default EventContent;



