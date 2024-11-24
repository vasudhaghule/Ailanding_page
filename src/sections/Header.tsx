import LogoIcon from "@/assets/logo.svg";
import React from "react";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 bg-black/30 backdrop-blur-md">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur-md -z-10 hidden md:block rounded-xl"></div>
          <a
            href="#"
            className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15"
            aria-label="Home"
          >
            <LogoIcon className="h-8 w-8" alt="Logo" />
          </a>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-8 items-center">
            <Button>Join Waitlist</Button>
            <button className="md:hidden" aria-label="Open menu">
              <MenuIcon className="h-6 w-6" alt="Menu Icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
