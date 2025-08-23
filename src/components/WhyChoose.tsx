import { Award, Users, Star } from "lucide-react";
import useScrollAnimation from "./custom-hook";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      number: "900",
      label1: "Projects",
      label2: "Completed",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "761",
      label1: "Satisfied",
      label2: "Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "1029",
      label1: "Metal",
      label2: "Works",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <div
      className="relative w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/swing-gates.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 py-20 text-white transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Side: Text */}
        <div className="flex-1 space-y-6">
          <span className="border border-secondary/90 text-secondary/90 px-4 py-1 rounded-lg font-bold text-sm uppercase tracking-wide">
            Why Choose METAL4CRAFT AUTOMATION?
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            WHY CHOOSE <span className="text-secondary/90">METAL4CRAFT</span>{" "}
            AUTOMATION
          </h1>

          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
            Choosing METAL4CRAFT AUTOMATION means opting for expertise and
            experience in the industry, backed by a commitment to quality
            craftsmanship and customized solutions tailored to meet your unique
            needs. Our skilled team ensures timely delivery and outstanding
            customer service, providing support throughout the entire process.
            With competitive pricing, we offer exceptional value without
            compromising on quality.
          </p>
        </div>

        {/* Right Side: Stats */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:bg-secondary/90/20 transition"
            >
              <div className="flex justify-center text-secondary/90 mb-3">
                {stat.icon}
              </div>
              <h2 className="text-4xl font-extrabold">{stat.number}</h2>
              <p className="mt-2 text-sm font-medium">{stat.label1}</p>
              <p className="text-sm font-medium">{stat.label2}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
