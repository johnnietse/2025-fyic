"use client";

import { Typography, Button } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import AboutCard from "@/components/about-card";
import Image from "next/image";
import "./globals.css";
import { TypographyProps } from "@material-tailwind/react";



// const EVENT_INFO = [
//   {
//     title: "Cutting-Edge Insights!",
//     description:
//       "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
//     subTitle: "Presentation",
//   },
//   {
//     title: "Practical Knowledge!",
//     description:
//       "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
//     subTitle: "Workshops",
//   },
// ];

export function AboutEvent() {
  return (
    <>
      {/* First Section */}



      <div className="relative w-full overflow-hidden">
        {/* Optimized background image */}
        <Image
          src="/image/aboutusmain.png"
          alt="About Us Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-0" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-24" id="about-us">
          <Typography variant="h1" className="text-center lg:max-w-3xl font-bold" color="white" {...({} as any)}>
            About Us
          </Typography>

          <Typography
            variant="lead"
            className="mt-6 lg:max-w-4xl mb-8 w-full text-justify font-Montserrat text-white"
            {...({} as any)}
          >
            A conference hosted by engineering students, for engineering students.
            <br />
            <br />
            Presented by the Ontario Society of Professional Engineers (OSPE), the First Year Integration Conference (FYIC) gives first-
            year engineering students from across Ontario the opportunity to connect with peers from around the province and
            participate in sessions designed to develop leadership skills, break down first-year barriers, and advance their career
            exploration. Attended by over 130 first-year and upper-year students from 18 universities across Ontario, this conference serves to inspire students and build connections to last their
            whole careers.
            <br />
            <br />
            Hosted with the Engineering Student Societies’ Council of Ontario (ESSCO), FYIC 2025 will take place at Queen’s
            University, a world-renowned institution and a leader in engineering research and innovation.
            <br />
            <br />
            The First Year Integration Conference (FYIC) is a unique, province-wide initiative that brings together first-year engineering students from 18 universities across Ontario. Our goal is to ease the transition into university life by providing a welcoming and inspiring space where students can build connections, develop leadership skills, and gain valuable insight into the world of engineering.
            <br />
            <br />
            Through a dynamic lineup of interactive workshops, seminars, and dedicated industry networking events, FYIC empowers students to explore their academic and professional potential. By connecting with peers and industry professionals alike, participants begin their engineering journey with confidence, curiosity, and community.
            <br />
            <br />
            This year, our theme is
            <span className="font-bold underline ml-1">‘A Present for the Future’</span>. We aim to inspire the next
            generation of bright minds to design sustainable solutions that will benefit generations to come.
            With additional emphasis on personal development, delegates will learn skills that will help them
            grow into the engineers they want to be.
          </Typography>
        </section>
      </div>








      {/* Second Section */}
      <div className="relative w-full overflow-hidden">
        {/* Optimized background image */}
        <Image
          src="/image/ourvision.webp"
          alt="Queen's University Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-0" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-24">
          <Typography variant="h2" className="text-center lg:max-w-3xl font-bold" color="white"  {...({} as any)}>
            About Queen's University
          </Typography>

          <Typography
            variant="lead"
            className="mt-6 lg:max-w-4xl mb-8 w-full text-justify font-Montserrat text-white"
            {...({} as any)}
          >
            <p className="mb-6">
              FYIC 2025 is proudly hosted by Smith
              Engineering at Queen’s University, where we
              are reimagining engineering education.
              Located in historic Kingston, Queen’s is one
              of Canada’s most distinguished institutions,
              recognized globally for academic
              excellence, impactful research, and
              community engagement.
            </p>

            <p className="mb-6">
              Smith Engineering is cultivating a new generation of engineers—leaders with deep
              technical expertise and a strong sense of societal, environmental, and ethical
              responsibility. Through interdisciplinary collaboration, hands-on learning, and a
              vibrant research culture, we are preparing problem-solvers for the challenges of
              tomorrow.
            </p>

            <p>
              Ranked among the top 10 universities worldwide in the 2022 Times Higher Education Impact
              Rankings, Queen’s is committed to sustainability, equity, and global collaboration. As delegates,
              you’ll experience the energy and excellence that define Queen’s and Smith Engineering—a place where tradition meets innovation and the future
              of engineering is being built today.
            </p>
          </Typography>
        </section>
      </div>



      {/* Third Section */}
      <div className="relative w-full overflow-hidden">
        {/* Optimized background image */}
        <Image
          src="/image/sponsors.png"
          alt="Sponsors Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-0" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-24">
          <Typography variant="h2" className="text-center font-Montserrat font-bold" color="white" {...({} as any)}>
            Our Sponsors
          </Typography>

          <Typography
            variant="lead"
            className="text-center max-w-2xl mt-4 mb-8"
            color="white"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            {...({} as any)}
          >
            <p>
              We are proud to partner with leading organizations that share our
              vision for the future of engineering.
            </p>
          </Typography>

          <a href="/sponsors" target="_self" className="inline-block mt-8">
            <Button color="white" variant="filled" aria-label="Navigate to Sponsorship page" className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 pointer-events-none" {...({} as any)}>
              Sponsorship Page
            </Button>
          </a>
        </section>
      </div>

      {/* Fourth Section */}
      <div className="relative w-full overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Optimized background image (7.7MB original -> Next.js optimized) */}
        <Image
          src="/image/team.png"
          alt="Our Team Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gray-900/60 z-0" />
        <section className="relative z-10 container mx-auto flex flex-col items-center px-4 py-24">
          <Typography variant="h2" className="text-center font-Montserrat font-bold" color="white" {...({} as any)}>
            Our Team
          </Typography>

          <Typography
            variant="lead"
            className="text-center max-w-2xl mt-4 mb-8"
            color="white"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            {...({} as any)}
          >
            <p className="mb-6">
              FYIC 2025 is fully run and organized by students.
            </p>

            <p>
              The executive team consists of a passionate group of Smith Engineering students (from all disciplines) dedicated to delivering an inspiring and impactful conference experience for first-year delegates across Ontario.
            </p>
          </Typography>




          <a href="/team" target="_self" className="inline-block mt-8">
            <Button color="white" aria-label="Navigate to Our Team page" variant="filled" className="bg-gray-200 text-black hover:bg-gray-400 transition-all duration-500 ease-in-out transform hover:scale-105 pointer-events-none" {...({} as any)}>
              Our Team
            </Button>
          </a>




          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.instagram.com/fyic2025/" target="_blank" rel="noopener noreferrer" aria-label="Follow FYIC 2025 on Instagram">
              <FaInstagram className="text-white hover:text-blue-700 text-3xl transition duration-300" />
            </a>

            <a href="mailto:fyic@essco.ca" target="_blank" rel="noopener noreferrer" aria-label="Send an email to FYIC 2025">
              <FaEnvelope className="text-white hover:text-yellow-400 text-3xl transition duration-300" />
            </a>





          </div>



          <br>
          </br>
        </section >
      </div >




    </>

  );
}

export default AboutEvent;




