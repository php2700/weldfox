import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Description = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 max-w-7xl mx-auto">
      <div className="w-full h-full">
        <img
          src="/description.webp"
          alt="Building"
          className="w-full h-[600px] object-cover rounded"
        />
      </div>
      <div>
        <p className="inline-block border-4 rounded-lg border-secondary/90 text-secondary/90 font-bold px-4 py-1 mb-4">
          Welcome to METAL4CRAFT AUTOMATION
        </p>

        <h2 className="text-[50px] font-[900] text-[#181614] leading-tight mb-6">
          QUALITY <br />
         & PRECISION <br />
          
        </h2>

        <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
         “At METAL4CRAFT AUTOMATION, we understand the importance of strength, security, and design. That’s why we specialize in Entrance Automation, Rolling Shutters, and General Fabrication, offering solutions that are not only long-lasting but also tailored to match the needs of residential and commercial clients.”
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 mt-12">
          <Link to='/about'>
          <Button
          
            className="bg-secondary/90 hover:bg-black-500  px-12 py-10 text-lg font-bold"
          >
            READ MORE
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
