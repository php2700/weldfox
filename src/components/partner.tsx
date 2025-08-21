import { useState, useEffect } from "react";

export const Partner = () => {
  const partners = [
    { name: "OZONE", logo: "/p-1.jpg" },
    { name: "SAINT-GOBAIN", logo: "/p-2.png" },
    { name: "Ditec ENTREMATIC", logo: "/p-3.jpg" },
    { name: "JSW Steel", logo: "/p-4.png" },
    { name: "Jindal Aluminium", logo: "/p-5.png" },
    { name: "Hettich", logo: "/p-6.png" },
    { name: "Dormakaba", logo: "/p-7.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Adjust visible items on screen size change
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(5);
      else if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <section className="bg-secondary/90  mb-36 py-12 px-4 relative ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block border-4 border-white text-white font-semibold px-3 py-1 mb-4 bg-transparent text-sm md:text-base">
          Our Partners
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white mb-8 md:mb-12">
          PARTNERS WE ARE ASSOCIATED WITH
        </h2>

        <div className="relative">
          {/* Partner logos */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out bg-white p-4">
              {getVisiblePartners().map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex-shrink-0 p-4 transition-all duration-300`}
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
