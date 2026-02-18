import { Typography, Button, IconButton } from "@material-tailwind/react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Link from 'next/link';


const CURRENT_YEAR = new Date().getFullYear();
const INTERNAL_LINKS = [{ name: "Home", path: "/" },
{ name: "Speakers", path: "/speakers" },
{ name: "Sponsorship", path: "/sponsors" },
{ name: "Itinerary", path: "/agenda" },
{ name: "Our Team", path: "/team" }];


import { FaInstagram, FaEnvelope } from "react-icons/fa";

const SOCIAL_LINKS = [
  { icon: FaInstagram, url: "https://www.instagram.com/fyic2025/", name: "Instagram" },
  { icon: FaEnvelope, url: "mailto:fyic@essco.ca", name: "Email" }
];


export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as={Link}
            href="/"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            {...({} as any)}
          >
            FYIC 2025
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {INTERNAL_LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as={Link}
                  href={link.path}
                  variant="small"
                  color="white"
                  className="font-Montserrat !text-gray-700 hover:!text-gray-900 transition-colors"
                  {...({} as any)}
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>

          {/* <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
          </div> */}

          <div className="flex w-fit justify-center gap-2">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${social.name} in new tab`}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>




        <Typography
          color="blue-gray"
          className="text-center mt-12 font-Montserrat !text-gray-700"
          {...({} as any)}
        >
          Copyright © {CURRENT_YEAR} FYIC: First Year Integration Conference
        </Typography>


      </div>
    </footer >
  );
}

export default Footer;
