// import { Wrench, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import useScrollAnimation from "./custom-hook";

// const Footer = () => {
//   const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

//   return (
//     <footer
// ref={ref}
// className={` transform transition-all ease-out duration-1000 ${
//   isVisible
//     ? "opacity-100 translate-y-100 scale-100"
//     : "opacity-0 translate-y-20 scale-95"
// } bg-white text-black`}
//     >
//       {/* Top Contact Info Bar */}
// <div className="bg-secondary/90">
//   <div className=" px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold rounded-md max-w-7xl mx-auto">
//     <div className="flex items-center gap-2">
//       <span className="text-orange-600 text-xl">📞</span>
//       <div>
//         <p className="text-[15px]">Give Us A Call</p>
//         <p className="text-[14px]">+91 63630 91384</p>
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <span className="text-orange-600 text-xl">📧</span>
//       <div>
//         <p className="text-[15px]">Email Address</p>
//         <p className="text-[14px]">info@metal4craft.com</p>
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <span className="text-orange-600 text-xl">📍</span>
//       <div>
//         <p className="text-[15px]">Office Location</p>
//         <p className="text-[14px]">Bengaluru, Karnataka 560064</p>
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <span className="text-orange-600 text-xl">⏰</span>
//       <div>
//         <p className="text-[15px]">Work Hours</p>
//         <p className="text-[14px]">Everyday 08:00 - 18:00</p>
//       </div>
//     </div>
//   </div>
// </div>
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
//         {/* Logo & About */}
//         <div>
//           <img
//             src="/logo-1.jpeg"
//             alt="metal4craft"
//             className="w-24 h-auto mb-4"
//           />
//           <p
//             className="mb-4 text-[15px] font-[500]"
//             style={{ lineHeight: "32px" }}
//           >
//             Metal4craft Automation delivers durable, innovative, and
//             precision-crafted fabrication solutions.
//           </p>
//           <Link to="/contact">
//             <button className="bg-secondary/90 hover:bg-[black] px-10 py-6 font-semibold text-white rounded-lg shadow">
//               CONTACT US
//             </button>
//           </Link>
//         </div>

//         {/* Links */}
//         <div>
//           <h3 className="font-bold text-[20px] mb-3">LINKS</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="/about"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/general-fabrication"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › General Fabrication
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/entrance-automation"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › Entrance Automation
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/roll-shutters"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › Rolling Shutter
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/blog"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › Blog
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="hover:text-secondary/90 text-[15px] font-[500] "
//                 style={{ lineHeight: "15px" }}
//               >
//                 › Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-[20px] mb-3">CONTACT</h3>
//           <p
//             className="mb- 2 text-[15px] font-[500] "
//             style={{ lineHeight: "32px" }}
//           >
//             📍 METAL4CRAFT AUTOMATION
//             <br />
//             Site No 9, Attur Village, yelahanka,
//             <br />
//             Near Best Shot Badminton Academy,
//             <br />
//             Yelahanka New Town,
//             <br />
//             Bengaluru, Karnataka 560064
//           </p>
//           <p
//             className="mb- 2 text-[15px] font-[500]"
//             style={{ lineHeight: "32px" }}
//           >
//             📧 info@metal4craft.com
//           </p>
//           <p
//             className="mb- 2 text-[15px] font-[500]"
//             style={{ lineHeight: "32px" }}
//           >
//             📞 +91 63630 91384
//           </p>
//         </div>
//       </div>

//       <div className="border-t bg-secondary/90 py-6 text-sm flex items-center justify-center gap-6">
//         <span>© Copyright 2025 by METAL4CRAFT AUTOMATION</span>
//         {/* <div className="flex gap-4">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faFacebookF}
//               className="w-4 h-4 p-2 rounded-full hover:bg-secondary/90"
//             />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faInstagram}
//               className="w-4 h-4 p-2 rounded-full hover:bg-secondary/90"
//             />
//           </a>
//         </div> */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useScrollAnimation from "./custom-hook";

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer
      ref={ref}
      className={` transform transition-all ease-out duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-100 scale-100"
          : "opacity-0 translate-y-20 scale-95"
      } bg-gray-900 text-white`}
    >
      <div className="bg-secondary/90 text-black">
        <div className=" px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold rounded-md max-w-7xl mx-auto">
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
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/logo-1.jpeg" alt="metal4craft" className="w-28 mb-4" />
          <p className="text-sm mb-4" style={{ lineHeight: "28px" }}>
            Metal4craft Automation delivers durable, innovative, and
            precision-crafted fabrication solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Services & Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About", href: "/about" },
              { name: "General Fabrication", href: "/general-fabrication" },
              { name: "Entrance Automation", href: "/entrance-automation" },
              { name: "Rolling Shutter", href: "/roll-shutters" },
              { name: "Blog", href: "/blog" },
              { name: "Contact Us", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="hover:text-orange-500 font-medium"
                >
                  › {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <p className="text-sm mb-2" style={{ lineHeight: "28px" }}>
            📍 Site No 9, Attur Village, yelahanka, Near Best Shot Badminton
            Academy, Yelahanka New Town,Bengaluru, Karnataka 560064
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: "28px" }}>
            📧 info@metal4craft.com
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: "28px" }}>
            📞 +91 63630 91384
          </p>
          <p className="text-sm mb-2" style={{ lineHeight: "28px" }}>
            ⏰ Everyday 08:00 - 18:00
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
          <p className="text-sm mb-4" style={{ lineHeight: "28px" }}>
            Have any questions or need assistance? Reach out to us and our team
            will get back to you promptly.
          </p>
          <Link to="/contact">
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-md font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <span className="text-sm">&copy; 2025 METAL4CRAFT AUTOMATION</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hover:text-orange-500"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-orange-500"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hover:text-orange-500"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-orange-500"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
