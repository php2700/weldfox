import { useEffect, useState } from "react";
import useScrollAnimation from "./custom-hook";
const testimonials = [
  {
    name: "RAHUL K.",
    text: "Over the past year, METAL4CRAFT AUTOMATION has consistently exceeded our expectations. From design to final installation, their team delivered precision, reliability, and unmatched professionalism. Truly a partner we can rely on for all our automation and fabrication needs.",
    image:'/Tri-Folding-gate.jpg'
  },
  {
    name: "ANITA P.",
    text: "We’ve been working with the team for over a year, and their dedication to quality never fails to impress. Every project—big or small—has been completed with care, attention to detail, and on-time delivery. A dependable choice for long-term collaboration.",
    image:'/aluminum-puff-insulated-rolling-shutter.jpg'

  },
  {
    name: "VIKAS J.",
    text: "Our annual maintenance and upgrades were handled flawlessly by the METAL4CRAFT AUTOMATION team. They ensured smooth operation, minimal downtime, and top-notch service throughout the year. Their commitment to customer satisfaction is outstanding.",
    image:'/curve-sliding-gate.jpg'

  },
  {
    name: "SHILPA R.",
    text: "It’s been a year since our rolling shutters were installed, and they continue to operate seamlessly. The durability, design, and after-sales support have all been exceptional. Truly a product that delivers long-term value.",
    image:'/building-elevation-work.webp'

  },
  {
    name: "ARUN M.",
    text: "Year after year, METAL4CRAFT AUTOMATION has been our trusted partner for fabrication solutions. Their team combines technical expertise with excellent customer care, making every project a smooth and stress-free experience.",
    image:'/retractable-gate.jpg'

  },
];

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section
      ref={ref}
      className={`py-20 bg-background transform transition-all duration-1000 ease-out  ${
        isVisible
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 -translate-x-20 scale-95"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-4 border-secondary/90 text-secondary/90 font-bold text-sm rounded-lg mb-6">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-[50px] font-[900] text-foreground mb-4">
            WHAT THEY SAY
          </h2>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-2">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="rounded-lg transition-all duration-300 hover:border-2 hover:border-secondary/90 
                  text-secondary-foreground border-2"
            >
              <img src={testimonial?.image} className=" object-cover rounded-lg" /> */}
              {/* <p
                className="text-base leading-relaxed mb-6
                   text-muted-foreground"
              >
                {testimonial.text}
              </p>
              <div
                className="font-bold text-lg 
                    text-foreground"
              >
                {testimonial.name}
              </div> */}
            {/* </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-2">
  {visibleTestimonials.map((testimonial, index) => (
    <div
      key={`${testimonial.name}-${index}`}
      className="rounded-lg overflow-hidden border-2 transition-all duration-300 hover:border-secondary/90"
    >
      <img
        src={testimonial?.image}
        alt={testimonial?.name || `testimonial-${index}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Testimonials;
