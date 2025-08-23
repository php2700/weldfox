import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      image: "/banner2.jpg",
      text: (
        <>
          <span className="text-[#fff] text-5xl md:text-6xl lg:text-7xl">
            SECURE, STYLISH,
          </span>
          <span className="block text-white text-5xl md:text-6xl lg:text-7xl">
            AND AFFORDABLE
          </span>
          <span className="block text-white text-5xl md:text-6xl lg:text-7xl mt-4">
            YOUR FABRICATION EXPERTS!
          </span>
        </>
      ),
      buttonText: "DISCOVER MORE",
      url: "/about",
    },
    {
      image: "/aluminum-rolling-shutter.jpg",
      text: (
        <>
          <span className="text-[#fff] text-7xl">ELEVATE YOUR </span>
          <span className="block text-white text-7xl">SPACE WITH QUALITY</span>
          <span className="block text-white text-7xl">
            FABRICATIONS SOLUTIONS!
          </span>
        </>
      ),
      buttonText: "READ MORE",
      url: "/about",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      <div
        className="absolute transform transitions-all ease-out duration-1000 inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      </div>
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2  hover:bg-secondary/90 hover:text-white transform -translate-y-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center z-10"
      >
        <WestIcon />
      </button>
      <button
        onClick={nextSlide}
        className="absolute hover:bg-secondary/90 hover:text-white right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center z-10"
      >
        <EastIcon />
      </button> */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-[900] text-white mb-6 leading-tight">
            {currentSlideData.text}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 mt-12">
            <Link to={currentSlideData?.url}>
              <Button
                size="lg"
                className="bg-secondary/90 hover:bg-black text-white px-12 py-10 text-lg font-bold"
              >
                {currentSlideData.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
