import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: " Durability:",
    description:
      "MS pergolas are constructed from mild steel, known for its strength and resistance to bending or breaking. This durability ensures that your pergola will withstand harsh weather conditions, providing long-lasting performance.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Unlike wooden pergolas that may require frequent treatment and repair, MS pergolas require minimal upkeep. With proper coating, they resist rust, corrosion, and weathering, ensuring longevity and aesthetic appeal.",
  },
  {
    heading: "Design Flexibility:",
    description:
      "MS pergolas can be designed in various styles, sizes, and colors to complement your outdoor décor. Whether you prefer a modern, sleek look or a more traditional design, an MS pergola can be tailored to meet your specific needs.",
  },
  {
    heading: "Shade and Comfort:",
    description:
      "An MS pergola provides a shaded area in your outdoor space, allowing you to enjoy the outdoors without the harsh effects of direct sunlight. This added comfort makes it an ideal setting for relaxation, dining, or entertaining guests.",
  },
  {
    heading: "Increased Property Value:",
    description:
      "Installing an MS pergola can enhance the overall aesthetic of your property and increase its value. Potential buyers often appreciate well-designed outdoor spaces, making a pergola a worthwhile investment.",
  },
];

const typesRailing = [
  {
    heading: "Durability:",
    description:
      "MS pergolas are constructed from mild steel, known for its strength and resistance to bending or breaking. This durability ensures that your pergola will withstand harsh weather conditions, providing long-lasting performance.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "Unlike wooden pergolas that may require frequent treatment and repair, MS pergolas require minimal upkeep. With proper coating, they resist rust, corrosion, and weathering, ensuring longevity and aesthetic appeal.",
  },
  {
    heading: "Design Flexibility:",
    description:
      "MS pergolas can be designed in various styles, sizes, and colors to complement your outdoor décor. Whether you prefer a modern, sleek look or a more traditional design, an MS pergola can be tailored to meet your specific needs.",
  },
  {
    heading: "Shade and Comfort:",
    description:
      "An MS pergola provides a shaded area in your outdoor space, allowing you to enjoy the outdoors without the harsh effects of direct sunlight. This added comfort makes it an ideal setting for relaxation, dining, or entertaining guests.",
  },
  {
    heading: "Increased Property Value:",
    description:
      "Installing an MS pergola can enhance the overall aesthetic of your property and increase its value. Potential buyers often appreciate well-designed outdoor spaces, making a pergola a worthwhile investment.",
  },
];

const maintainenceRailing = [
  {
    heading: "Flat Roof Pergolas:",
    description:
      "Flat roof pergolas offer a modern, minimalist look. They provide ample coverage and can be integrated with retractable canopies for adjustable shade.",
  },
  {
    heading: "Arched Roof Pergolas:",
    description:
      "An arched roof design adds a touch of elegance and sophistication to your outdoor space. This style allows for a more open feel while providing a visually appealing structure.",
  },
  {
    heading: "Lattice Pergolas:",
    description:
      "Lattice pergolas feature a grid-like design on the roof, allowing for the growth of climbing plants while providing partial shade. This option combines functionality with natural beauty.",
  },
   {
    heading: "Integrated Lighting:",
    description:
      "Enhance your MS pergola with integrated lighting for nighttime enjoyment. LED lights can be added to the structure, creating a warm and inviting atmosphere for evening gatherings.",
  },
];

const coatingRailing = [
 {
    heading: "Flat Roof Pergolas:",
    description:
      "Flat roof pergolas offer a modern, minimalist look. They provide ample coverage and can be integrated with retractable canopies for adjustable shade.",
  },
  {
    heading: "Arched Roof Pergolas:",
    description:
      "An arched roof design adds a touch of elegance and sophistication to your outdoor space. This style allows for a more open feel while providing a visually appealing structure.",
  },
  {
    heading: "Lattice Pergolas:",
    description:
      "Lattice pergolas feature a grid-like design on the roof, allowing for the growth of climbing plants while providing partial shade. This option combines functionality with natural beauty.",
  },
   {
    heading: "Integrated Lighting:",
    description:
      "Enhance your MS pergola with integrated lighting for nighttime enjoyment. LED lights can be added to the structure, creating a warm and inviting atmosphere for evening gatherings.",
  },
];

export const Pargola = () => {
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
          src="/Pargola.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">PARGOLA</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;PARGOLA
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Pargola
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Outdoor Space with Stylish MS Pergolas
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
            An MS (Mild Steel) pergola is an excellent addition to any outdoor area, providing both beauty and functionality. Known for their durability and versatility, MS pergolas are designed to enhance gardens, patios, and backyards while offering shade and protection from the elements. Whether you want to create a cozy outdoor nook, a stylish entertainment area, or a pathway through your garden, an MS pergola can elevate your outdoor living experience.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Pargola.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           What Is an MS Pergola?
          </div>
          <div style={{ lineHeight: "30px" }}>
           An MS pergola is a structure made from mild steel, typically consisting of vertical posts supporting crossbeams and an open lattice roof. This design allows sunlight to filter through while providing support for climbing plants and vines, creating a natural, shaded environment. MS pergolas can be customized to fit various styles and dimensions, making them a perfect fit for any outdoor space.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
           Benefits of MS Pergolas
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
           Applications of MS Pergolas
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
           Installation and Maintenance of MS Pergolas
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
            Custom Design Options for MS Pergolas
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
