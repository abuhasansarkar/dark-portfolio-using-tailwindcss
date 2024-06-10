import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold ">
            AbuHasan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar and Hire me button */}
        <div className="hidden xl:flex item-center gap-8">
          {/* Navbar Component */}
          <Navbar />
          
          <Link href="/contact">
            {" "}
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navbar and Hire me button */}
        <div className="xl:hidden cursor-pointer">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
