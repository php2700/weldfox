import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import StickyHeader from "../sticky-header";
import Footer from "../Footer";

const arr = [
  {
    heading: "Enhanced Security:",
    description:
      "While offering visibility, perforated rolling shutters create a formidable barrier against unauthorized access. Their sturdy construction ensures your property remains secure without sacrificing style.",
  },
  {
    heading: "Visibility and Airflow:",
    description:
      "The unique design allows light and air to flow through while providing a view of the outside. This makes them ideal for storefronts and cafes, attracting customers while keeping space secure.",
  },
  {
    heading: "Durability:",
    description:
      "Made from high-quality materials, perforated rolling shutters withstand harsh weather conditions and daily wear. Their robust design ensures a long lifespan, making them a reliable investment.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "These shutters are perfect for a variety of settings, including retail stores, warehouses, and industrial facilities. Their versatility makes them a popular choice for many commercial properties.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "Available in various colors and finishes, perforated rolling shutters can enhance the aesthetic of any building. Customize your shutters to match your brand or personal style.",
  },
];

const useRolling = [
  {
    heading: "Retail Stores:",
    description:
      "Secure merchandise while allowing potential customers to see products, encouraging foot traffic.",
  },
  {
    heading: "Cafes and Restaurants:",
    description:
      "Protect outdoor seating areas while maintaining an open atmosphere.",
  },
  {
    heading: "Industrial Facilities:",
    description:
      "Ensure safety and security in warehouses while allowing airflow and visibility.",
  },
];

export const PerfortedRollingShutters = () => {
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
          src="/perforated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white">
            {" "}
            PERFORTED ROLLING SHUTTERS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;  PERFORTED ROLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-20 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-12 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]text-[#181614]">
              Perforated Rollong Shutter
            </h2>
            <h3 className="text-2xl font-[400] mb-4 text-[#181614]">
             Perforated Rolling Shutters: Combining Security and Visibility
            </h3>
            <p
              className="text-base font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             Perforated rolling shutters are an innovative solution that provides the perfect blend of security and visibility. Designed with a series of small holes or slits, these shutters allow for air circulation and visibility while still offering protection against intruders and the elements. They are ideal for commercial applications where aesthetics and security are equally important.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/perforated-rolling-shutter.jpg"
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-6xl p-10">
          <div className="text-[23px] font-semibold my-4 text-[#181614]">
          What Are Perforated Rolling Shutters?
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
          Applications of Perforated Rolling Shutters
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
        How to Operate Perforated Rolling Shutters:
          </div>
          <div>
            Operating manual rolling shutters is straightforward: Grasp the
            handle and pull the shutter down smoothly to the desired position.
            Engage the locking mechanism to secure the shutter in place. To
            open, simply unlock and lift the shutter back into its housingHow to Operate Perforated Rolling Shutters:
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Maintenance Tips
          </div>
          <div>
           To ensure the longevity and functionality of your perforated rolling shutters, clean the surface with a mild detergent and water to prevent dirt buildup and maintain appearance. Regularly check the operating mechanisms for any signs of wear or malfunction. Apply lubricant to moving parts to ensure smooth operation.
          </div>
          <div className="text-[23px] text-[#181614] font-semibold mb-8 mt-4">
            Conclusion
          </div>
          <div>
           Perforated rolling shutters offer an ideal combination of security, visibility, and durability. Perfect for commercial properties looking to enhance aesthetics while providing protection, these shutters are a smart investment. Choose perforated rolling shutters today to secure your space while maintaining an inviting atmosphere.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
