import { Calendar, User, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const RollShutters = () => {
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
      heading: "POWDER COATED ROLLING SHUTTER",
      img: "/powder-coated-rolling-shutter.jpg",
      description:
        "Powder-coated rolling shutters offer a perfect blend of style, strength, and functionality. Ideal for both residential and commerc",
      url: "/powder-coated-rolling-shutter",
    },
    {
      heading: "ALUMINIUM PUFF INSULATED ROLLING SHUTTER",
      img: "/aluminum-puff-insulated-rolling-shutter.jpg",
      description:
        "Aluminum puff insulated rolling shutters are an innovative solution for energy efficiency, security, and noise reduction. Ideal fo",
      url: "/aluminium-puff-rolling-shutter",
    },
    {
      heading: "FIRE-RATED ROLLING SHUTTER",
      img: "/fire-rated-rolling-shutter.jpg",
      description:
        "Fire-rated rolling shutters provide essential protection against fire hazards, making them an ideal choice for commercial and indu",
      url: "/fire-rated-shurtter",
    },
    {
      heading: "GALVANISED ROLLING SHUTTER",
      img: "/galvanised-rolling-shutter.jpg",
      description:
        "Galvanized rolling shutters are a reliable solution for enhancing security in both commercial and residential properties. Construc",
      url: "/galvanized-rolling-shutter",
    },
    {
      heading: "ALUMINIUM ROLLING SHUTTER",
      img: "/aluminium-rolling-shutter.jpg",
      description:
        "Galvanized rolling shutters are a reliable solution for enhancing security in both commercial and residential properties. Construc",
      url: "/aluminium-rolling-shutter",
    },
    {
      heading: "SS ROLLING SHUTTER",
      img: "/ss-rolling-shutter.jpg",
      description:
        "SS (Stainless Steel) rolling shutters are an exceptional choice for those seeking a combination of security, durability, and aesth",
      url: "/ss-rolling-shtter",
    },
    {
      heading: "MS ROLLING SHUTTER",
      img: "/ms-rolling-shutter.jpg",
      description:
        "MS (Mild Steel) rolling shutters are a popular choice for businesses and residential properties seeking robust security solutions.",
      url: "/ms-rolling-shtter",
    },
    {
      heading: "GRILL ROLLING SHUTTER",
      img: "/grill-rolling-shutter.jpg",
      description:
        "Grill rolling shutters are an ideal solution for businesses and homes that prioritize security without sacrificing aesthetics. Des",
      url: "/grill-rolling-shutter",
    },
    {
      heading: "PERFORATED ROLLING SHUTTER",
      img: "/perforated-rolling-shutter.jpg",
      description:
        "Perforated rolling shutters are an innovative solution that provides the perfect blend of security and visibility. Designed with a",
      url: "/perforted-rolling-shutter",
    },
    {
      heading: "MOTORIZED ROLLING SHUTTERS",
      img: "/motorized-rolling-shutters.jpg",
      description:
        "Motorized rolling shutters are a modern solution for enhancing security, convenience, and energy efficiency in both residential an",
      url: "/motorized-shutter",
    },
    {
      heading: "GEAR OPERATED ROLLING SHUTTER",
      img: "/gear-operated-rolling-shutters.jpg",
      description:
        "Gear operated rolling shutters are an excellent solution for enhancing security while providing ease of use. Designed with a robus",
      url: "/rolling-shutter",
    },
    {
      heading: "MANNUAL ROLLING  SHUTTER",
      img: "/manual-rolling-shutter.webp",
      description:
        "Manual rolling shutters are an efficient and cost-effective solution for enhancing security and privacy in both residential and co",
      url: "/mannual-rolling",
    },
    {
      heading: "TRANSPARENT/POLYCARBONATE ROLLING SHUTTER",
      img: "/polycarbonate-rolling-shutter.jpg",
      description:
        "Polycarbonate rolling shutters are an innovative solution for businesses and homes seeking enhanced security, durability, and aest",
      url: "/transparent-rolling-shutter",
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
          src="/fire-rated-rolling-shutter.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white text-center">
            {" "}
            ROLLING SHUTTER SERVICES
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; ROLLING SHUTTER
              SERVICES
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

export default RollShutters;
