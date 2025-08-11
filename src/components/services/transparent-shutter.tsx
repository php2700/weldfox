import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "Manual rolling shutters act as a formidable deterrent against break-ins. Their robust construction makes it difficult for intruders to gain access, ensuring peace of mind for property owners.",
  },
  {
    heading: "Affordability:",
    description:
      "Compared to automated options, manual rolling shutters are generally more budget-friendly. They offer an economical choice for those looking to enhance security without breaking the bank.",
  },
  {
    heading: "Easy Installation:",
    description:
      "Manual rolling shutters can be installed in various settings, from windows to doors. Their straightforward design allows for quick installation, making them an attractive option for property owners.",
  },
  {
    heading: "Versatile Design:",
    description:
      "Available in various colors and styles, manual rolling shutters can complement any architecture. Customize your shutters to fit your property’s aesthetic while adding an extra layer of protection.",
  },
  {
    heading: "Energy Efficiency:",
    description:
      "These shutters can provide insulation, helping to regulate indoor temperatures. This can lead to lower energy costs, especially during extreme weather conditions.",
  },
];

const useRolling = [
  {
    heading: "Residential Use:",
    description:
      "Protect windows and doors in homes, providing added security and privacy.",
  },
  {
    heading: "Residential Use:",
    description:
      "Ideal for storefronts and warehouses, ensuring security for valuable inventory.",
  },
  {
    heading: "Outdoor Areas:",
    description:
      "Secure patios and balconies, allowing for versatile usage of outdoor spaces.",
  },
];

export const TransparentRollingShutters = () => {
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
          src="/manual-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; Service &nbsp; - &nbsp;Manual Rolling
              Shutters
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] p-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 p-10 gap-8 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-4">Manual Rolling Shutters</h2>
            <h3 className="text-2xl font-semibold mb-4">
              Manual Rolling Shutters: A Blend Of Security And Convenience
            </h3>
            <p
              className="text-md leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Manual rolling shutters are an efficient and cost-effective
              solution for enhancing security and privacy in both residential
              and commercial properties. Designed for easy operation, these
              shutters provide a reliable barrier against intruders and adverse
              weather while allowing you to control access and visibility as
              needed.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/manual-rolling-shutter.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="p-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-2xl font-bold my-4 ">
            What Are Manual Rolling Shutters?
          </div>
          <div className="text-lg text-[14px]" style={{ lineHeight: "30px" }}>
            Powder-coated rolling shutters are constructed from high-quality
            materials and finished with a durable powder coating. This process
            not only enhances their appearance but also provides a protective
            layer that resists chipping, fading, and corrosion.
          </div>

          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {arr?.map((ele) => (
              <div className="border bg-white p-4 rounded">
                <div className="my-4 font-bold text-xl">{ele.heading}</div>
                <div>{ele.description}</div>
              </div>
            ))}
          </div>

          <div className="text-2xl font-bold my-4">
            Applications of Manual Rolling Shutters
          </div>
          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-2 ">{ele?.heading}</div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-2xl font-bold my-4">How to Operate</div>
          <div className=" font-semibold ">
            How to Operate Manual Rolling Shutters:
          </div>
          <div>
            Operating manual rolling shutters is straightforward: Grasp the
            handle and pull the shutter down smoothly to the desired position.
            Engage the locking mechanism to secure the shutter in place. To
            open, simply unlock and lift the shutter back into its housing
          </div>
          <div className="text-2xl font-bold my-4">Maintenance Tips</div>
          <div>
            To ensure the longevity of your manual rolling shutters, wipe down
            the surface regularly to remove dust and debris. A mild soap
            solution works best. Periodically check for wear and tear on the
            mechanisms and replace any damaged components promptly. Apply a
            suitable lubricant to the tracks and moving parts to ensure smooth
            operation.
          </div>
          <div className="text-2xl font-bold my-4">Conclusion</div>
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
