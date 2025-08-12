import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Exceptional Durability:",
    description:
      "MS railings are highly durable and can withstand harsh weather conditions, making them suitable for both indoor and outdoor applications. Their strength ensures long-lasting performance and minimal maintenance.",
  },
  {
    heading: "Versatile Designs:",
    description:
      "Available in various designs, MS railings can be customized to match any architectural style, from modern and sleek to traditional and ornate. This versatility makes them ideal for residential homes, commercial buildings, and public spaces.",
  },
  {
    heading: "Cost-Effective Solution:",
    description:
      "MS railings offer an economical choice without compromising on quality or safety. Their affordability makes them accessible for various budgets while providing robust security and long-lasting durability in both residential and commercial settings.",
  },
  {
    heading: "Easy Installation:",
    description:
      "MS railings are relatively easy to install, reducing labor costs and project timelines. Their lightweight nature allows for quick assembly and installation, making them a preferred choice for contractors, builders, and renovation projects.",
  },
  {
    heading: "Enhanced Safety:",
    description:
      "By providing a sturdy barrier, MS railings help prevent falls and accidents, especially in elevated areas such as balconies and staircases. This safety feature is essential for both residential and commercial properties.",
  },
];

const typesRailing = [
  {
    heading: "Balcony Railings:",
    description:
      "MS balcony railings are designed to enhance safety and aesthetics while providing unobstructed views. They can be customized with various patterns and finishes to complement the architectural style of your home.",
  },
  {
    heading: "Stair Railings:",
    description:
      "MS stair railings offer robust support and safety on staircases, ensuring stability for users. They can be designed to match the overall theme of your interior space.",
  },
  {
    heading: "Garden Railings:",
    description:
      "Ideal for outdoor areas, MS garden railings provide a decorative touch while ensuring safety around gardens, patios, and walkways. They can be treated for corrosion resistance to withstand outdoor conditions.",
  },
  {
    heading: "Commercial Railings:",
    description:
      "For businesses and commercial buildings, MS railings can be designed to meet specific safety standards while enhancing the property’s overall appearance. Custom designs can include branding elements or specific color schemes.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "While MS railings are easy to install, hiring a professional ensures that they are mounted securely and meet local safety regulations. Proper installation is crucial for maximizing the railings' durability and effectiveness.",
  },
  {
    heading: "Regular Inspections:",
    description:
      "Routine inspections help identify any signs of wear, corrosion, or damage. Addressing these issues promptly can extend the lifespan of your MS railings and maintain their appearance.",
  },
  {
    heading: "Cleaning and Care:",
    description:
      "Regular cleaning with mild soap and water can help maintain the finish and appearance of MS railings. Avoid abrasive cleaners that may damage the surface.",
  },
];

const coatingRailing = [
  {
    heading: "Powder Coating:",
    description:
      "Powder coating provides a durable and attractive finish, protecting MS railings from corrosion and wear. Available in various colors, this finish enhances the aesthetic appeal and longevity of the railings.",
  },
  {
    heading: "Galvanizing:",
    description:
      "Hot-dip galvanizing is a process that coats MS railings with a layer of zinc, providing excellent corrosion resistance. This treatment is especially beneficial for outdoor applications where exposure to moisture is a concern.",
  },
  {
    heading: "Painting:",
    description:
      "A painted finish allows for a wide range of color options, making it easy to match the railings to the surrounding décor. Regular maintenance may be required to keep the paint in good condition.",
  },
];

export const Structural = () => {
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
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">MS RAILINGS</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MS RAILINGS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              MS Railings
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Durable and Stylish MS Railings for Your Property
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) railings are an essential addition to any
              property, providing both safety and visual appeal. Known for their
              durability and versatility, MS railings can be used in various
              applications, including residential balconies, commercial
              staircases, and industrial facilities. With their robust
              construction and customizable designs, MS railings offer an ideal
              solution for enhancing the safety and aesthetics of your space.
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

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are MS Railings?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS railings are made from mild steel, a material known for its
            excellent strength-to-weight ratio, making it an ideal choice for
            railings that require durability and stability. These railings can
            be fabricated in various designs, styles, and finishes to suit
            different architectural needs. Whether for indoor or outdoor use, MS
            railings provide reliable support and protection while enhancing the
            overall look of your property.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using MS Railings
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

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Types of MS Railings
          </div>

          {typesRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Installation and Maintenance of MS Railings
          </div>

          {maintainenceRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Finishes and Coatings for MS Railings
          </div>

          {coatingRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            MS railings are a practical and stylish solution for enhancing safety and aesthetics in both residential and commercial properties. Their durability, versatility, and cost-effectiveness make them a popular choice among homeowners and builders alike. By choosing high-quality MS railings, you can protect your property while adding a touch of elegance to your space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
