import { Calendar, User, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const EntranceAutomation = () => {
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
      heading: "RETRACTABLE GATE",
      img: "/retractable-gate.jpg",
      description:
        "Retractable gates are innovative security solutions designed to provide both protection and accessibility for residential and comm",
      url: "/retracktable",
    },
    {
      heading: "TURNSTILE",
      img: "/Turnstile.jpg",
      description:
        "Turnstiles are essential security features designed to control access in various settings, including corporate offices, public tra",
      url: "/turnstile",
    },
    {
      heading: "DOCK SHELTERS",
      img: "/dock-shelters.webp",
      description:
        "Dock shelters are critical components for any loading dock, providing protection and support during the loading and unloading of g",
      url: "/dock-shelters",
    },
    {
      heading: "DOCK LEVERS",
      img: "/dock-levers.jpg",
      description:
        "Dock levers are critical components for any loading dock, providing essential support in the efficient and safe operation of loadi",
      url: "/dock-levers",
    },
    {
      heading: "AUTOMATIC BARRIES",
      // img: "/automatic-barriers.webp",
     img:"/automatic-barriers.jpg", 

      description:
        "Automatic barriers are essential for enhancing security and controlling access at various locations, including parking lots, toll",
      url: "/automatic-barries",
    },
    {
      heading: "AUTOMATIC SENSOR GAASS DOOR",
      img: "/automatic-sensor-glass-door.jpg",
      description:
        "Automatic sensor glass doors are an ideal solution for businesses seeking to enhance accessibility, improve energy efficiency, and",
      url: "/automatic-sensor-glass-door",
    },
    {
      heading: "AUTOMATIC OVERHEAD GARAGE DOOR",
      img: "/automatic-overhead-garage-door.jpg",
      description:
        "Automatic overhead garage doors are a popular choice for homeowners looking to combine convenience, security, and aesthetic appeal",
      url: "/automatic-garage-door",
    },
    {
      heading: "HIGH SPEED DOOR",
      img: "/high-speed-door.jpg",
      description:
        "High-speed doors are the go-to solution for industrial and commercial spaces that require quick access, enhanced security, and tem",
      url: "/high-speed-door",
    },
    {
      heading: "COLLAPSIBLE GATE",
      img: "/collapsible-ate.jpg",
      description:
        "Collapsible gates, also known as retractable gates, are an excellent solution for properties that require security without sacrifi",
      url: "/collapsible-gate",
    },
    {
      heading: "TRI-FOLDING GATE",
      img: "/Tri-Folding-gate.png",
      description:
        "Tri-folding gates are an innovative solution for properties requiring secure, space-saving entrances. These gates fold into three",
      url: "/tri-folding-gate",
    },
    {
      heading: "BI-FOLDING GATE",
      img: "/Bi-Folding-gate.jpg",
      description:
        "Bi-folding gates, also known as folding gates or concertina gates, are the perfect blend of functionality, security, and style. Th",
      url: "/bi-folding-gate",
    },
     {
      heading: "CURVE GARAGE GATE",
      img: "/curve-garage-gate.jpg",
      description:
        "Curve garage gates are revolutionizing the way homeowners and businesses approach garage door design. With their ability to glide",
      url: "/curve-garage-gate",
    },
    {
      heading: "CURVE SLIDING GATE",
      img: "/curve-sliding-gate.jpg",
      description:
        "If you’re looking to upgrade your property’s entrance with a gate that combines security, functionality, and visual appeal, curve",
      url: "/curve-slide-gate",
    },
    {
      heading: "TELESCOPIC GATE",
      img: "/Telescopic-gate.jpg",
      description:
        "Telescopic gates are an innovative solution for property access that combines space efficiency with robust security. Ideal for bot",
      url: "/telescopic-gate",
    },
    {
      heading: "SLIDING GATE",
      img: "/sliding-gate-automation.jpg",
      description:
        "Sliding gates are an innovative and efficient solution for property access, ideal for both residential and commercial applications",
      url: "/sliding-gates",
    },
    {
      heading: "SWING GATES",
      img: "/swing-gates.jpg",
      description:
        "Swing gates offer a classic and elegant solution for property access. Ideal for both residential and commercial applications, thes",
      url: "/swing-gates",
    },
    {
      heading: "AUTOMATIC GATES",
      img: "/automatic-gates.jpg",
      description:
        "Automatic gates offer unparalleled convenience and security for both residential and commercial properties. With advanced technolo",
      url: "/automatic-gates",
    },
    {
      heading: "SS GATES",
      img: "/SS-gates.jpg",
      description:
        "Stainless Steel (SS) gates are the perfect combination of strength, elegance, and versatility. Ideal for both residential and comm",
      url: "/ss-gates",
    },
    {
      heading: "MS GATES",
      img: "/ms-gate.avif",
      description:
        "Mild Steel (MS) gates are an excellent choice for enhancing security and aesthetics for residential and commercial properties. Kno",
      url: "/ms-gates",
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
          // src="/automatic-barriers.webp"
              src="/automatic-barriers.jpg" // Change to your image path

          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="text-7xl font-[900] text-white text-center">
            {" "}
            ENTRANCE AUTOMATION SERVICES
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; ENTRANCE AUTOMATION  SERVICES
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

export default EntranceAutomation;
