import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const pathname = location.pathname;

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] bg-white text-black shadow-md transition-all duration-500">
        <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src="/logo-1.jpeg" alt="Logo" className="h-16 w-auto" />
          </Link>
          <nav className="hidden lg:flex space-x-8 text-lg font-medium items-center">
            <div className="relative">
              <a
                href="/"
                className={`px-4 py-2 transition-colors font-medium rounded border-2 ${
                  pathname === "/" ? "border-secondary/90" : "border-transparent"
                }`}
              >
                Home
              </a>
            </div>
            <div className="relative">
              <a
                href="/about"
                className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                  pathname === "/about"
                    ? "border-secondary/90"
                    : "border-transparent"
                }`}
              >
                About Us
              </a>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="/services"
                className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                  pathname === "/services"
                    ? "border-secondary/90"
                    : "border-transparent"
                }`}
              >
                Services
              </a>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-border z-[1010]">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
                  >
                    Rolling Shutters
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
                  >
                    Entrance Automation
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
                  >
                    General Fabrication
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="/blog"
                className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                  pathname === "/blog" ? "border-secondary/90" : "border-transparent"
                }`}
              >
                Gallery
              </a>
            </div>
            <div className="relative">
              <a
                href="/contact"
                className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                  pathname === "/contact"
                    ? "border-secondary/90"
                    : "border-transparent"
                }`}
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl text-[#1a2940]"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 z-[1010]">
            <Link to="/" className="text-[#1a2940]" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-[#1a2940]" onClick={toggleMenu}>
              About
            </Link>
            <div className="flex flex-col space-y-2">
              <Link
                to="/services"
                className="text-[#1a2940]"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/services"
                className="text-[#1a2940] pl-4"
                onClick={toggleMenu}
              >
                Rolling Shutters
              </Link>
              <Link
                to="/services"
                className="text-[#1a2940] pl-4"
                onClick={toggleMenu}
              >
                Entrance Automation
              </Link>
              <Link
                to="/services"
                className="text-[#1a2940] pl-4"
                onClick={toggleMenu}
              >
                General Fabrication
              </Link>
            </div>
            <Link to="/blog" className="text-[#1a2940]" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/contact" className="text-[#1a2940]" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </header>
      <div className="fixed bottom-[220px] right-[43px] z-[1010]">
    <div
          className="rounded-full border-2 border-dotted border-secondary/90 p-3 flex items-center justify-center cursor-pointer w-14 h-14 hover:bg-secondary/90 group"
          onClick={handleTop}
        >
          <ArrowUpwardIcon className="text-secondary/90 w-7 h-7 group-hover:text-white" />
        </div>
</div>
    </>
  );
};

export default StickyHeader;
