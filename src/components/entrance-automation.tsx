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

  // const articles = [
  //   {
  //     heading: "RETRACTABLE GATE",
  //     img: "/retractable-gate.jpg",
  //     description:
  //       "Retractable gates are innovative security solutions designed to provide both protection and accessibility for residential and comm",
  //     url: "/retracktable",
  //   },
  //   {
  //     heading: "TURNSTILE",
  //     img: "/Turnstile.jpg",
  //     description:
  //       "Turnstiles are essential security features designed to control access in various settings, including corporate offices, public tra",
  //     url: "/turnstile",
  //   },
  //   {
  //     heading: "DOCK SHELTERS",
  //     img: "/dock-shelters.webp",
  //     description:
  //       "Dock shelters are critical components for any loading dock, providing protection and support during the loading and unloading of g",
  //     url: "/dock-shelters",
  //   },
  //   {
  //     heading: "DOCK LEVERS",
  //     img: "/dock-levers.jpg",
  //     description:
  //       "Dock levers are critical components for any loading dock, providing essential support in the efficient and safe operation of loadi",
  //     url: "/dock-levers",
  //   },
  //   {
  //     heading: "AUTOMATIC BARRIES",
  //     // img: "/automatic-barriers.webp",
  //    img:"/automatic-barriers.jpg",

  //     description:
  //       "Automatic barriers are essential for enhancing security and controlling access at various locations, including parking lots, toll",
  //     url: "/automatic-barries",
  //   },
  //   {
  //     heading: "AUTOMATIC SENSOR GAASS DOOR",
  //     img: "/automatic-sensor-glass-door.jpg",
  //     description:
  //       "Automatic sensor glass doors are an ideal solution for businesses seeking to enhance accessibility, improve energy efficiency, and",
  //     url: "/automatic-sensor-glass-door",
  //   },
  //   {
  //     heading: "AUTOMATIC OVERHEAD GARAGE DOOR",
  //     img: "/automatic-overhead-garage-door.jpg",
  //     description:
  //       "Automatic overhead garage doors are a popular choice for homeowners looking to combine convenience, security, and aesthetic appeal",
  //     url: "/automatic-garage-door",
  //   },
  //   {
  //     heading: "HIGH SPEED DOOR",
  //     img: "/high-speed-door.jpg",
  //     description:
  //       "High-speed doors are the go-to solution for industrial and commercial spaces that require quick access, enhanced security, and tem",
  //     url: "/high-speed-door",
  //   },
  //   {
  //     heading: "COLLAPSIBLE GATE",
  //     img: "/collapsible-ate.jpg",
  //     description:
  //       "Collapsible gates, also known as retractable gates, are an excellent solution for properties that require security without sacrifi",
  //     url: "/collapsible-gate",
  //   },
  //   {
  //     heading: "TRI-FOLDING GATE",
  //     img: "/Tri-Folding-gate.png",
  //     description:
  //       "Tri-folding gates are an innovative solution for properties requiring secure, space-saving entrances. These gates fold into three",
  //     url: "/tri-folding-gate",
  //   },
  //   {
  //     heading: "BI-FOLDING GATE",
  //     img: "/Bi-Folding-gate.jpg",
  //     description:
  //       "Bi-folding gates, also known as folding gates or concertina gates, are the perfect blend of functionality, security, and style. Th",
  //     url: "/bi-folding-gate",
  //   },
  //    {
  //     heading: "CURVE GARAGE GATE",
  //     img: "/curve-garage-gate.jpg",
  //     description:
  //       "Curve garage gates are revolutionizing the way homeowners and businesses approach garage door design. With their ability to glide",
  //     url: "/curve-garage-gate",
  //   },
  //   {
  //     heading: "CURVE SLIDING GATE",
  //     img: "/curve-sliding-gate.jpg",
  //     description:
  //       "If you’re looking to upgrade your property’s entrance with a gate that combines security, functionality, and visual appeal, curve",
  //     url: "/curve-slide-gate",
  //   },
  //   {
  //     heading: "TELESCOPIC GATE",
  //     img: "/Telescopic-gate.jpg",
  //     description:
  //       "Telescopic gates are an innovative solution for property access that combines space efficiency with robust security. Ideal for bot",
  //     url: "/telescopic-gate",
  //   },
  //   {
  //     heading: "SLIDING GATE",
  //     img: "/sliding-gate-automation.jpg",
  //     description:
  //       "Sliding gates are an innovative and efficient solution for property access, ideal for both residential and commercial applications",
  //     url: "/sliding-gates",
  //   },
  //   {
  //     heading: "SWING GATES",
  //     img: "/swing-gates.jpg",
  //     description:
  //       "Swing gates offer a classic and elegant solution for property access. Ideal for both residential and commercial applications, thes",
  //     url: "/swing-gates",
  //   },
  //   {
  //     heading: "AUTOMATIC GATES",
  //     img: "/automatic-gates.jpg",
  //     description:
  //       "Automatic gates offer unparalleled convenience and security for both residential and commercial properties. With advanced technolo",
  //     url: "/automatic-gates",
  //   },
  //   {
  //     heading: "SS GATES",
  //     img: "/SS-gates.jpg",
  //     description:
  //       "Stainless Steel (SS) gates are the perfect combination of strength, elegance, and versatility. Ideal for both residential and comm",
  //     url: "/ss-gates",
  //   },
  //   {
  //     heading: "MS GATES",
  //     img: "/ms-gate.avif",
  //     description:
  //       "Mild Steel (MS) gates are an excellent choice for enhancing security and aesthetics for residential and commercial properties. Kno",
  //     url: "/ms-gates",
  //   },
  // ];

  const articles = [
    {
      heading: "RETRACTABLE GATE",
      img: "/retractable-gate.jpg",
      description:
        "Retractable gates are modern security solutions that provide strength, durability, and convenience. They ensure maximum protection while allowing smooth accessibility for residential and commercial spaces.",
      url: "/retracktable",
    },
    {
      heading: "TURNSTILE",
      img: "/Turnstile.jpg",
      description:
        "Turnstiles are advanced access control systems designed to regulate entry in offices, public transport, stadiums, and high-security zones, ensuring both safety and smooth flow of people.",
      url: "/turnstile",
    },
    {
      heading: "DOCK SHELTERS",
      img: "/dock-shelters.webp",
      description:
        "Dock shelters provide sealing between the building and truck during loading and unloading, ensuring protection from weather, dust, and energy loss, while enhancing efficiency at warehouses.",
      url: "/dock-shelters",
    },
    {
      heading: "DOCK LEVERS",
      img: "/dock-levers.jpg",
      description:
        "Dock levers are essential for smooth loading and unloading operations, bridging the gap between trucks and docks. They improve safety, efficiency, and reliability in logistics operations.",
      url: "/dock-levers",
    },
    {
      heading: "AUTOMATIC BARRIES",
      img: "/automatic-barriers.jpg",
      description:
        "Automatic barriers are effective for controlling vehicle access in parking lots, toll plazas, and restricted areas. They combine advanced automation with durability for seamless security.",
      url: "/automatic-barries",
    },
    {
      heading: "AUTOMATIC SENSOR GAASS DOOR",
      img: "/automatic-sensor-glass-door.jpg",
      description:
        "Automatic sensor glass doors enhance convenience, energy efficiency, and accessibility. Commonly used in malls, offices, and hospitals, they provide a modern and professional entrance solution.",
      url: "/automatic-sensor-glass-door",
    },
    {
      heading: "AUTOMATIC OVERHEAD GARAGE DOOR",
      img: "/automatic-overhead-garage-door.jpg",
      description:
        "Automatic overhead garage doors offer convenience, security, and style. They are designed for smooth operation, durability, and aesthetic appeal, making them ideal for modern homes and businesses.",
      url: "/automatic-garage-door",
    },
    {
      heading: "HIGH SPEED DOOR",
      img: "/high-speed-door.jpg",
      description:
        "High-speed doors are designed for industrial and commercial use, offering quick access, energy efficiency, and improved security. They are ideal for warehouses, factories, and clean rooms.",
      url: "/high-speed-door",
    },
    {
      heading: "COLLAPSIBLE GATE",
      img: "/collapsible-ate.jpg",
      description:
        "Collapsible gates combine security and space-saving design, making them perfect for shops, homes, and offices. They are strong, easy to operate, and ensure long-lasting protection.",
      url: "/collapsible-gate",
    },
    {
      heading: "TRI-FOLDING GATE",
      img: "/Tri-Folding-gate.png",
      description:
        "Tri-folding gates are space-efficient security solutions that fold into three panels. They provide durability, smooth operation, and stylish designs for both residential and commercial properties.",
      url: "/tri-folding-gate",
    },
    {
      heading: "BI-FOLDING GATE",
      img: "/Bi-Folding-gate.jpg",
      description:
        "Bi-folding gates are modern entrance solutions that fold neatly to maximize space. They combine functionality, strength, and aesthetics, making them suitable for homes and businesses.",
      url: "/bi-folding-gate",
    },
    {
      heading: "CURVE GARAGE GATE",
      img: "/curve-garage-gate.jpg",
      description:
        "Curve garage gates are innovative and stylish, designed to glide smoothly along curved tracks. They provide convenience, space efficiency, and a modern look for garages.",
      url: "/curve-garage-gate",
    },
    {
      heading: "CURVE SLIDING GATE",
      img: "/curve-sliding-gate.jpg",
      description:
        "Curve sliding gates combine elegance with robust security. Their unique sliding mechanism on curved tracks makes them both space-saving and visually appealing.",
      url: "/curve-slide-gate",
    },
    {
      heading: "TELESCOPIC GATE",
      img: "/Telescopic-gate.jpg",
      description:
        "Telescopic gates are space-saving solutions that slide in sections, making them ideal for areas with limited space. They offer high security, smooth operation, and a sleek appearance.",
      url: "/telescopic-gate",
    },
    {
      heading: "SLIDING GATE",
      img: "/sliding-gate-automation.jpg",
      description:
        "Sliding gates are efficient and modern entrance solutions that provide maximum security with smooth operation. Suitable for both residential and commercial properties, they save space and add style.",
      url: "/sliding-gates",
    },
    {
      heading: "SWING GATES",
      img: "/swing-gates.jpg",
      description:
        "Swing gates offer a classic, elegant design combined with reliable functionality. Perfect for residential driveways and commercial entrances, they provide strength, safety, and style.",
      url: "/swing-gates",
    },
    {
      heading: "AUTOMATIC GATES",
      img: "/automatic-gates.jpg",
      description:
        "Automatic gates combine advanced technology with convenience, offering enhanced security and ease of use. They are ideal for modern homes, offices, and industrial spaces.",
      url: "/automatic-gates",
    },
    {
      heading: "SS GATES",
      img: "/SS-gates.jpg",
      description:
        "Stainless Steel (SS) gates are strong, durable, and corrosion-resistant. They add elegance and security to any property, making them suitable for both residential and commercial use.",
      url: "/ss-gates",
    },
    {
      heading: "MS GATES",
      img: "/ms-gate.avif",
      description:
        "Mild Steel (MS) gates are a popular choice for enhancing security and aesthetics. Known for their strength and versatility, they are ideal for residential, commercial, and industrial properties.",
      url: "/ms-gates",
    },
  ];

  return (
    <div className="min-h-screen relative bg-background">
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}
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
          <div className="bg-secondary/90 w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp; ENTRANCE AUTOMATION
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
                    <button className="border text-white bg-secondary/90 font-[14px] rounded-lg cursor-pointer py-1 font-[500] px-4">
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
