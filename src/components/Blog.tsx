import { Calendar, User, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./sticky-header";

const Blog = () => {
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

  const articles = [
    {
      title: "IT JOINS TWO PIECES OF METAL",
      date: "20 AUG, 2020",
      author: "Admin",
      comments: "2 Comments",
      excerpt:
        "There are not many of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "IT JOINS TWO PIECES OF METAL",
      date: "20 AUG, 2020",
      author: "Admin",
      comments: "2 Comments",
      excerpt:
        "There are not many of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      title: "IT JOINS TWO PIECES OF METAL",
      date: "20 AUG, 2020",
      author: "Admin",
      comments: "2 Comments",
      excerpt:
        "There are not many of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border-2 border-secondary text-secondary font-bold text-sm rounded mb-6">
              From The Blog
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              NEWS & ARTICLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-steel"></div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4 text-secondary" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4 text-secondary" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-bold rounded">
                      {article.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
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

export default Blog;
