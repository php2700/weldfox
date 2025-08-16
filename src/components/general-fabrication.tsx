import { Calendar, User, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const GeneralFabrication = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleView = (article, index) => {};

  const articles = [
    {
      heading: "SAFETY GRILL",
      img: "/safety-grill.png",
      description:
        "Mangalore tiles, known for their distinct design and reliability, have been a popular choice in traditional and modern architectur",
      url: "/safety-grill",
    },
    {
      heading: "STRUCTURAL FABRICATION",
      img: "/structural-fabrication.jpg",
      description:
        "Structural fabrication is a crucial process in the construction and manufacturing industries, involving the creation of metal stru",
      url: "/structural-fabrication",
    },
    {
      heading: "ROOFING WORK",
      img: "/Roofing-work.jpg",
      description:
        "Mild Steel (MS) roofing is an excellent choice for those seeking durability, strength, and aesthetic appeal in their roofing solut",
      url: "/roofing",
    },
    {
      heading: "BUILDING ELEVATION WORK",
      img: "/building-elevation-work.jpg",
      description:
        "Building elevation work is a crucial aspect of modern architecture, focusing on enhancing the visual appeal and structural integri",
      url: "/elevation",
    },
    {
      heading: "COMPOUND GRILL",
      img: "/compound-grill.jpg",
      description:
        "Compound grills are essential for enhancing the security and visual appeal of your property. These grills, made from a combination",
      url: "/compound-grill",
    },
    {
      heading: "WINDOW GRILL",
      img: "/window-grill.jpg",
      description:
        "SS (Stainless Steel) window grills are an excellent solution for enhancing the security and visual appeal of your property. Known",
      url: "/window-grill",
    },
    {
      heading: "COLLAPSIBLE GATE",
      img: "/collapsible-ate.jpg",
      description:
        "MS (Mild Steel) window grills are essential for enhancing the security and aesthetic appeal of your property. These grills not onl",
      url: "/collapsible",
    },
    {
      heading: "PARGOLA",
      img: "/Pargola.jpg",
      description:
        "An MS (Mild Steel) pergola is an excellent addition to any outdoor area, providing both beauty and functionality. Known for their",
      url: "/pergola",
    },
    {
      heading: "STAIRCASE",
      img: "/Staircase.jpg",
      description:
        "MS (Mild Steel) staircases are a popular choice for both residential and commercial properties, offering a perfect blend of durabi",
      url: "/staircase",
    },
    {
      heading: "SS RAILINGS",
      img: "/SS-railings.webp",
      description:
        "SS (Stainless Steel) railings are an excellent choice for enhancing the safety and visual appeal of your residential or commercial",
      url: "/ss-railing",
    },
    {
      heading: "MS RAILINGS",
      img: "/MS-railings.jpeg",
      description:
        "MS (Mild Steel) railings are an essential addition to any property, providing both safety and visual appeal. Known for their durab",
      url: "/ms-railing",
    },
  ];
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
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white text-center">
            {" "}
            GENERAL FABRICATION SERVICES
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; GENERAL FABRICATION
              SERVICESLLING SHUTTERS
            </h2>
          </div>
        </div>
      </div>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.img}
                  className="h-80 bg-gradient-steel cursor-pointer object-cover w-full"
                />
                <div className="p-4 my-6">
                  <div className="text-lg font-semibold my-4">
                    {article.heading}
                  </div>
                  <div
                    className="text-[14px] font-[400] my-4 text-[#000]"
                    style={{ lineHeight: "25px" }}
                  >
                    {article.description}
                  </div>
                  <Link to={article?.url}>
                    <button className="border text-white bg-[#fcc729] font-[14px] rounded-lg cursor-pointer py-1 font-[500] px-4">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GeneralFabrication;
