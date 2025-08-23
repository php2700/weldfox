// import React, { useEffect, useState } from "react";

// const Clients = () => {
// const initialClients = [
//   { name: "Amazon", logo: "🛒" },
//   { name: "User", logo: "🙍‍♂️" },
//   { name: "Biocon", logo: "🧪" },
//   { name: "Ashirwad", logo: "🏡" },
//   { name: "Apollo Paints", logo: "🖌️" },
//   { name: "ClientX", logo: "📈" },
//   { name: "ClientY", logo: "⚙️" },
//   { name: "ClientZ", logo: "🌐" },
// ];

//   const [clients, setClients] = useState(initialClients);
//    const [visibleCount, setVisibleCount] = useState(5);

//    useEffect(() => {
//     const updateCount = () => {
//       if (window.innerWidth >= 1024) setVisibleCount(5);
//       else if (window.innerWidth >= 768) setVisibleCount(3);
//       else setVisibleCount(2);
//     };

//     updateCount();
//     window.addEventListener("resize", updateCount);
//     return () => window.removeEventListener("resize", updateCount);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setClients((prev) => {
//         const shifted = [...prev];
//         const first = shifted.shift();
//         if (first) shifted.push(first);
//         return shifted;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-background ">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="inline-block rounded-lg px-4 py-2 border-4 border-secondary/90 text-secondary/90 font-bold text-[16px] rounded mb-6">
//             Clients
//           </div>
//           <h2 className="text-5xl md:text-[50px] font-[900] text-foreground mb-4">
//             CLIENTS WE SERVED
//           </h2>
//         </div>

//         {/* Slider Row */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 transition-all duration-500">
//           {clients.slice(0, visibleCount).map((client, index) => (
//             <div
//               key={index}
//               className="bg-card rounded-lg p-8 text-center border  hover:border-secondary/90 transition-shadow"
//             >
//               <div className="text-4xl mb-4">{client.logo}</div>
//               <h3 className="font-bold text-foreground">{client.name}</h3>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Clients;

import React, { useEffect, useState } from "react";

const Clients = () => {
  const initialClients = [
    { name: "Amazon", logo: "🛒" },
    { name: "User", logo: "🙍‍♂️" },
    { name: "Biocon", logo: "🧪" },
    { name: "Ashirwad", logo: "🏡" },
    { name: "Apollo Paints", logo: "🖌️" },
    { name: "ClientX", logo: "📈" },
    { name: "ClientY", logo: "⚙️" },
    { name: "ClientZ", logo: "🌐" },
  ];

  const [clients, setClients] = useState(initialClients);

  useEffect(() => {
    const interval = setInterval(() => {
      setClients((prev) => {
        const shifted = [...prev];
        const first = shifted.shift();
        if (first) shifted.push(first);
        return shifted;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 text-orange-600 font-bold text-[16px] border-4 border-orange-600 rounded-lg mb-4">
            Clients
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
            CLIENTS WE SERVED
          </h2>
        </div>

        {/* Zig-Zag Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center p-8 rounded-3xl transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl
                ${index % 2 === 0 ? "bg-white" : "bg-orange-50"}`}
              style={{ marginTop: index % 2 === 0 ? "0px" : "40px" }}
            >
              <div className="w-24 h-24 flex items-center justify-center text-5xl bg-orange-200 rounded-full mb-6 shadow-lg">
                {client.logo}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{client.name}</h3>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-300 opacity-30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
