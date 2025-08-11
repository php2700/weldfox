import { useState } from "react";

export const Enuiry = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of entrance automation systems do you offer?",
      answer:
        "We offer a wide range of entrance automation systems tailored to your needs.",
    },
    {
      question:
        "Are your rolling shutters suitable for both residential and commercial properties?",
      answer:
        "Yes, our rolling shutters are designed to provide security and weather protection for both residential and commercial spaces, with various design options to match your property's style.",
    },
    {
      question: "How long does it take to install an entrance automation?",
      answer:
        "Installation time varies depending on the system and site conditions, typically ranging from a few hours to a couple of days.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="relative min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 flex  justify-end overflow-hidden">
      <div>
        <img src="/Telescopic-gate.jpeg" className="h-[100vh]" />
      </div>

      <div className=" px-6  bg-opacity-90">
        {/* Section Tag */}
        <span className="inline-block border-4 text-[#fcc729] border-[#fcc729]  font-semibold py-1 px-4   mb-4 text-[16px]">
          Our FAQs
        </span>

        {/* Title */}
        <h2 className="text-[40px] font-[900] text-[#181614] mb-6">
          FAQ FOR INQUIRY
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-3 flex gap-2  text-lg font-semibold text-[#181614]"
              >
                {" "}
                <span >{openIndex === index ? "−" : "+"}</span>
                <span>{faq.question}</span>
              </button>
              {openIndex === index && (
                <p className="text-[#7e7b7a] py-2 text-sm md:text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
