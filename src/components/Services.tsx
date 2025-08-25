import { ChevronRight } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { Link } from "react-router-dom";
import useScrollAnimation from "./custom-hook";

const Services = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const rollingShutters = [
    { url: "/mannual-rolling", name: "Manual Rolling Shutters" },
    { url: "/rolling-shutter", name: "Gear Operated Rolling Shutters" },
    { url: "/motorized-shutter", name: "Motorized Rolling Shutters" },
    { url: "/ms-rolling-shtter", name: "MS Rolling Shutter" },
    { url: "/ss-rolling-shtter", name: "SS Rolling Shutter" },
    { url: "/perforted-rolling-shutter", name: "Perforated Rolling Shutter" },
    { url: "/grill-rolling-shutter", name: "Grill Rolling Shutter" },
    { url: "/galvanized-rolling-shutter", name: "Galvanised Rolling Shutter" },
    { url: "/aluminium-rolling-shutter", name: "Aluminum Rolling Shutter" },
    {
      url: "/transparent-rolling-shutter",
      name: "Transparent/Polycarbonate Rolling Shutter",
    },
    { url: "/fire-rated-shurtter", name: "Fire-Rated Rolling Shutter" },
    {
      url: "/aluminium-puff-rolling-shutter",
      name: "Aluminum Puff Insulated Rolling Shutter",
    },
    {
      url: "/powder-coated-rolling-shutter",
      name: "Powder Coated Rolling Shutter",
    },
  ];

  const entranceAutomation = [
    { url: "/ms-gates", name: "MS Gates" },
    { url: "/ss-gates", name: "SS Gates" },
    { url: "/automatic-gates", name: "Automatic Gates" },
    { url: "/swing-gates", name: "Swing Gates" },
    { url: "/sliding-gates", name: "Sliding Gate" },
    { url: "/telescopic-gate", name: "Telescopic Gate" },
    { url: "/curve-slide-gate", name: "Curve Sliding Gate" },
    { url: "/curve-garage-gate", name: "Curve Garage Gate" },
    { url: "/bi-folding-gate", name: "Bi-Folding Gate" },
    { url: "/tri-folding-gate", name: "Tri-Folding Gate" },
    { url: "/collapsible-gate", name: "Collapsible Gate" },
    { url: "/high-speed-door", name: "High Speed Door" },
    { url: "/automatic-garage-door", name: "Automatic Overhead Garage Door" },
    {
      url: "/automatic-sensor-glass-door",
      name: "Automatic Sensor Glass Door",
    },
    { url: "/automatic-barries", name: "Automatic Barriers" },
    { url: "/dock-levers", name: "Dock Levers" },
    { url: "/dock-shelters", name: "Dock Shelters" },
    { url: "/turnstile", name: "Turnstile" },
  ];

  const generalFabrication = [
    { url: "/ms-railing", name: "MS Railings" },
    { url: "/ss-railing", name: "SS Railings" },
    { url: "/structural-fabrication", name: "Structural fabrication" },
    { url: "/staircase", name: "Staircase" },
    { url: "/pergola", name: "Pergola" },
    { url: "/window-grill", name: "Window Grill" },
    { url: "/compound-grill", name: "Compound Grill" },
    { url: "/elevation", name: "Building Elevation Work" },
    { url: "/roofing", name: "Roofing Work" },
    { url: "/collapsible", name: "Collapsible Gate" },
    { url: "/safety-grill", name: "Safety Grill" },
  ];

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
      {/* <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      > */}
        <Header />
      {/* </div>
      {showSticky && <StickyHeader />} */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border-2 border-secondary/90 text-secondary/90 font-bold text-sm rounded-lg mb-6">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              OUR EXPERTISE
            </h2>
          </div>

          <div
            ref={ref}
            className={`transform transitions-all ease-out duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-20 scale-20"
            } grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12`}
          >
            {/* Rolling Shutters */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Rolling Shutters
              </h3>
              <div className="space-y-3">
                {rollingShutters.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-secondary/90 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <Link to={item?.url}>
                      <span>{item?.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Entrance Automation */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Entrance Automation
              </h3>
              <div className="space-y-3">
                {entranceAutomation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-secondary/90 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <Link to={item?.url}>
                      <span>{item?.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* General Fabrications */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                General Fabrications
              </h3>
              <div className="space-y-3">
                {generalFabrication.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer space-x-3 text-muted-foreground hover:text-secondary/90 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    <Link to={item?.url}>
                      <span>{item?.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

    



  );
};

export default Services;
