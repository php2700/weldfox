import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Space Efficiency:",
    description:
      "Telescopic gates slide in sections, making them ideal for properties with limited space while still allowing wide openings.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Sturdy construction and secure locking mechanisms provide reliable protection for residential and commercial properties.",
  },
  {
    heading: "Smooth Operation:",
    description:
      "Designed to slide effortlessly, telescopic gates ensure convenient and reliable access.",
  },
  {
    heading: "Durability:",
    description:
      "Constructed from high-quality materials, these gates withstand frequent use and harsh environmental conditions.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "Sleek sectional designs enhance the visual appeal of any property while maintaining functionality.",
  },
];

const material = [
  {
    name: "Steel:",
    description:
      "Provides superior strength and durability, ensuring long-lasting performance for telescopic gates.",
  },
  {
    name: "Aluminum:",
    description:
      "Lightweight yet strong, aluminum resists rust and requires minimal maintenance.",
  },
  {
    name: "Stainless Steel:",
    description:
      "Offers corrosion resistance and modern appeal, ideal for telescopic gate designs.",
  },
];

const customization = [
  {
    name: "Design Options:",
    description:
      "Choose from various styles, finishes, and panel configurations to suit your property’s aesthetic.",
  },
  {
    name: "Automation Options:",
    description:
      "Telescopic gates can be fitted with automated openers, remote control, or smart access systems for added convenience.",
  },
];

const gates = [
  {
    name: "Space-Saving Design:",
    description:
      "Telescopic gates require minimal opening space while allowing wide access, making them ideal for compact areas.",
  },
  {
    name: "Reliable Security:",
    description:
      "Robust construction and secure locking systems ensure your property is protected at all times.",
  },
  {
    name: "Effortless Operation:",
    description:
      "Smooth sectional movement provides easy and convenient access, whether manually or with automation.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Perfect for homes with limited driveway space, offering both convenience and security.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Ideal for offices, retail outlets, and gated communities requiring efficient access control in compact areas.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Suitable for warehouses and factories where wide openings are needed but space is limited.",
  },
];

export const Telescopic = () => {
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
      <div className="relative w-full">
        <img
          src="/Telescopic-gate.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TELESCOPIC GATES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TELESCOPIC GATES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Telescopic Gate
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Maximize Access and Security with Telescopic Gates
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Telescopic gates provide an innovative solution for property
              access, combining space efficiency with robust security. Suitable
              for both residential and commercial properties, these gates offer
              a stylish and functional way to control entry while maximizing
              available space.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Telescopic-gate.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Telescopic Gates?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Telescopic gates slide open in sections, with each panel stacking
            neatly behind the next. This unique design allows for wider openings
            without needing a large area for gate operation, making them ideal
            for properties with limited space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Key Benefits of Telescopic Gates
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
            Step-by-Step Telescopic Gate Installation Process
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
            Applications of Telescopic Gates
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
            Why Choose Telescopic Gates?
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
            Installation and Maintenance
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Initial Site Assessment:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Before installation, a professional will perform a comprehensive
            assessment of your property. This includes measuring the entryway,
            evaluating the slope of the ground, and identifying potential
            obstacles such as walls or landscaping features. Key factors to
            consider include the width of the driveway or entrance, the space
            needed for the gate to retract, ground conditions (uneven terrain
            may require leveling or foundation adjustments), and access to a
            power supply if the gate will be automated.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Design and Customization:
          </div>
          <div className="text-[15px] font-[400] my-2">
            After the site assessment, you will collaborate with the installer
            to choose the gate’s design, material, and features. Common
            materials include steel (durable and secure, ideal for high-security
            needs), aluminum (lightweight, corrosion-resistant, and
            low-maintenance), and wood or composite (providing a traditional
            look with modern strength). You can also select finishes, colors,
            and additional features such as automation, safety sensors, or
            access control systems to tailor the gate to your property.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Laying the Foundation and Installing the Track:
          </div>
          <div className="text-[15px] font-[400] my-2">
            A stable foundation is essential for the smooth operation of a
            telescopic gate. Installers will lay the ground track along which
            the gate panels slide, which may involve digging trenches, pouring
            concrete to create a solid base, and carefully installing the track
            mechanism. Proper alignment of the track is critical to ensure
            smooth movement and to prevent unnecessary wear and tear on the gate
            panels.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Materials for Telescopic Gates
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
            Investing in telescopic gates is a smart choice for enhancing
            security, space efficiency, and convenience. Explore our range of
            high-quality telescopic gates to find the perfect solution for your
            property.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
