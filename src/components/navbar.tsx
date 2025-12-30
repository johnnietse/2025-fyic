import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  UsersIcon,
  BriefcaseIcon,
  PencilSquareIcon,
  ChevronDownIcon
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
    name: "Speakers & Workshops",
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

const DELEGATE_PACKAGES = [
  {
    name: "Pre-Delegate Package",
    href: "https://www.canva.com/design/DAGx3UuONwY/LehcEmNT2kfjp_8-qwHBPA/view?utm_content=DAGx3UuONwY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb01af3c8ea",
    type: "external"
  },
  {
    name: "Delegate Package",
    href: "/files/FYIC_2025_Delegate_Package.pdf",
    type: "pdf"
  }
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

  const handlePackageClick = (href: string) => {
    window.open(href, "_blank");
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
          <Menu>
            <MenuHandler>
              <Button
                size="sm"
                variant={isScrolling ? "filled" : "outlined"}
                color={isScrolling ? "blue" : "white"}
                className="flex items-center gap-2 rounded-full"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                <PencilSquareIcon className="h-4 w-4" />
                Delegate Packages
                <ChevronDownIcon className="h-3 w-3" />
              </Button>
            </MenuHandler>
            <MenuList
              className="bg-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              {...({} as any)}
            >
              {DELEGATE_PACKAGES.map((packageItem, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handlePackageClick(packageItem.href)}
                  className="flex items-center gap-2 hover:bg-blue-50 transition-colors"
                  {...({} as any)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  {packageItem.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
            {/* Separate items for mobile view */}
            <li className="border-t pt-4">
              <Typography
                variant="small"
                className="font-semibold text-gray-500 mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                {...({} as any)}
              >
                Delegate Packages
              </Typography>
              <div className="flex flex-col gap-2">
                {DELEGATE_PACKAGES.map((packageItem, index) => (
                  <Typography
                    key={index}
                    as="a"
                    href={packageItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="paragraph"
                    className="flex items-center gap-2 font-medium transition-colors hover:text-blue-500 pl-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    {...({} as any)}
                  >
                    <PencilSquareIcon className="h-4 w-4" />
                    {packageItem.name}
                  </Typography>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
