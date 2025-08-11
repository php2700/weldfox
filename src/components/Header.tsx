import { Button } from "@/components/ui/button";
import { Wrench, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="bg-[#000] text-secondary-foreground py-2 px-6 text-sm">
        <div className="container mx-auto flex items-center justify-end">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#fcc729]" />
              <span>sales@arkofabrications.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#fcc729]" />
              <span>+91 9036974070</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#fcc729]" />
              <span>+91 9036974061</span>
            </div>
          </div>
        </div>
      </div>

      <header className="z-50 bg-white backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className=" rounded-lg flex items-center justify-center">
                <Link to='/'><img
                  src="/logo-1.jpeg"
                  className="h-16 w-auto object-contain"
                /></Link>
                
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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
                  pathname === "/blog"
                    ? "border-[#fcc729]"
                    : "border-transparent"
                }`}
              >
                Blog
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              
              <Button className="bg-[#fcc729] text-secondary-foreground px-6 py-3 text-sm font-bold rounded-3xl">
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
