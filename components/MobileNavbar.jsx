"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import navLinks from "@/public/Navlinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon
import SegmentIcon from "@mui/icons-material/Segment";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Social from "./Social";


const menuLinkAnimate = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const animateItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <SegmentIcon className="text-accent text-4xl" />
        </SheetTrigger>
        <SheetContent className="bg-[#1D273B] flex flex-col gap-20 pt-16 items-center">
          <div>
            <Link href="/">
              <h1 className="text-4xl font-semibold ">
                AbuHasan<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <motion.nav
            className="flex gap-8 flex-col justify-center items-center"
            variants={menuLinkAnimate}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map(link => {
              return (
                <motion.li className="list-none" variants={animateItem}>
                  <Link
                    className={`${
                      link.path === pathname &&
                      "text-accent border-b-2 border-accent"
                    } capitalize text-xl hover:text-accent transition-all text-block`}
                    key={link.id}
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
          </motion.nav>

          <Social
            containerStyles="flex gap-4 items-center"
            iconStyles="text-center border border-accent text-accent hover:text-black hover:bg-accent rounded-full w-[40px] h-[40px] leading-10 flex items-center justify-center transition-all duration-500"
          />

          <Button>Hire Me</Button>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
