import { Button } from "@/components/ui/button";
import CheckIcon from '@mui/icons-material/Check';
import useScrollAnimation from "./custom-hook";

export const AboutDescription = () => {
  const [ref,isVisible]=useScrollAnimation({ threshold: 0.2 });
  return (
    <section ref={ref} className={`transform transition-all ease-out duration-1000 ${isVisible ? "opacity-100 translate-x-0 scale-100":"opacity-0 translate-x-20 scale-95"} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 my-20 max-w-6xl mx-auto`}>
      {/* LEFT IMAGE */}
      <div className="w-full h-full">
        <img
          src="/access-control.webp"
          alt="Building"
          className="w-full h-[300px] object-cover rounded"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="inline-block border-4 border-secondary/90 rounded-lg text-secondary/90 font-bold px-4 py-1 mb-4">
          Welcome to METAL4CRAFT AUTOMATION
        </p>

        <h2 className="text-[50px] font-[900] text-[#181614] leading-tight mb-6">
          About METAL4CRAFT
          <br />
          AUTOMATION <br />
        </h2>

        <p className="text-[#000] leading-relaxed text-[16px] font-[500]">
          At METAL4CRAFT AUTOMATION, we specialize in delivering premium fabrication solutions designed around the specific requirements of our clients. Focused on Entrance Automation, Rolling Shutters, and General Fabrication, our skilled team blends innovation with craftsmanship to create dependable solutions for residential and commercial applications alike. With a strong commitment to quality, efficiency, and customer satisfaction, we ensure every project is completed to the highest standards of excellence.
        </p>
        <div className="grid grid-cols-2 gap-8 my-4">
          <div><CheckIcon className="text-secondary/90 mr-2"  />Entrance Automation</div>
          <div><CheckIcon className="text-secondary/90 mr-2"  />Quality Assurance</div>
          <div><CheckIcon className="text-secondary/90 mr-2"  />General Fabrication</div>
          <div><CheckIcon className="text-secondary/90 mr-2"  />Rolling Shutters</div>
        </div>
      </div>
    </section>
  );
};
