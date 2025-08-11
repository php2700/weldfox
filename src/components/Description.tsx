import { Button } from "@/components/ui/button";

export const Description = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 max-w-7xl mx-auto">
      {/* LEFT IMAGE */}
      <div className="w-full h-full">
        <img
          src="/description.jpg"
          alt="Building"
          className="w-full h-[600px] object-cover rounded"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="inline-block border-4 border-[#fcc729] text-[#fcc729] font-bold px-4 py-1 mb-4">
          Welcome to METAL4CRAFT AUTOMATION
        </p>

        <h2 className="text-[50px] font-bold text-[#181614] leading-tight mb-6">
          CRAFTING <br />
          EXCELLENCE IN <br />
          FABRICATION
        </h2>

        <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
          At METAL4CRAFT AUTOMATION, we specialize in providing top-quality
          fabrication solutions with a focus on Entrance Automation, Rolling
          Shutters, and General Fabrication. With years of expertise and a
          dedication to innovation, we pride ourselves on delivering reliable,
          durable, and aesthetically pleasing solutions tailored to meet the
          needs of both residential and commercial clients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 mt-12">
          <Button
          
            className="bg-[#fcc729] hover:bg-secondary/90 text-secondary-foreground px-12 py-10 text-lg font-bold"
          >
            DISCOVER MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
