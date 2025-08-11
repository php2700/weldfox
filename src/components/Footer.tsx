import { Wrench, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Top Contact Info Bar */}
      <div className="bg-yellow-400 px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold rounded-md max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">📞</span>
          <div>
            <p className="text-[15px]">Give Us A Call</p>
            <p className="text-[14px]">+91 9036974070 / 61</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-600 text-xl">📧</span>
          <div>
            <p className="text-[15px]">Email Address</p>
            <p className="text-[14px]">sales@arkofabrications.com</p>
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
          <img src="/logo-1.jpeg" alt="metal4craft" className="w-24 h-auto mb-4" />
          <p className="mb-4 text-[15px] font-[500]" style={{lineHeight:'32px'}}>
            Metal4craftT Automation delivers quality craftsmanship, blending timeless
            design with modern innovation.
          </p>
          <button className="bg-[#fcc729] hover:bg-[black] px-10 py-6 font-semibold text-white rounded shadow">
            CONTACT US
          </button>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-[20px] mb-3">LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › About
              </a>
            </li>
            <li>
              <a href="#"  className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › General Fabrication
              </a>
            </li>
            <li>
              <a href="#"  className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › Entrance Automation
              </a>
            </li>
            <li>
              <a href="#"  className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › Rolling Shutter
              </a>
            </li>
            <li>
              <a href="/blog"  className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › Blog
              </a>
            </li>
            <li>
              <a href="/contact"  className="hover:text-[#fcc729] text-[15px] font-[500] " style={{lineHeight:'15px'}}>
                › Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[20px] mb-3">CONTACT</h3>
          <p className="mb- 2 text-[15px] font-[500] " style={{lineHeight:'32px'}}>
            📍  METAL4CRAFT AUTOMATION
            <br />
            44, 12th Main, 2nd Phase, Royal Enclave,
            <br />
            Jakkur Post, Srirampura, Rachenahalli, Thanisandra,
            <br />
            Bengaluru, Karnataka 560064
          </p>
          <p className="mb- 2 text-[15px] font-[500]" style={{lineHeight:'32px'}}>📧 sales@arkofabrications.com</p>
          <p className="mb- 2 text-[15px] font-[500]" style={{lineHeight:'32px'}}>📞 +91 9036974070, +91 9036974061</p>
        </div>
      </div>

      <div className="border-t text-center py-6 text-sm">
        © Copyright 2025 by METAL4CRAFT
        <div className="flex justify-center gap-4 mt-2">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
