// import { Button } from "@/components/ui/button";
// import CheckIcon from '@mui/icons-material/Check';
// import useScrollAnimation from "./custom-hook";

// export const AboutDescription = () => {
//   const [ref,isVisible]=useScrollAnimation({ threshold: 0.2 });
//   return (
//     <section ref={ref} className={`transform transition-all ease-out duration-1000 ${isVisible ? "opacity-100 translate-x-0 scale-100":"opacity-0 translate-x-20 scale-95"} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 my-20 max-w-6xl mx-auto`}>
//       {/* LEFT IMAGE */}
//       <div className="w-full h-full">
//         <img
//           src="/access-control.webp"
//           alt="Building"
//           className="w-full h-[300px] object-cover rounded"
//         />
//       </div>

//       {/* RIGHT CONTENT */}
//       <div>
//         <p className="inline-block border-4 border-secondary/90 rounded-lg text-secondary/90 font-bold px-4 py-1 mb-4">
//           Welcome to METAL4CRAFT AUTOMATION
//         </p>

//         <h2 className="text-[50px] font-[900] text-[#181614] leading-tight mb-6">
//           About METAL4CRAFT
//           <br />
//           AUTOMATION <br />
//         </h2>

//         <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
//           At METAL4CRAFT AUTOMATION, we specialize in delivering premium fabrication solutions designed around the specific requirements of our clients. Focused on Entrance Automation, Rolling Shutters, and General Fabrication, our skilled team blends innovation with craftsmanship to create dependable solutions for residential and commercial applications alike. With a strong commitment to quality, efficiency, and customer satisfaction, we ensure every project is completed to the highest standards of excellence.
//         </p>
//         <div className="grid grid-cols-2 gap-8 my-4">
//           <div><CheckIcon className="text-secondary/90 mr-2"  />Entrance Automation</div>
//           <div><CheckIcon className="text-secondary/90 mr-2"  />Quality Assurance</div>
//           <div><CheckIcon className="text-secondary/90 mr-2"  />General Fabrication</div>
//           <div><CheckIcon className="text-secondary/90 mr-2"  />Rolling Shutters</div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import useScrollAnimation from "./custom-hook";

export const AboutDescription = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const features = [
    "Entrance Automation",
    "Quality Assurance",
    "General Fabrication",
    "Rolling Shutters",
  ];

  return (
    <section
      ref={ref}
      className={`relative transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } py-24 bg-gradient-to-r from-blue-50 to-gray-50 overflow-hidden`}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
        >
          About METAL4CRAFT AUTOMATION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 mt-4 text-lg"
        >
          Premium fabrication solutions for Entrance Automation, Rolling
          Shutters, and General Fabrication. We blend innovation with
          craftsmanship for residential and commercial projects.
        </motion.p>
      </div>

      {/* Zigzag Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text / Right Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <p className="inline-block border-4 border-secondary/90 text-secondary/90 font-bold px-4 py-1 rounded-lg">
            Welcome to METAL4CRAFT AUTOMATION
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Excellence in Fabrication & Automation
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our team ensures top-notch solutions tailored to your needs. We
            prioritize quality, efficiency, and customer satisfaction on every
            project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckIcon className="text-secondary/90" />
                <span className="font-semibold text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image / Left on zigzag */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            <img
              src="/access-control.jpg"
              alt="Building"
              className="rounded-2xl shadow-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-50 p-4 rounded-xl shadow-xl text-center">
              <p className="text-gray-800 font-bold">
                Trusted & Reliable Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
