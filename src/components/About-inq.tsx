import { useState } from "react";
import useScrollAnimation from "./custom-hook";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export const Enuiry = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of entrance automation systems do you offer?",
      answer:
        "We provide a range of entrance automation solutions, including automated gates, sliding doors, and access control systems, all customized to suit your specific needs.",
    },
    {
      question:
        "Are your rolling shutters suitable for both residential and commercial properties?",
      answer:
        "Yes, our rolling shutters are designed to provide security and weather protection for both residential and commercial spaces, with various design options to match the property’s style.",
    },
    {
      question:
        "How long does it take to install an entrance automation system?",
      answer:
        "The installation time depends on the complexity of the project, but typically, it takes between 2-5 days. We ensure a smooth and efficient installation process.",
    },
    {
      question:
        "Can you customize fabrication projects to meet specific requirements?",
      answer:
        "Absolutely! Our general fabrication services are fully customizable, and we work closely with clients to deliver solutions that meet their unique specifications.",
    },
    {
      question: "What materials do you use for your fabrication projects?",
      answer:
        "We work with a variety of materials, including steel, aluminum, and other metals, ensuring high durability and quality for all projects.",
    },
    {
      question:
        "Do you provide maintenance and repair services for rolling shutters and entrance automation systems?",
      answer:
        "Yes, we offer ongoing maintenance and repair services to ensure your systems operate smoothly and remain in top condition.",
    },
    {
      question:
        "Can your automation systems be integrated with smart home technology?",
      answer:
        "Yes, our automation solutions can be integrated with smart home systems, allowing you to control gates, shutters, and doors remotely using mobile apps or voice commands.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transform transition-all ease-out duration-1000 relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-12 lg:px-20 `}
    >
      <div className="text-center mb-12">
        <span className="inline-block border-4 border-secondary/90 text-secondary/90 font-semibold px-3 py-1 mb-4 bg-transparent text-sm md:text-base rounded-lg">
          Our FAQs
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          FAQ FOR INQUIRY
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here are some of the most common questions our customers ask. If you
          still have doubts, feel free to reach out to us anytime!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="text-secondary/90 w-6 h-6" />
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-secondary/90" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-500" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-600 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
