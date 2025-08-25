// import { Link } from "react-router-dom";
// import useScrollAnimation from "./custom-hook";

// export const Offer = () => {
//   const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

//   return (
//     <section ref={ref} className={`bg-white py-20 px-4 transform transition-all duration-1000 ease-out ${
//   isVisible
//     ? "opacity-100 translate-x-0 scale-100"
//     : "opacity-0 translate-x-20 scale-95"
// }`}

// >
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Yellow Badge */}
//         <p className="inline-block border-4 border-secondary/90 rounded-lg text-secondary/90 font-semibold px-4 py-1 mb-4">
//           Our Services
//         </p>

//         {/* Heading */}
//         <h2 className="text-[50px] font-extrabold text-black mb-12">
//           WHAT WE OFFER
//         </h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* Card 1 */}
//           <div className="bg-white shadow-md rounded overflow-hidden text-left">
//             <Link to="/services">
//               <img
//                 src="/Staircase.webp"
//                 alt="Entrance Automation"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-[#181614] mb-2">
//                 ENTRANCE AUTOMATION
//               </h3>
//               <p className="text-[#000] text-[16px] font-[400]">
//                 We employ competent practices with a combination of knowledge & engineering expertise to furnish a sense of security for our customers.
//               </p>
//               <Link to='/entrance-automation'>
//                 <div className="text-center w-full font-[15px] font-bold hover:bg-secondary/90 hover:text-white my-2 py-4 bg-gray-100">
//                   READ MORE
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white shadow-md rounded overflow-hidden text-left">
//             <Link to="/services">
//               <img
//                 src="/service-2.jpeg"
//                 alt="Rolling Shutter"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-[#181614] mb-2">
//                 ROLLING SHUTTER
//               </h3>
//               <p className="text-[#000] text-[16px]">
//                 “Enhance your property with our premium rolling shutters, offering superior security, weather protection, and energy savings. With sleek designs and effortless performance, they’re the perfect blend of strength and style.”
//               </p>
//               <Link to='/roll-shutters'>
//                 <div className="text-center w-full font-[15px] font-bold hover:bg-secondary/90 hover:text-white my-2 py-4 bg-gray-100">
//                   READ MORE
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white shadow-md rounded overflow-hidden text-left">
//             <Link to="/services">
//               <img
//                 src="/automatic-gates.jpg"
//                 alt="General Fabrication"
//                 className="w-full h-64 object-cover"
//               />
//             </Link>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-[#181614] mb-2">
//                 GENERAL FABRICATION
//               </h3>
//               <p className="text-[#000] text-[16px]">
//               “We provide reliable general fabrication solutions, specializing in custom metalwork and structural components. With a focus on precision, durability, and innovation, our services are tailored to match the unique requirements of every project.”
//               </p>
//               <Link to='/general-fabrication'>
//                 <div className="text-center w-full font-[15px] font-bold hover:bg-secondary/90 hover:text-white my-2 py-4 bg-gray-100">
//                   READ MORE
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";
import useScrollAnimation from "./custom-hook";

export const Offer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      id: 1,
      title: "ENTRANCE AUTOMATION",
      desc: "We employ competent practices with a combination of knowledge & engineering expertise to furnish a sense of security for our customers.",
      img: "/automatic-gates.jpg",
      link: "/entrance-automation",
    },
    {
      id: 2,
      title: "ROLLING SHUTTER",
      desc: "Enhance your property with our premium rolling shutters, offering superior security, weather protection, and energy savings. With sleek designs and effortless performance, they’re the perfect blend of strength and style.",
      img: "/service-2.jpeg",
      link: "/roll-shutters",
    },
    {
      id: 3,
      title: "GENERAL FABRICATION",
      desc: "We provide reliable general fabrication solutions, specializing in custom metalwork and structural components. With a focus on precision, durability, and innovation, our services are tailored to match the unique requirements of every project.",
      img: "/Staircase.webp",
      link: "/general-fabrication",
    },
  ];

  return (
    <section
      ref={ref}
      className={`bg-white py-20 px-4 transform transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 translate-x-20 scale-95"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block border-4 border-secondary/90 rounded-lg text-secondary/90 font-semibold px-4 py-1 mb-4">
          Our Services
        </p>

        <h2 className="text-[50px] font-extrabold text-black mb-12">
          WHAT WE OFFER
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
            >
              <div
                className={`${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <Link to={service.link}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </Link>
              </div>


              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                } text-left`}
              >
                <h3 className="text-3xl font-bold text-[#181614] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#000] text-lg mb-6">{service.desc}</p>
                <Link to={service.link}>
                  <div className="inline-block px-8 py-3 bg-gray-100 font-bold text-[15px] rounded hover:bg-secondary/90 hover:text-white transition">
                    READ MORE
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
