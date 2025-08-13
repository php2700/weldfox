import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Exceptional Durability:",
    description:
      "SS railings are designed to withstand the elements, making them ideal for both indoor and outdoor applications. Their durability ensures a long lifespan with minimal maintenance required.",
  },
  {
    heading: "Corrosion Resistance:",
    description:
      "Stainless steel is inherently resistant to rust and corrosion, making SS railings perfect for environments exposed to moisture, such as coastal areas or outdoor settings.",
  },
  {
    heading: "Modern Aesthetic:",
    description:
      "SS railings offer a sleek and contemporary look, adding a touch of sophistication to any property. They can enhance the visual appeal of both residential and commercial spaces.",
  },
  {
    heading: "Easy Maintenance:",
    description:
      "SS railings require minimal upkeep. Regular cleaning with mild soap and water is often sufficient to keep them looking new, making them a practical choice for busy property owners.",
  },
  {
    heading: "Versatile Applications:",
    description:
      "SS railings can be used in various settings, including residential balconies, commercial staircases, and public spaces. Their versatility makes them suitable for multiple architectural styles.",
  },
];

const typesRailing = [
  {
    heading: "Brushed Finish:",
    description:
      "A brushed finish provides a sleek, matte appearance, making it a popular choice for contemporary designs. This finish helps to hide fingerprints and scratches, maintaining the railing's aesthetic appeal.",
  },
  {
    heading: "Polished Finish:",
    description:
      "Polished SS railings have a shiny, reflective surface, adding a touch of elegance. This finish is often used in upscale residential and commercial properties.",
  },
  {
    heading: "Powder Coating:",
    description:
      "For added color and protection, powder coating can be applied to SS railings. Available in various colors, this finish enhances the aesthetic while providing an extra layer of corrosion resistance.",
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
    heading: "Balcony Railings:",
    description:
      "SS balcony railings provide safety and aesthetic appeal, allowing for unobstructed views while ensuring protection. Custom designs can include glass panels or decorative elements for added flair.",
  },
  {
    heading: "Stair Railings:",
    description:
      "SS stair railings offer sturdy support and safety for staircases, complementing both modern and traditional interiors. They can be designed to suit the overall theme of your property.",
  },
  {
    heading: "Glass Railings:",
    description:
      "Combining stainless steel with glass panels creates a sleek, modern look while maintaining safety. Glass railings are perfect for maximizing visibility and light while providing protection.",
  },
  {
    heading: "Pool Railings:",
    description:
      "SS railings are an ideal choice for pool areas, offering safety and a stylish touch. They can withstand moisture and pool chemicals, ensuring durability and longevity.",
  },
];

export const Ssrailing = () => {
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
          src="/SS-railings.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SS RAILINGS</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SS RAILINGS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              SS Railings
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              The Perfect Blend of Durability and Aesthetics
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
             SS (Stainless Steel) railings are an excellent choice for enhancing the safety and visual appeal of your residential or commercial space. Known for their superior strength, corrosion resistance, and modern look, SS railings are ideal for various applications, including balconies, staircases, and outdoor areas. By investing in high-quality SS railings, you can ensure safety while adding a touch of elegance to your property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/SS-railings.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Are SS Railings?
          </div>
          <div style={{ lineHeight: "30px" }}>
           SS railings are made from stainless steel, a high-quality material known for its resistance to rust, corrosion, and staining. These railings can be customized in various designs, styles, and finishes to suit different architectural needs. Whether for indoor or outdoor use, SS railings provide reliable support and protection while enhancing the overall look of your space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Using SS Railings

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
           Finishes and Coatings for SS Railings
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
            Installation and Maintenance of SS Railings2
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
           Types of SS Railings
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
           SS railings are a stylish and practical solution for enhancing safety and aesthetics in both residential and commercial properties. Their durability, corrosion resistance, and easy maintenance make them a popular choice among homeowners and builders alike. By choosing high-quality SS railings, you can protect your property while adding a touch of elegance and sophistication.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
