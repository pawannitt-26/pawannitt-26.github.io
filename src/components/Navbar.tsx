import { Box, Center, Group, Image, Burger } from "@mantine/core";
import Button from "./CustomButton";
import React, { useEffect, useState } from "react";
import links from "src/utils/navLinks";

const Navbar = ({
  sidebarOpened,
  setSidebarOpened,
}: {
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Box
      className={`
        fixed top-0 z-50 w-full 
        flex flex-row justify-between 
        px-[25px] md:px-[40px]
        transition-all duration-300 
        ${scrolled 
          ? "backdrop-blur-xl bg-[#0a192f]/60 shadow-[0_4px_20px_rgba(0,0,0,0.35)] h-[80px]" 
          : "bg-transparent h-[100px]"
        }
      `}
    >
      
      {/* Logo */}
      <Center className="h-full">
        <a aria-label="Click Here to go to Top" href="/#">
          <Image
            alt="Pawan Kumar Logo"
            height={90}
            src={"/assets/images/PALOGO.png"}
            className="transition-transform duration-300 hover:scale-[1.05]"
          />
        </a>
      </Center>

      {/* Desktop Nav */}
      <Box className="hidden md:flex">
        <Group align={"center"} className="h-full gap-8">
          {links.map((link, index) => (
            <Center key={index} className="relative group cursor-pointer px-2 py-1">
              <a
                className="
                  font-mono text-[15px] 
                  text-slate-300 
                  transition-all duration-300 
                  group-hover:text-secondary group-hover:tracking-wide
                "
                href={link.href}
              >
                {link.name}
              </a>

              {/* Hover underline */}
              <span
                className="
                  absolute left-0 bottom-0 h-[2px] w-0 
                  bg-secondary transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </Center>
          ))}

          <Button
            ariaLabel="My Resume"
            onClick={() =>
              window.open("/assets/files/pawan-kumar-resume.pdf", "_blank")
            }
          >
            Resume
          </Button>
        </Group>
      </Box>

      {/* Mobile Menu Button */}
      <Center className="md:hidden z-50">
        <Burger
          opened={sidebarOpened}
          onClick={() => setSidebarOpened((prev) => !prev)}
          size={35}
          classNames={{
            burger: "bg-slate-300 after:bg-slate-300 before:bg-slate-300",
          }}
        />
      </Center>
    </Box>
  );
};

export default Navbar;
