import { Wrench, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Top Contact Info Bar */}
      <div className="bg-yellow-400 px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold rounded-md max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">📞</span>
          <div>
            <p className="text-[15px]">Give Us A Call</p>
            <p className="text-[14px]">+91 63630 91384</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">📧</span>
          <div>
            <p className="text-[15px]">Email Address</p>
            <p className="text-[14px]">info@metal4craft.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">📍</span>
          <div>
            <p className="text-[15px]">Office Location</p>
            <p className="text-[14px]">Bengaluru, Karnataka 560064</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">⏰</span>
          <div>
            <p className="text-[15px]">Work Hours</p>
            <p className="text-[14px]">Everyday 08:00 - 18:00</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Logo & About */}
        <div>
          <img
            src="/logo-1.jpeg"
            alt="metal4craft"
            className="w-24 h-auto mb-4"
          />
          <p
            className="mb-4 text-[15px] font-[500]"
            style={{ lineHeight: "32px" }}
          >
            Metal4craft Automation delivers quality craftsmanship, blending
            timeless design with modern innovation.
          </p>
          <Link to="/contact">
            <button className="bg-[#fcc729] hover:bg-[black] px-10 py-6 font-semibold text-white rounded shadow">
              CONTACT US
            </button>
          </Link>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-[20px] mb-3">LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › About
              </a>
            </li>
            <li>
              <a
                href="/general-fabrication"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › General Fabrication
              </a>
            </li>
            <li>
              <a
                href="/entrance-automation"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › Entrance Automation
              </a>
            </li>
            <li>
              <a
                href="/rolling-shutter"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › Rolling Shutter
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#fcc729] text-[15px] font-[500] "
                style={{ lineHeight: "15px" }}
              >
                › Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[20px] mb-3">CONTACT</h3>
          <p
            className="mb- 2 text-[15px] font-[500] "
            style={{ lineHeight: "32px" }}
          >
            📍 METAL4CRAFT AUTOMATION
            <br />
            Site No 9, Attur Village, yelahanka,
            <br />
            Near Best Shot Badminton Academy, Yelahanka New Town,
            <br />
            Bengaluru, Karnataka 560064
          </p>
          <p
            className="mb- 2 text-[15px] font-[500]"
            style={{ lineHeight: "32px" }}
          >
            📧 info@metal4craft.com
          </p>
          <p
            className="mb- 2 text-[15px] font-[500]"
            style={{ lineHeight: "32px" }}
          >
            📞 +91 63630 91384
          </p>
        </div>
      </div>

      <div className="border-t py-6 text-sm flex items-center justify-center gap-6">
        <span>© Copyright 2025 by METAL4CRAFT AUTOMATION</span>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-4 h-4 p-2 rounded-full hover:bg-[#fcc729]"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-4 h-4 p-2 rounded-full hover:bg-[#fcc729]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
