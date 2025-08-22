import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Durability:",
    description:
      "MS Mangalore tiles are durable and withstand harsh weather conditions, including heavy rain, and extreme temperatures. Their robust construction ensures long-lasting performance.",
  },
  {
    heading: "Lightweight:",
    description:
      "Compared to traditional clay tiles, MS Mangalore tiles are significantly lighter, making them easier to handle during installation and reducing the overall load on the building structure.",
  },
  {
    heading: "Cost-Effective:",
    description:
      "With lower material and installation costs, MS Mangalore tiles provide an affordable roofing solution without compromising quality or aesthetics.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "These tiles require minimal maintenance. Regular inspections and cleaning are generally sufficient to keep them in excellent condition, saving time and costs in the long run.",
  },
  {
    heading: "Aesthetic Versatility:",
    description:
      "Available in various colors and finishes, MS Mangalore tiles can be customized to match your property’s style, enhancing its overall appearance and value.",
  },
];

const typesRailing = [
  {
    heading: "Residential Roofing:",
    description:
      "MS Mangalore tiles add a touch of elegance to homes while providing reliable protection against the elements.",
  },
  {
    heading: "Commercial Buildings:",
    description:
      "Businesses can benefit from the aesthetic appeal and durability of MS Mangalore tiles, creating a professional and attractive look for their facilities.",
  },
  {
    heading: "Institutional Structures:",
    description:
      "Schools, hospitals, and other public buildings can enhance their roofs with MS Mangalore tiles, combining safety and visual appeal.",
  },
  {
    heading: "Cultural and Traditional Buildings:",
    description:
      "MS Mangalore tiles are perfect for preserving the cultural essence of traditional architecture while providing modern durability.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "Proper installation is essential for the performance and longevity of MS Mangalore tiles. Our skilled team ensures that each tile is installed according to industry best practices.",
  },
  {
    heading: "Quality Control:",
    description:
      "We conduct thorough quality checks during installation, ensuring every tile is positioned correctly and meets our high standards.",
  },
  {
    heading: "Custom Fitting:",
    description:
      "Our team can customize the fitting of MS Mangalore tiles to suit your specific roofing needs, ensuring a perfect match for your building.",
  },
];

const coatingRailing = [
  {
    heading: "Routine Condition Checks:",
    description:
      "Regularly examine MS Mangalore tiles for cracks, chips, or signs of wear to ensure your roof remains fully protected.",
  },
  {
    heading: "Surface Cleaning:",
    description:
      "Remove accumulated dirt, leaves, and moss to prevent staining or water retention, keeping your roof looking fresh and clean.",
  },
  {
    heading: "Protective Coating Maintenance:",
    description:
      "Reapply anti-rust or weather-resistant coatings periodically to maintain the tiles’ durability against harsh elements.",
  },
  {
    heading: "Timely Repairs:",
    description:
      "Replace or fix any damaged or loose tiles promptly to avoid leaks and maintain the structural integrity of your roofing.",
  },
];

export const Safety = () => {
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
          src="/safety-grill.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">SAFETY GRILL</div>
        </div>
       
      </div>
 <div className="mt-10  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;SAFETY GRILL
            </h2>
          </div>
        </div>
      <section className="bg-[#f8f8f8] mt-4 pt-4">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Safety Grill
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              The Perfect Blend of Tradition and Durability
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Mangalore tiles, celebrated for their unique design and
              dependability, are a favored choice in both traditional and
              contemporary architecture. Our MS Mangalore tiles combine the
              classic charm of terracotta with the strength and durability of
              mild steel (MS). Designed to protect your property while enhancing
              its visual appeal, these tiles offer a reliable and stylish
              roofing solution.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/safety-grill.webp" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What Are MS Mangalore Tiles?
          </div>
          <div style={{ lineHeight: "30px" }}>
            MS Mangalore tiles are roofing tiles crafted from mild steel,
            designed to replicate the appearance of traditional terracotta
            Mangalore tiles. This innovative approach combines the classic charm
            of Mangalore tiles with the strength and durability of steel. Ideal
            for a variety of applications, these tiles provide both functional
            protection and aesthetic appeal for any structure.{" "}
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of MS Mangalore Tiles
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
            Applications of MS Mangalore Tiles
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
            Installation of MS Mangalore Tiles
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
            Maintenance Tips for MS Mangalore Tiles
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
            MS Mangalore tiles provide a perfect blend of classic design and
            modern strength. By choosing our premium mild steel tiles, you
            ensure your property is both visually appealing and well-protected,
            all while benefiting from low maintenance requirements and long-term
            cost savings.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
