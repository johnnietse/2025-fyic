import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  MicrophoneIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  UsersIcon,
  HandRaisedIcon,
  BriefcaseIcon

} from "@heroicons/react/24/solid";


interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href = "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        {...({} as any)}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [

  
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
    
  },
  {
    name: "Speakers",
    icon: UserCircleIcon,
    href: "/speakers",

  },
  {
    name: "Sponsorship",
    icon: BriefcaseIcon,
    href: "/sponsors",
  },
  {
    name: "Itinerary",
    icon: CalendarDaysIcon,
    href: "/agenda",
  },
  {
    name: "Our Team",
    icon: UsersIcon,
    href: "/team",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      {...({} as any)}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}
        >
          FYIC 2025
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" style={{ fontFamily: 'Montserrat, sans-serif' }}/>
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>

        {/* <div className="hidden items-center gap-4 lg:flex">
          <Button color={isScrolling ? "gray" : "white"} variant="text">
            Log in
          </Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"}>blocks</Button>
          </a>
        </div> */}

        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...({} as any)}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <ul className="flex flex-col gap-4 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" style={{ fontFamily: 'Montserrat, sans-serif' }}/>
                {name}
              </NavItem>
            ))}
          </ul>
          
          {/* <div className="mt-6 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div> */}

        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
