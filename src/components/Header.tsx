// import { Button } from "@/components/ui/button";
// import { Wrench, Phone, Mail } from "lucide-react";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const location = useLocation();
//   const pathname = location.pathname;

//   return (
//     <>
//       <div className="bg-[#000] text-secondary-foreground py-2 px-0 md:px-6 text-sm">
//         <div className="container mx-auto flex items-center justify-start">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Mail className="w-4 h-4 text-secondary/90" />
//               <span>info@metal4craft.com</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Phone className="w-4 h-4 text-secondary/90" />
//               <span>+91 63630 91384</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <header className="relative z-[4000] bg-white backdrop-blur-sm border-b border-border">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center px-2 justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="rounded-lg flex items-center justify-center">
//                 <Link to="/">
//                   <img
//                     src="/logo-1.jpeg"
//                     className="h-16 w-auto object-contain"
//                   />
//                 </Link>
//               </div>
//             </div>
//             <nav className="hidden lg:flex items-center space-x-8">
//               <a
//                 href="/"
//                 className={`px-4 py-2 transition-colors font-medium rounded border-2 ${
//                   pathname === "/" ? "border-secondary/90" : "border-transparent"
//                 }`}
//               >
//                 Home
//               </a>

//               <a
//                 href="/about"
//                 className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
//                   pathname === "/about"
//                     ? "border-secondary/90"
//                     : "border-transparent"
//                 }`}
//               >
//                 About Us
//               </a>

//               <div
//                 className="relative"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <a
//                   href="#"
//                   className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
//                     pathname === "/services"
//                       ? "border-secondary/90"
//                       : "border-transparent"
//                   }`}
//                 >
//                   Services
//                 </a>
//                 {dropdownOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-border z-[5000]">
//                     <Link
//                       to="/services"
//                       className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
//                     >
//                       Rolling Shutters
//                     </Link>
//                     <Link
//                       to="/services"
//                       className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
//                     >
//                       Entrance Automation
//                     </Link>
//                     <Link
//                       to="/services"
//                       className="block px-4 py-2 text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition-colors"
//                     >
//                       General Fabrication
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="/blog"
//                 className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
//                   pathname === "/blog"
//                     ? "border-secondary/90"
//                     : "border-transparent"
//                 }`}
//               >
//                 Gallery
//               </a>

//               <a
//                 href="/contact"
//                 className={`text-foreground transition-colors font-medium px-4 py-2 border-2 rounded ${
//                   pathname === "/contact"
//                     ? "border-secondary/90"
//                     : "border-transparent"
//                 }`}
//               >
//                 Contact
//               </a>
//             </nav>
//             <div className="hidden lg:flex items-center">
//               <Link to="/contact">
//                 <Button className="bg-secondary/90 text-secondary-foreground px-6 py-3 text-sm font-bold rounded-3xl">
//                   REQUEST A QUOTE
//                 </Button>
//               </Link>
//             </div>

//             <div
//               className="lg:hidden text-2xl text-[#1a2940]"
//               onClick={toggleMenu}
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//           {menuOpen && (
//             <div className="lg-hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 z-[5000]">
//               <Link to="/" className="text-[#1a2940]" onClick={toggleMenu}>
//                 Home
//               </Link>
//               <Link to="/about" className="text-[#1a2940]" onClick={toggleMenu}>
//                 About
//               </Link>
//               <div className="flex flex-col space-y-2">
//                 <Link
//                   to="#"
//                   className="text-[#1a2940]"
//                   onClick={toggleMenu}
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="text-[#1a2940] pl-4"
//                   onClick={toggleMenu}
//                 >
//                   Rolling Shutters
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="text-[#1a2940] pl-4"
//                   onClick={toggleMenu}
//                 >
//                   Entrance Automation
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="text-[#1a2940] pl-4"
//                   onClick={toggleMenu}
//                 >
//                   General Fabrication
//                 </Link>
//               </div>
//               <Link to="/blog" className="text-[#1a2940]" onClick={toggleMenu}>
//                 Gallery
//               </Link>
//               <Link to="/contact" className="text-[#1a2940]" onClick={toggleMenu}>
//                 Contact
//               </Link>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
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
      {/* Topbar */}
      <div className="bg-[#111] text-secondary-foreground py-2 px-6 text-xs md:text-sm">
        <div className="container mx-auto flex items-center justify-start gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full ">
            <Mail className="w-4 h-4 text-secondary/90" />
            <span>info@metal4craft.com</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full ">
            <Phone className="w-4 h-4 text-secondary/90" />
            <span>+91 63630 91384</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-[4000] bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-1.jpeg"
              className="h-14 w-auto object-contain"
              alt="Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/blog", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`relative font-medium px-2 py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:scale-x-0 after:bg-secondary/90 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === link.path
                    ? "text-secondary/90 after:scale-x-100"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span
                className={`cursor-pointer font-medium px-2 py-1 transition-colors ${
                  pathname === "/services"
                    ? "text-secondary/90"
                    : "text-foreground"
                }`}
              >
                Services
              </span>
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl border border-border overflow-hidden">
                  {[
                    "Rolling Shutters",
                    "Entrance Automation",
                    "General Fabrication",
                  ].map((service, idx) => (
                    <Link
                      key={idx}
                      to="/services"
                      className="block px-5 py-3 text-sm text-[#1a2940] hover:bg-secondary/90 hover:text-secondary-foreground transition"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-secondary/90 text-secondary-foreground px-6 py-3 text-sm font-bold rounded-full shadow-md hover:shadow-lg transition">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div
            className="lg:hidden text-2xl text-[#1a2940]"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-[5000] flex flex-col p-8 space-y-6">
            <Link to="/" className="text-lg" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-lg" onClick={toggleMenu}>
              About
            </Link>
            <div>
              <span className="block text-lg mb-2">Services</span>
              <div className="flex flex-col space-y-2 pl-4">
                <Link to="/services" onClick={toggleMenu}>
                  Rolling Shutters
                </Link>
                <Link to="/services" onClick={toggleMenu}>
                  Entrance Automation
                </Link>
                <Link to="/services" onClick={toggleMenu}>
                  General Fabrication
                </Link>
              </div>
            </div>
            <Link to="/blog" className="text-lg" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/contact" className="text-lg" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/contact" className="mt-auto">
              <Button className="w-full bg-secondary/90 text-secondary-foreground font-bold rounded-full">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
