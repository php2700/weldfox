import React, { useEffect, useState } from "react";

const Clients = () => {
  const initialClients = [
    { name: "Amazon", logo: "🏢" },
    { name: "User", logo: "👤" },
    { name: "Biocon", logo: "🧬" },
    { name: "Ashirwad", logo: "🏠" },
    { name: "Apollo Paints", logo: "🎨" },
    { name: "ClientX", logo: "📦" },
    { name: "ClientY", logo: "🔧" },
    { name: "ClientZ", logo: "🚀" },
  ];

  const [clients, setClients] = useState(initialClients);
   const [visibleCount, setVisibleCount] = useState(5);

   useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(5); 
      else if (window.innerWidth >= 768) setVisibleCount(3); 
      else setVisibleCount(2); 
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setClients((prev) => {
        const shifted = [...prev];
        const first = shifted.shift();
        if (first) shifted.push(first);
        return shifted;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-4 border-[#fcc729] text-[#fcc729] font-bold text-[16px] rounded mb-6">
            Clients
          </div>
          <h2 className="text-5xl md:text-[50px] font-[900] text-foreground mb-4">
            CLIENTS WE SERVED
          </h2>
        </div>

        {/* Slider Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 transition-all duration-500">
          {clients.slice(0, visibleCount).map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{client.logo}</div>
              <h3 className="font-bold text-foreground">{client.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
