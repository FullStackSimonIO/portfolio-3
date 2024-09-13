import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import DesktopNavigation from "./DesktopNavigation";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            FullStack<span className="text-accent">Simon</span>
          </h1>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNavigation />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
