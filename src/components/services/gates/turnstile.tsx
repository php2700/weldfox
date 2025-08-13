import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Increased Security:",
    description:
      "Turnstiles act as a physical barrier, preventing unauthorized access and enhancing security in sensitive areas. This is especially important in environments where security is a top priority, such as government buildings, airports, and corporate offices.",
  },
  {
    heading: "Controlled Access:",
    description:
      "Turnstiles help manage the flow of people entering and exiting a facility, reducing congestion at entry points. This control contributes to a smoother entry process and minimizes potential safety hazards.",
  },
  {
    heading: "Integration with Access Control Systems:",
    description:
      "Many turnstiles can be seamlessly integrated with existing access control systems, allowing for efficient monitoring and management of access points. This integration enhances overall security and provides valuable data for operational analysis.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "By reducing the need for security personnel at entry points, turnstiles offer a cost-effective solution for access control. They enable businesses to allocate resources more efficiently while maintaining high-security standards.",
  },
  {
    heading: "Improved Safety:  ",
    description:
      "Turnstiles help prevent overcrowding and ensure orderly access, creating a safer environment for employees and visitors. By controlling entry, they minimize the risk of accidents during peak times.",
  },
];

const material = [
  {
    name: "Stainless Steel:",
    description:
      "Stainless steel is a popular material for turnstiles due to its durability and resistance to corrosion. It is suitable for both indoor and outdoor applications, providing a modern and professional appearance",
  },
  {
    name: "Aluminum :",
    description: `Aluminum turnstiles are lightweight and resistant to rust, making them ideal for environments where weight is a concern. They offer a cost-effective solution without sacrificing security.`,
  },
  {
    name: "Plastic and Composite Materials:",
    description:
      "A durable finish option that enhances aesthetic appeal while providing additional protection.",
  },
];

const customization = [
  {
    name: "Size and Configuration:",
    description:
      "Turnstiles can be customized to fit various entryway dimensions and operational needs, ensuring compatibility with your facility's layout.",
  },
  {
    name: "Finishes and Colors:",
    description: `Choose from different finishes and colors to match your branding and enhance the aesthetic appeal of your entry points.`,
  },
  {
    name: "Access Control Integration:",
    description: "Many turnstiles can be tailored to work seamlessly with existing access control systems, such as RFID readers, biometrics, and ticketing systems, enhancing security and efficiency.",
  },
];

const gates = [
  {
    name: "Security Requirements:",
    description:
      "Assess your facility's security needs to determine the appropriate type of turnstile (full height, half height, optical, or tripod) that will provide the desired level of protection.",
  },
  {
    name: "Traffic Volume:",
    description:
      "Evaluate the expected traffic volume at entry points to choose a turnstile that can efficiently manage the flow of people without causing delays",
  },
  {
    name: "Budget:",
    description:
      "Turnstiles vary in price, so establish a budget that includes initial costs and ongoing maintenance to ensure a high-quality product that meets your operational needs.",
  },
];

const useRolling = [
  {
    heading: "Full Height Turnstiles:",
    description:
      "These robust turnstiles provide maximum security, extending from floor to ceiling. They are ideal for high-security applications, such as prisons and military installations, where unauthorized entry must be prevented.",
  },
  {
    heading: "Half Height Turnstiles:",
    description:
      "Half-height turnstiles are suitable for environments where complete enclosure isn’t necessary. They provide a good balance of security and ease of access, making them popular in office buildings and transportation hubs.",
  },
  {
    heading: "Optical Turnstiles:",
    description:
      "Optical turnstiles utilize infrared sensors to detect when an individual passes through. They allow for high-speed entry and are often used in corporate settings, museums, and high-end retail environments where aesthetics and efficiency are important.",
  },
  {
    heading: "Tripod Turnstiles:",
    description:
      "Tripod turnstiles feature three rotating arms, allowing only one person to enter at a time. They are commonly used in public transit systems and events, where managing access is crucial.",
  },
];

export const Turnstile = () => {
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
          src="/Turnstile.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">TURNSTILES</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;TURNSTILES
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Turnstile
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Turnstiles – Your Solution for Enhanced Security and Access Control
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Turnstiles are essential security features designed to control access in various settings, including corporate offices, public transportation, stadiums, and more. They provide a physical barrier to unauthorized entry while allowing seamless access for authorized individuals. By implementing high-quality turnstiles, businesses can enhance security, improve safety, and streamline the flow of foot traffic in high-traffic areas.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Turnstile.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are Turnstiles?
          </div>
          <div style={{ lineHeight: "30px" }}>
            Turnstiles are mechanical gates that regulate entry into secure areas. They typically consist of rotating arms or barriers that allow only one person to pass at a time. Available in various designs, including full height, half height, optical, and tripod turnstiles, they can be integrated with various access control systems, such as RFID, biometric scanners, or ticketing systems, to enhance security further.


          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of Using Turnstiles
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
           Materials Used for Turnstiles
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
           Customization Options for Turnstiles
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
            How to Choose the Right Turnstile for Your Facility
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
           Installation & Maintenance of Turnstiles
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Proper installation is crucial for optimal performance and security. It is recommended to hire experienced professionals to ensure compliance with safety standards and functionality.
          </div>
           <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential to keep turnstiles in optimal condition. This includes checking mechanical components, ensuring proper alignment, and maintaining electronic systems.
          </div>
           <div className="text-lg font-semibold mt-4 text-[#000]">
            Software Updates:
          </div>
          <div className="text-[15px] font-[400] my-2">
            If your turnstiles are integrated with software systems, it is important to perform regular updates to ensure compatibility and security.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
           Types of Turnstiles
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
            Turnstiles are a vital investment for enhancing security and managing access in various environments. By choosing high-quality turnstiles, businesses can improve safety, streamline operations, and control entry effectively. Select the right turnstile solutions to optimize your facility's security and accessibility.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
