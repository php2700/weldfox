// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import useScrollAnimation from "./custom-hook";

// export const Description = () => {
//   const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
//   return (
//     <section
//       ref={ref}
//       className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 max-w-7xl mx-auto transition-all duration-1000 ease-out transform ${
//         isVisible
//           ? "opacity-100 translate-y-0 scale-100"
//           : "opacity-0 translate-y-20 scale-95"
//       }`}
//     >
//       <div className="w-full h-full">
//         <img
//           src="/description.webp"
//           alt="Building"
//           className="w-full h-[600px] object-cover rounded-lg"
//         />
//       </div>
//       <div>
//         <p className="inline-block border-4 rounded-lg border-secondary/90 text-secondary/90 font-bold px-4 py-1 mb-4">
//           Welcome to METAL4CRAFT AUTOMATION
//         </p>

//         <h2 className="text-[50px] font-[900] text-[#181614] leading-tight mb-6">
//           QUALITY <br />
//           & PRECISION <br />
//         </h2>

//         <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
//           “At METAL4CRAFT AUTOMATION, we understand the importance of strength,
//           security, and design. That’s why we specialize in Entrance Automation,
//           Rolling Shutters, and General Fabrication, offering solutions that are
//           not only long-lasting but also tailored to match the needs of
//           residential and commercial clients.”
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 mt-12">
//           <Link to="/about">
//             <Button className="bg-secondary/90 hover:bg-black-500  px-12 py-10 text-lg font-bold">
//               READ MORE
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollAnimation from "./custom-hook";

export const Description = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden max-w-7xl mx-auto px-6 py-24 transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      {/* Slanted Background */}
      <div className="absolute -top-24 left-0 w-full h-[600px] bg-gradient-to-tr from-orange-400 to-yellow-300 -skew-y-6 rounded-xl opacity-30 -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-block bg-white/30 text-orange-700 font-bold px-5 py-2 rounded-full text-lg mb-4 shadow-lg animate-pulse">
            Welcome to METAL4CRAFT AUTOMATION
          </span>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            QUALITY <span className="text-orange-600">&</span> PRECISION
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed font-medium mb-8">
            “At METAL4CRAFT AUTOMATION, we understand the importance of strength,
            security, and design. That’s why we specialize in Entrance Automation,
            Rolling Shutters, and General Fabrication, offering solutions that are
            not only long-lasting but also tailored to match the needs of
            residential and commercial clients.”
          </p>

          <Link to="/about">
            <Button className="bg-gray-900 text-white hover:bg-orange-600 px-12 py-4 rounded-lg font-bold shadow-xl transition-transform transform hover:scale-105">
              READ MORE
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="/description.webp"
            alt="Building"
            className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-orange-200 transform hover:scale-105 transition-transform duration-500"
          />
          {/* Floating Circle Shape */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-orange-300 rounded-full opacity-50 blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Additional Decorative Floating Shapes */}
      <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-yellow-300 rounded-full opacity-40 blur-2xl animate-spin-slow -z-10"></div>
      <div className="absolute top-[-80px] right-[-80px] w-32 h-32 bg-orange-400 rounded-full opacity-30 blur-2xl animate-bounce-slow -z-10"></div>
    </section>
  );
};
