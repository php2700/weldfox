import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Convenient Operation:",
    description:
      "With the push of a button, motorized rolling shutters open or close easily. This convenience benefits large or hard-to-reach windows and doors, enabling quick access without strain.",
  },
  {
    heading: "Enhanced Security:",
    description:
      "Motorized rolling shutters provide a formidable barrier against intruders. Their robust design and locking mechanisms offer superior protection for your property, deterring theft and vandalism.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "These shutters regulate temperatures, providing insulation that reduces heating and cooling costs. By blocking heat in summer and retaining warmth in winter, they boost energy efficiency.",
  },
  {
    heading: "Customizable Options:",
    description:
      "Available in a variety of colors, materials, and designs, motorized rolling shutters can be tailored to fit the aesthetic of any property. Choose from options that best suit your style and functional needs.",
  },
  {
    heading: "Automated Control Systems:",
    description:
      "Many motorized shutters integrate into smart systems, allowing remote control and programming. Set schedules or operate them from your device.",
  },
];

const useRolling = [
  {
    heading: "Residential Properties:",
    description:
      "Secure your home with style, enhancing both security and curb appeal.",
  },
  {
    heading: "Commercial Spaces:",
    description:
      "Ideal for storefronts and warehouses, providing a secure environment for valuable inventory.",
  },
  {
    heading: "Garage Doors:",
    description:
      "Offer easy access while ensuring protection for vehicles and equipment.",
  },
];

export const MotorizedShutters = () => {
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
          src="/motorized-rolling-shutters.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
        MOTORIZED ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MOTORIZED ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
             Motorized Rolling Shutters
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             Motorized Rolling Shutters: The Ultimate in Convenience and Security
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Motorized rolling shutters are a modern solution for enhancing security, convenience, and energy efficiency in both residential and commercial properties. Equipped with advanced motor technology, these shutters offer effortless operation and reliable protection, making them an ideal choice for today’s busy lifestyles.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/motorized-rolling-shutters.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
      What Are Motorized Rolling Shutters?
          </div>
          <div
            className="text-lg text-[14px] my-6"
            style={{ lineHeight: "30px" }}
          >
           Powder-coated rolling shutters are constructed from high-quality materials and finished with a durable powder coating. This process not only enhances their appearance but also provides a protective layer that resists chipping, fading, and corrosion.
          </div>

          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded">
                <div className="my-4 font-semibold text-lg text-[#000]">
                  {ele.heading}
                </div>
                <div>{ele.description}</div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-8 text-[#181614]">
           Applications of Motorized Rolling Shutters
          </div>
          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000]">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold text-[#181614] mt-4 mb-8">
            How to Operate
          </div>
          <div className=" font-semibold text-[#000] ">
            How to Operate Manual Rolling Shutters:
          </div>
          <div>
            Operating manual rolling shutters is straightforward: Grasp the
            handle and pull the shutter down smoothly to the desired position.
            Engage the locking mechanism to secure the shutter in place. To
            open, simply unlock and lift the shutter back into its housing
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
            To ensure the longevity of your manual rolling shutters, wipe down
            the surface regularly to remove dust and debris. A mild soap
            solution works best. Periodically check for wear and tear on the
            mechanisms and replace any damaged components promptly. Apply a
            suitable lubricant to the tracks and moving parts to ensure smooth
            operation.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
            Manual rolling shutters are a practical and economical choice for
            enhancing the security of your property. With their easy operation,
            customizable designs, and added benefits like energy efficiency,
            they are suitable for various applications. Invest in manual rolling
            shutters today to protect your space without compromising on style
            or convenience.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
