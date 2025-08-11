import { useEffect, useState } from "react";
const testimonials = [
  {
    name: "PRIYA M.",
    text: "The team installing our automatic sliding gate was punctual, professional, and thorough. They provided helpful advice, completed the installation smoothly and ahead of schedule, and ensured everything was perfectly aligned. We're thrilled with the exceptional product and outstanding service!",
  },
  {
    name: "SANJAY D",
    text: "The team efficiently installed our boom barrier, integrating it seamlessly with our access control system. Their proactive testing and attention to detail ensured smooth operation, adding unmatched convenience and enhanced security to our property. Highly recommended for their professionalism!",
  },
  {
    name: "NISHAa S",
    text: "We're thrilled with the team's exceptional quality and professionalism on our structural project. They combined expert planning, meticulous attention to detail, top-notch management, and impeccable craftsmanship, delivering a beautifully constructed and highly durable building. Highly recommended!",
  },
  {
    name: "NISHA aaS",
    text: "We'rea thrilled with the team's exceptional quality and professionalism on our structural project. They combined expert planning, meticulous attention to detail, top-notch management, and impeccable craftsmanship, delivering a beautifully constructed and highly durable building. Highly recommended!",
  },
  {
    name: "NISHA S3",
    text: "We're thrilled with the team's exceptional quality and professionalism on our structural project. They combined expert planning, meticulous attention to detail, top-notch management, and impeccable craftsmanship, delivering a beautifully constructed and highly durable building. Highly recommended!",
  },
];
const Testimonials = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-4 border-[#fcc729] text-[#fcc729] font-bold text-sm rounded mb-6">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-[50px] font-[900] text-foreground mb-4">
            WHAT THEY SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-2">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="p-8 rounded-lg transition-all duration-300 hover:border-2 hover:border-[#fcc729] 
                  text-secondary-foreground border-2"
            >
              <p
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
