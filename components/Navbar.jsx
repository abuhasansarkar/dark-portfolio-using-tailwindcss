"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import  navLinks  from "@/public/Navlinks";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map(link => {
        return (
          <Link
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            key={link.id}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
