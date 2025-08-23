import { motion } from "framer-motion";

const partners = [
  { name: "OZONE", logo: "/p-1.jpg" },
  { name: "SAINT-GOBAIN", logo: "/p-2.png" },
  { name: "Ditec ENTREMATIC", logo: "/p-3.jpg" },
  { name: "JSW Steel", logo: "/p-4.png" },
  { name: "Jindal Aluminium", logo: "/p-5.png" },
  { name: "Hettich", logo: "/p-6.png" },
  { name: "Dormakaba", logo: "/p-7.png" },
];

export const Partner = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-4 border-secondary/90 text-secondary/90 font-semibold px-3 py-1 mb-4 bg-transparent text-sm md:text-base rounded-lg"
        >
          Our Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          BRANDS WE WORK WITH
        </motion.p>

        {/* Partner Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-28 h-28 flex items-center justify-center mb-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
