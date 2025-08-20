import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Exceptional Durability:",
    description:
      "MS staircases are constructed from mild steel, known for its high tensile strength and resistance to wear and tear. This durability makes them ideal for high-traffic areas in both residential and commercial settings.",
  },
  {
    heading: "Cost-Effective:",
    description:
      "Mild steel offers excellent value for money, making MS staircases an affordable yet durable option. This material allows for quality construction without high costs, ensuring long-lasting performance and reliability.",
  },
  {
    heading: "Design Versatility:",
    description:
      "MS staircases can be customized in various styles, including straight, spiral, and curved designs. Whether you prefer a bold industrial look or sleek minimalist style, MS staircases offer flexibility to match your vision.",
  },
  {
    heading: "Low Maintenance:",
    description:
      "MS staircases require minimal upkeep. With proper coatings and finishes, they resist rust and corrosion, maintaining their appearance and functionality over time.",
  },
  {
    heading: " Safety:",
    description:
      "MS staircases are built to support heavy foot traffic and often come with sturdy handrails, providing additional support and ensuring compliance with building safety regulations.",
  },
];

const typesRailing = [
  {
    heading: "Residential Staircases:",
    description:
      "MS staircases are ideal for modern homes, offering a sleek and contemporary design that complements various interior styles. Whether used indoors or outdoors, they add a unique aesthetic to your property while providing reliable functionality.",
  },
  {
    heading: "Commercial Staircases:",
    description:
      "In commercial spaces such as offices, malls, and hotels, MS staircases are favored for their durability and ability to handle large volumes of foot traffic. They provide a professional and polished look while ensuring safety and structural integrity.",
  },
  {
    heading: "Industrial Staircases:",
    description:
      "MS staircases are commonly used in industrial settings such as warehouses and factories due to their strength and durability. These staircases can withstand heavy use and are designed to meet industrial safety standards.",
  },
  {
    heading: "Outdoor Staircases:",
    description:
      "With appropriate finishes, MS staircases can be installed outdoors, providing a durable solution for gardens, terraces, and other exterior areas. Their corrosion-resistant coatings help protect against weather conditions.",
  },
];

const maintainenceRailing = [
  {
    heading: "Professional Installation:",
    description:
      "MS staircases require expert installation to ensure structural integrity and safety. Hiring professional installers ensures that your staircase is compliant with building codes and constructed to withstand daily use.",
  },
  {
    heading: "Routine Maintenance:",
    description:
      "Regular inspections and maintenance, such as cleaning and checking for signs of wear or rust, can help extend the lifespan of your MS staircase. Minor repairs or touch-ups may be needed to keep it in optimal condition.",
  },
  {
    heading: "Corrosion Prevention:",
    description:
      "Applying rust-resistant coatings or finishes can prevent corrosion, especially for outdoor installations. This simple maintenance step ensures the longevity of your MS staircase.",
  },
];

const coatingRailing = [
  {
    heading: "Powder Coating:",
    description:
      "Powder-coated MS staircases offer excellent protection against rust and corrosion. Available in a wide range of colors, powder coating provides a durable and attractive finish that enhances the staircase’s aesthetic appeal.",
  },
  {
    heading: "Galvanizing:",
    description:
      "Galvanized MS staircases are treated with a layer of zinc to prevent rust and corrosion, making them ideal for outdoor or industrial applications. This protective coating ensures long-lasting durability even in harsh environments.",
  },
  {
    heading: "Painting:",
    description:
      "A painted finish allows for customization of MS staircases in various colors, matching the overall design scheme of your property. Regular maintenance may be required to keep the paint looking fresh.",
  },
  {
    heading: "Polishing:",
    description:
      "Polished MS staircases offer a sleek, shiny finish, enhancing the modern and stylish look of the structure. Polishing gives the staircase a premium appearance that is ideal for upscale residential or commercial spaces.",
  },
];

export const Staircase = () => {
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
          src="/Staircase.webp"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">STAIRCASE</div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;STAIRCASE
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Staircase
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Durable and Stylish MS Staircase Solutions for Your Home or Business
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              MS (Mild Steel) staircases are a popular choice for both residential and commercial properties, offering a perfect blend of durability, strength, and design flexibility. Known for their robust construction and ability to withstand heavy loads, MS staircases are ideal for various architectural styles. Whether you need a modern, sleek staircase for your home or a functional and durable structure for an industrial setting, MS staircases provide an excellent solution that meets safety standards while enhancing the visual appeal of your space.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Staircase.webp" // Change to your image path
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
           An MS staircase is a staircase made from mild steel, a strong and malleable material that is well-suited for creating durable and stylish staircases. Mild steel is highly versatile, making it ideal for a wide range of designs, from minimalist modern staircases to more intricate, decorative options. MS staircases are often favored for their structural integrity, low maintenance, and long-lasting performance in both indoor and outdoor settings.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of MS Staircases
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
Applications of MS Staircases          </div>

          {typesRailing?.map((ele) => (
            <>
              <div className="font-semibold mt-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}

          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
        Installation and Maintenance of MS Staircases
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
          Finishes and Coatings for MS Staircases
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
            MS staircases are the perfect choice for those seeking a durable, cost-effective, and stylish solution for their property. Whether used in residential, commercial, or industrial settings, these staircases offer superior strength, design flexibility, and easy maintenance, making them a popular choice for builders and property owners alike.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
