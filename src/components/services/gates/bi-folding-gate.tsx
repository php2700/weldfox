import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const arr = [
  {
    heading: "Space-Saving Design:",
    description:
      "Bi-folding gates fold onto themselves, making them ideal for properties with limited space while allowing full access when open.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Sturdy construction and secure locking mechanisms provide reliable protection for residential and commercial properties.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Hinged panels ensure easy folding and unfolding, allowing convenient entry and exit for vehicles and pedestrians.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek, folding designs enhance the visual appeal of any property while maintaining functionality.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality materials, bi-folding gates withstand frequent use and resist wear over time.",
  },
];

const material = [
  {
    name: "Steel Bi-Folding Gates:",
    description:
      "Known for their strength and durability, steel bi-folding gates are ideal for properties requiring high security, such as commercial or industrial premises.",
  },
  {
    name: "Aluminum Bi-Folding Gates:",
    description:
      "Lightweight, rust-resistant aluminum gates are perfect for residential properties seeking a sleek, modern look with minimal maintenance.",
  },
  {
    name: "Wooden Bi-Folding Gates:",
    description:
      "For a traditional or rustic appearance, wooden bi-folding gates provide a natural aesthetic. They offer charm but may require more maintenance compared to metal gates.",
  },
];

const customization = [
  {
    name: "Size:",
    description:
      "Bi-folding gates can be custom-built to fit any driveway or entrance size, ensuring a perfect fit for your property.",
  },
  {
    name: "Finish:",
    description:
      "Choose from a variety of finishes, including powder-coated colors for metal gates or stained finishes for wooden gates, to complement your property’s style.",
  },
  {
    name: "Security Features:",
    description:
      "Enhance safety with smart security options such as CCTV, intercom systems, or automatic locking mechanisms for better control.",
  },
  {
    name: "Automation:",
    description:
      "Automate your bi-folding gate with electric motors and control it via remote, keypad, or smartphone app for convenience and ease of use.",
  },
];

const gates = [
  {
    name: "Property Size & Layout:",
    description:
      "The available space, entrance width, and overall layout of your driveway or entrance will determine the size and type of bi-folding gate you need.",
  },
  {
    name: "Security Needs:",
    description:
      "For enhanced security, choose a strong material like steel and consider automated locking systems or integrated security features.",
  },
  {
    name: "Design Preferences:",
    description:
      "Select a style and material that complements the architectural design of your property, whether modern, traditional, or industrial.",
  },
  {
    name: "Budget:",
    description:
      "Bi-folding gates come in a range of prices, so select a solution that fits your budget while meeting functional and aesthetic requirements.",
  },
];

const useRolling = [
  {
    heading: "Manual Bi-Folding Gates:",
    description:
      "Simple and cost-effective, manual bi-folding gates are operated by hand and ideal for residential properties with infrequent access needs.",
  },
  {
    heading: "Automatic Bi-Folding Gates:",
    description:
      "Automated bi-folding gates offer maximum convenience and security. Controlled via remote, keypad, or smartphone, they provide effortless access without leaving your vehicle.",
  },
  {
    heading: "Industrial Applications:",
    description:
      "Perfect for industrial settings, these gates provide robust entry control where strength, durability, and reliability are essential.",
  },
];

export const Bifolding = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const goingDown = currentScroll > lastScrollY.current;

        if (currentScroll <= 0 || (!goingDown && currentScroll < 100)) {
          setShowSticky(false);
        } else if (goingDown && currentScroll > 100) {
          setShowSticky(true);
        }

        lastScrollY.current = currentScroll;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen relative bg-background">
      <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      {showSticky && <StickyHeader />}
      {/* <div className="relative w-full">
        <img
          src="/Bi-Folding-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">BI FOLDING GATES</div>
        </div>
       
      </div>
       <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;BI FOLDING GATES
            </h2>
          </div>
        </div> */}
           <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src="/Bi-Folding-gate.jpg"
                  alt="About Us Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
        
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 skew-y-[-3deg] origin-top-left"></div>
        
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative max-w-4xl mx-auto text-center px-6"
                >
                  <h1 className="text-4xl md:text-5xl font-extrabold text-secondary/90 leading-tight mb-4">
                  BI FOLDING GATES
                  </h1>
                  <p className="text-white/90 text-md md:text-lg leading-relaxed">
                    At METAL4CRAFT AUTOMATION, we specialize in delivering premium
                    fabrication solutions designed around the specific requirements of
                    our clients. Focused on Entrance Automation, Rolling Shutters, and
                    General Fabrication, our skilled team blends innovation with
                    craftsmanship.
                  </p>
                </motion.div>
              </section>

      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Bi-Folding Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Property with Bi-Folding Gates – Space-Saving, Secure
              & Stylish Solutions
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Bi-folding gates, also known as folding or concertina gates,
              combine functionality, security, and style. These gates fold in on
              themselves to open, providing an efficient solution for properties
              with limited space or unique entrance designs. Suitable for both
              residential driveways and commercial properties, bi-folding gates
              offer a modern solution that maximizes space, convenience, and
              aesthetic appeal.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Bi-Folding-gate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is a Bi-Folding Gate?
          </div>
          <div style={{ lineHeight: "30px" }}>
            A bi-folding gate opens by folding its sections together. Unlike
            traditional swing or sliding gates, these gates are hinged in the
            middle and fold back onto themselves, creating a compact,
            space-saving solution. They are ideal for driveways, pedestrian
            entrances, and commercial properties where space efficiency and
            security are essential.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Installing a Bi-Folding Gate
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.heading}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Materials for Bi-Folding Gates
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {material?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.name}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Customization Options for Bi-Folding Gates
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {customization?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            How to Choose the Right Bi-Folding Gate for Your Property
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {gates?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Installation & Maintenance of Bi-Folding Gates
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Due to the complexity of the folding mechanism and the potential for
            automation, it’s important to have your bi-folding gate
            professionally installed to ensure proper function and longevity.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Regular Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            While bi-folding gates are designed for durability, they still
            require periodic maintenance to ensure smooth operation. This
            includes lubricating hinges, cleaning tracks, and inspecting the
            automation system if applicable.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Weather Resistance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Choose weather-resistant materials and finishes, especially in areas
            exposed
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Bi-Folding Gates
          </div>

          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-8 mb-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            Bi-folding gates provide a smart, stylish, and practical solution
            for property entrances. Whether you want to enhance security, save
            space, or add a modern touch to your driveway, these gates are a
            versatile choice. With their space-saving design, quick operation,
            and customizable options, bi-folding gates are an ideal investment
            for both residential and commercial properties.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
