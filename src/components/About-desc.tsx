import { Button } from "@/components/ui/button";

export const AboutDescription = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 my-20 max-w-6xl mx-auto">
      {/* LEFT IMAGE */}
      <div className="w-full h-full">
        <img
          src="/access-control.jpg"
          alt="Building"
          className="w-full h-[300px] object-cover rounded"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="inline-block border-4 border-[#fcc729] text-[#fcc729] font-bold px-4 py-1 mb-4">
          Welcome to METAL4CRAFT AUTOMATION
        </p>

        <h2 className="text-[50px] font-[900] text-[#181614] leading-tight mb-6">
          About METAL4CRAFT
          <br />
          AUTOMATION <br />
        </h2>

        <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
          At METAL4CRAFT AUTOMATION, we are dedicated to delivering high-quality
          fabrication services tailored to meet the unique needs of our clients.
          With a focus on Entrance Automation, Rolling Shutters, and General
          Fabrication, our experienced team combines craftsmanship and
          innovation to provide reliable solutions for both residential and
          commercial projects. We pride ourselves on our commitment to quality,
          customer satisfaction, and efficiency, ensuring that every project is
          executed to the highest standards.
        </p>
        <div className="grid grid-cols-2 gap-8 my-4">
          <div>Entrance Automation</div>
          <div>Quality Assurance</div>
          <div>General Fabrication e</div>
          <div>Rolling Shutters</div>
        </div>
      </div>
    </section>
  );
};
