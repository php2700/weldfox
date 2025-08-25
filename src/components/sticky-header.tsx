


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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000] bg-white backdrop-blur-md shadow-md transition-all duration-500">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/logo-1.jpeg" alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium text-lg">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/blog", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`text-[16px] relative px-3 py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:scale-x-0 after:bg-secondary/90 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === link.path ? "text-secondary/90 after:scale-x-100" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span
                className={`cursor-pointer px-3 py-1 transition-colors text-[16px] ${
                  pathname === "/services" ? "text-secondary/90" : "text-foreground"
                }`}
              >
                Services
              </span>
              {dropdownOpen && (
                <div className="absolute text-[16px] top-full left-0  w-52 bg-white shadow-xl rounded-xl border border-border p-3 z-[1010] leading-tight">
                  {["Rolling Shutters", "Entrance Automation", "General Fabrication"].map(
                    (service, idx) => (
                      <Link
                        key={idx}
                        to="/services"
                        className="block text-[16px] px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-white rounded-md transition"
                      >
                        {service}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden text-2xl text-[#1a2940]" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[1010] flex flex-col p-8 space-y-6 overflow-y-auto">
            <Link to="/" className="text-lg font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-lg font-medium" onClick={toggleMenu}>
              About
            </Link>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-medium mb-2">Services</span>
              {["Rolling Shutters", "Entrance Automation", "General Fabrication"].map(
                (service, idx) => (
                  <Link
                    key={idx}
                    to="/services"
                    className="pl-4 text-[#1a2940] text-base"
                    onClick={toggleMenu}
                  >
                    {service}
                  </Link>
                )
              )}
            </div>
            <Link to="/blog" className="text-lg font-medium" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/contact" className="text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Scroll to top button */}
      <div className="fixed bottom-56 right-10 z-[1010]">
        <div
          className="rounded-full border-2 border-dotted border-secondary/90 p-3 flex items-center justify-center cursor-pointer w-14 h-14 hover:bg-secondary/90 group transition"
          onClick={handleTop}
        >
          <ArrowUpwardIcon className="text-secondary/90 w-7 h-7 group-hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
