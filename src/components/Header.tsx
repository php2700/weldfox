import { Button } from "@/components/ui/button";
import { Wrench, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="bg-[#000] text-secondary-foreground py-2 px-6 text-sm">
        <div className="container mx-auto flex items-center justify-end">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#fcc729]" />
              <span>info@metal4craft.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#fcc729]" />
              <span>+91 63630 91384</span>
            </div>
          </div>
        </div>
      </div>

      <header className="relative z-[4000] bg-white backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center px-2 justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg flex items-center justify-center">
                <Link to="/">
                  <img
                    src="/logo-1.jpeg"
                    className="h-16 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
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

              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href="#"
                  className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                    pathname === "/services"
                      ? "border-[#fcc729]"
                      : "border-transparent"
                  }`}
                >
                  Services
                </a>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-border z-[5000]">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-[#1a2940] hover:bg-[#fcc729] hover:text-secondary-foreground transition-colors"
                    >
                      Rolling Shutters
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-[#1a2940] hover:bg-[#fcc729] hover:text-secondary-foreground transition-colors"
                    >
                      Entrance Automation
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-[#1a2940] hover:bg-[#fcc729] hover:text-secondary-foreground transition-colors"
                    >
                      General Fabrication
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="/blog"
                className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
                  pathname === "/blog"
                    ? "border-[#fcc729]"
                    : "border-transparent"
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
            <div className="hidden lg:flex items-center">
              <Link to="/contact">
                <Button className="bg-[#fcc729] text-secondary-foreground px-6 py-3 text-sm font-bold rounded-3xl">
                  REQUEST A QUOTE
                </Button>
              </Link>
            </div>

            <div
              className="lg:hidden text-2xl text-[#1a2940]"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
          {menuOpen && (
            <div className="lg-hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 z-[5000]">
              <Link to="/" className="text-[#1a2940]" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-[#1a2940]" onClick={toggleMenu}>
                About
              </Link>
              <div className="flex flex-col space-y-2">
                <Link
                  to="#"
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
        </div>
      </header>
    </>
  );
};

export default Header;