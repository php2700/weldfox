import { Link } from "react-router-dom";

export const Offer = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Yellow Badge */}
        <p className="inline-block border-4 border-yellow-400 text-yellow-500 font-semibold px-4 py-1 mb-4">
          Our Services
        </p>

        {/* Heading */}
        <h2 className="text-[50px] font-extrabold text-black mb-12">
          WHAT WE OFFER
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded overflow-hidden text-left">
            <Link to="/services">
              <img
                src="/service-1.jpeg"
                alt="Entrance Automation"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#181614] mb-2">
                ENTRANCE AUTOMATION
              </h3>
              <p className="text-[#000] text-[16px] font-[400]">
                Experience convenience and enhanced security with our
                cutting-edge entrance automation systems, offering seamless
                access control, remote operation, and customized designs.
              </p>
              <Link to='/entrance-automation'>
                <div className="text-center w-full font-[15px] font-bold hover:bg-[#fcc729] hover:text-white my-2 py-4 bg-gray-100">
                  READ MORE
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded overflow-hidden text-left">
            <Link to="/services">
              <img
                src="/service-2.jpg"
                alt="Rolling Shutter"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#181614] mb-2">
                ROLLING SHUTTER
              </h3>
              <p className="text-[#000] text-[16px]">
                Our durable rolling shutters provide superior protection against
                break-ins and weather, with smooth operation, energy efficiency,
                and versatile designs.
              </p>
              <Link to='/roll-shutters'>
                <div className="text-center w-full font-[15px] font-bold hover:bg-[#fcc729] hover:text-white my-2 py-4 bg-gray-100">
                  READ MORE
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded overflow-hidden text-left">
            <Link to="/services">
              <img
                src="/service-3.jpg"
                alt="General Fabrication"
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#181614] mb-2">
                GENERAL FABRICATION
              </h3>
              <p className="text-[#000] text-[16px]">
                We offer high-quality general fabrication services, delivering
                custom metalwork and structural components with precision
                engineering, tailored to meet the specific needs of your
                project.
              </p>
              <Link to='/general-fabrication'>
                <div className="text-center w-full font-[15px] font-bold hover:bg-[#fcc729] hover:text-white my-2 py-4 bg-gray-100">
                  READ MORE
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};