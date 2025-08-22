import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Exceptional Durability",
    description:
      "MS railings are highly durable and withstand harsh weather conditions, suitable for both indoor and outdoor use. Their strength ensures long-lasting performance with minimal maintenance.",
  },
  {
    heading: "Versatile Designs",
    description:
      "Available in various designs, MS railings can be customized to match any architectural style, from modern and sleek to traditional and ornate. Ideal for residential, commercial, and public spaces.",
  },
  {
    heading: "Cost-Effective Solution",
    description:
      "MS railings offer an economical choice without compromising quality or safety, providing robust security and long-lasting durability for different budgets.",
  },
  {
    heading: "Easy Installation",
    description:
      "MS railings are lightweight and easy to install, reducing labor costs and project timelines. Quick assembly makes them a preferred option for contractors and renovation projects.",
  },
  {
    heading: "Enhanced Safety",
    description:
      "MS railings provide a sturdy barrier to prevent falls and accidents, especially on balconies and staircases. This safety feature is essential for both residential and commercial properties.",
  },
];

const typesRailing = [
  {
    heading: "Balcony Railings",
    description:
      "MS balcony railings enhance safety and aesthetics while providing unobstructed views. They can be customized with various patterns and finishes to complement your home's architectural style.",
  },
  {
    heading: "Stair Railings",
    description:
      "MS stair railings provide robust support and ensure safety on staircases. They can be designed to match the overall theme of your interior space.",
  },
  {
    heading: "Garden Railings",
    description:
      "Perfect for outdoor areas, MS garden railings add a decorative touch while ensuring safety around gardens, patios, and walkways. They can be treated for corrosion resistance to withstand outdoor conditions.",
  },
  {
    heading: "Commercial Railings",
    description:
      "MS railings for commercial buildings meet specific safety standards while enhancing the property’s appearance. Custom designs can include branding elements or tailored color schemes.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation",
    description:
      "While MS railings are relatively easy to install, hiring a professional ensures they are mounted securely and comply with safety standards. Proper installation maximizes durability and effectiveness.",
  },
  {
    heading: "Regular Inspections",
    description:
      "Routine inspections help detect signs of wear, corrosion, or damage early. Addressing issues promptly extends the lifespan of your MS railings and preserves their appearance.",
  },
  {
    heading: "Cleaning and Care",
    description:
      "Maintain the finish and look of your MS railings by cleaning regularly with mild soap and water. Avoid abrasive cleaners that can damage the surface.",
  },
];

const coatingRailing = [
  {
    heading: "Powder Coating",
    description:
      "Powder coating provides a durable and attractive finish that protects MS railings from corrosion and wear. Available in various colors, it enhances both the aesthetic appeal and longevity of the railings.",
  },
  {
    heading: "Galvanizing",
    description:
      "Hot-dip galvanizing coats MS railings with a layer of zinc, offering excellent corrosion resistance. This treatment is ideal for outdoor applications exposed to moisture.",
  },
  {
    heading: "Painting",
    description:
      "A painted finish allows for a wide range of color options, making it easy to match railings with the surrounding décor. Regular maintenance helps keep the paint in good condition.",
  },
];

export const Msrailing = () => {
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
          src="/MS-railings.jpeg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">MS RAILINGS</div>
        </div>
      
      </div>
  <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;MS RAILINGS
            </h2>
          </div>
        </div>
      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
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
              MS (Mild Steel) railings are a vital addition to any property,
              offering both safety and visual appeal. Renowned for their
              durability and versatility, they are suitable for a wide range of
              applications, including residential balconies, commercial
              staircases, and industrial facilities. With robust construction
              and customizable designs, MS railings provide an ideal solution to
              enhance both the safety and aesthetics of your space.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/MS-railings.jpeg" // Change to your image path
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
            MS railings are crafted from mild steel, a material renowned for its
            excellent strength-to-weight ratio, making it perfect for durable
            and stable railings. They can be fabricated in a variety of designs,
            styles, and finishes to complement different architectural
            requirements. Suitable for both indoor and outdoor use, MS railings
            offer reliable support and protection while enhancing the overall
            aesthetics of your property.
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
            MS railings offer a practical and stylish way to enhance safety and
            aesthetics in both residential and commercial properties. Their
            durability, versatility, and cost-effectiveness make them a
            preferred choice for homeowners and builders. Choosing high-quality
            MS railings ensures reliable protection while adding a touch of
            elegance to any space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
