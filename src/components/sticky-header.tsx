import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <header className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md transition-all duration-500">
        <div className="w-full mx-auto px-20 py-4 flex items-center justify-between">
          <Link to="/">
            {" "}
            <img src="/logo-1.jpeg" alt="Logo" className="h-16 w-auto" />
          </Link>
          <nav className="hidden lg:flex space-x-10 text-lg font-medium">
            <a
              href="/"
              className={`px-4 py-2 transition-colors font-medium rounded border-2 ${
                pathname === "/" ? "border-[#fcc729]" : "border-transparent"
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                pathname === "/about"
                  ? "border-[#fcc729]"
                  : "border-transparent"
              }`}
            >
              About Us
            </a>

            <a
              href="/services"
              className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                pathname === "/services"
                  ? "border-[#fcc729]"
                  : "border-transparent"
              }`}
            >
              Services
            </a>

            <a
              href="/blog"
              className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                pathname === "/blog" ? "border-[#fcc729]" : "border-transparent"
              }`}
            >
              Gallery
            </a>

            <a
              href="/contact"
              className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                pathname === "/contact"
                  ? "border-[#fcc729]"
                  : "border-transparent"
              }`}
            >
              Contact
            </a>
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
          <div className="lg:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-[#1a2940] " onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-[#1a2940] " onClick={toggleMenu}>
              About
            </Link>
            <Link
              to="/services"
              className="text-[#1a2940] "
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link to="/blog" className="text-[#1a2940] " onClick={toggleMenu}>
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-[#1a2940] "
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </header>
      <div className="fixed bottom-24 right-10 z-10">
        <div
          className="rounded-full border-2 border-dotted border-[#fcc729] p-3 flex items-center justify-center hover:bg-[#fcc729] group cursor-pointer"
          onClick={handleTop}
        >
          <ArrowUpwardIcon className="text-[#fcc729] w-8 h-8 group-hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
