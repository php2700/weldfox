import { Calendar, User, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";
import { FaTimes } from "react-icons/fa";
import useScrollAnimation from "./custom-hook";

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

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
    "/gallery-1.jpeg",
    "/gallery-2.jpeg",
    "/gallery-3.jpeg",
    "/gallery-4.jpeg",
    "/gallery-5.jpeg",
    "/gallery-6.jpeg",
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              GALLERY
            </h2>
          </div>

          <div ref={ref} className={` transform transitions-all ease-out duration-1000 ${isVisible ? "opacity-100 translate-x-0 scale-100":"opacity-0 translate-x-20 scale-95"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={article}
                  className="h-80 bg-gradient-steel cursor-pointer object-cover w-full border hover:border-secondary/90"
                  onClick={() => {
                    setSelectedImage(article);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] overflow-auto p-4">
          <div className="relative inline-block">
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-black/50 rounded-full p-1 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              className="w-auto h-[700px] object-cover rounded-xl"
              alt="Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
