import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  UsersIcon,
  BriefcaseIcon,
  PencilSquareIcon
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  // Check if the link is external (starts with http)
  const isExternal = href && href.startsWith('http');
  
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        variant="paragraph"
        className="flex items-center gap-2 font-medium transition-colors hover:text-blue-500"
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

  const handleDelegatePackageClick = () => {
    window.open("/files/FYIC_2025_Delegate_Package.pdf", "_blank");
  };

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 transition-all duration-300"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      {...({} as any)}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="size-24 mr-4 flex items-center justify-center rounded-full border-1 border-white bg-white overflow-hidden">
            <img 
              src="/image/fyic-logo-cropped.png" 
              alt="FYIC Logo" 
              className="h-[90%] w-[90%] object-contain"
            />
          </div>
          
          <Typography
            color={isScrolling ? "blue-gray" : "white"}
            className="text-xl font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            FYIC 2025
          </Typography>
        </div>
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

        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="sm"
            variant={isScrolling ? "filled" : "outlined"}
            color={isScrolling ? "blue" : "white"}
            className="flex items-center gap-2 rounded-full"
            onClick={handleDelegatePackageClick}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <PencilSquareIcon className="h-4 w-4" />
            Delegate Package
          </Button>
        </div>

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
            <NavItem href="/files/FYIC_2025_Delegate_Package.pdf">
              <PencilSquareIcon className="h-5 w-5" style={{ fontFamily: 'Montserrat, sans-serif' }}/>
              Delegate Package
            </NavItem>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
