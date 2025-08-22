import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Exceptional Durability",
    description:
      "SS railings are built to withstand the elements, making them ideal for both indoor and outdoor use. Their durability ensures a long lifespan with minimal maintenance.",
  },
  {
    heading: "Corrosion Resistance",
    description:
      "Stainless steel is naturally resistant to rust and corrosion, making SS railings perfect for environments exposed to moisture, such as coastal or outdoor areas.",
  },
  {
    heading: "Modern Aesthetic",
    description:
      "SS railings provide a sleek and contemporary look, adding sophistication to any property. They enhance the visual appeal of both residential and commercial spaces.",
  },
  {
    heading: "Easy Maintenance",
    description:
      "SS railings require minimal upkeep. Regular cleaning with mild soap and water keeps them looking new, making them practical for busy property owners.",
  },
  {
    heading: "Versatile Applications",
    description:
      "SS railings are suitable for a variety of settings, including residential balconies, commercial staircases, and public spaces. Their versatility complements multiple architectural styles.",
  },
];

const typesRailing = [
  {
    heading: "Brushed Finish",
    description:
      "A brushed finish offers a sleek, matte appearance, making it ideal for contemporary designs. It helps conceal fingerprints and minor scratches, maintaining the railing's aesthetic appeal.",
  },
  {
    heading: "Polished Finish",
    description:
      "Polished SS railings feature a shiny, reflective surface that adds elegance. This finish is commonly used in upscale residential and commercial properties.",
  },
  {
    heading: "Powder Coating",
    description:
      "Powder coating provides added color and protection for SS railings. Available in various colors, it enhances aesthetics while offering an extra layer of corrosion resistance.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation",
    description:
      "Although MS railings are relatively easy to install, hiring a professional ensures they are mounted securely and comply with safety standards. Proper installation maximizes durability and effectiveness.",
  },
  {
    heading: "Regular Inspections",
    description:
      "Routine inspections help detect signs of wear, corrosion, or damage early. Promptly addressing these issues extends the lifespan of your MS railings and preserves their appearance.",
  },
  {
    heading: "Cleaning and Care",
    description:
      "Maintain the finish and look of MS railings by cleaning regularly with mild soap and water. Avoid abrasive cleaners that may damage the surface.",
  },
];

const coatingRailing = [
  {
    heading: "Balcony Railings",
    description:
      "SS balcony railings enhance safety and aesthetics, providing unobstructed views while ensuring protection. Custom designs can include glass panels or decorative elements for added style.",
  },
  {
    heading: "Stair Railings",
    description:
      "SS stair railings offer sturdy support and safety for staircases, complementing both modern and traditional interiors. They can be tailored to match the overall theme of your property.",
  },
  {
    heading: "Glass Railings",
    description:
      "Combining stainless steel with glass panels creates a sleek, modern look while maintaining safety. Glass railings maximize visibility and light while providing protection.",
  },
  {
    heading: "Pool Railings",
    description:
      "SS railings are ideal for pool areas, offering safety and a stylish touch. They resist moisture and pool chemicals, ensuring durability and long-lasting performance.",
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
          src="/SS-railings.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SS RAILINGS</div>
        </div>
       
      </div>
 <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SS RAILINGS
            </h2>
          </div>
        </div>
      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2  gap-10 ">
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
              SS (Stainless Steel) railings are an excellent choice for
              enhancing both safety and visual appeal in residential or
              commercial spaces. Renowned for their superior strength, corrosion
              resistance, and sleek modern look, SS railings are perfect for
              balconies, staircases, and outdoor areas. Investing in
              high-quality SS railings ensures reliable safety while adding a
              touch of elegance to your property.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/SS-railings.jpg" // Change to your image path
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
            SS railings are crafted from stainless steel, a premium material
            known for its resistance to rust, corrosion, and staining. They can
            be customized in a variety of designs, styles, and finishes to suit
            diverse architectural needs. Suitable for both indoor and outdoor
            use, SS railings provide reliable support and protection while
            enhancing the overall aesthetics of your space.
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
            SS railings provide a stylish and practical solution for enhancing
            safety and aesthetics in residential and commercial properties.
            Their durability, corrosion resistance, and low maintenance make
            them a preferred choice for homeowners and builders. Choosing
            high-quality SS railings ensures reliable protection while adding
            elegance and sophistication to your space.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
