import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/sticky-header";
import React, { useEffect, useRef, useState } from "react";

const arr = [
  {
    heading: "Improved Accessibility:",
    description:
      "Automatic sensor glass doors provide easy access for all individuals, including those with disabilities, parents with strollers, and customers carrying items. This inclusivity enhances customer satisfaction and improves your business’s reputation.",
  },
  {
    heading: "Enhanced Energy Efficiency:",
    description:
      "By reducing the time the door remains open, automatic sensor glass doors help minimize energy loss and maintain indoor temperatures. This can lead to significant energy savings, particularly in climate-controlled environments.",
  },
  {
    heading: "Increased Security:",
    description:
      "These doors often come equipped with advanced locking mechanisms and security features that prevent unauthorized access, ensuring safety and peace of mind. They can also be integrated with access control systems for added protection.",
  },
  {
    heading: "Aesthetic Appeal:",
    description:
      "The sleek design of automatic sensor glass doors adds a touch of elegance to any business. Their transparent structure allows natural light to flow into the space, creating a welcoming, bright, stylish, modern, and inviting atmosphere for customers.",
  },
  {
    heading: "Convenience and Hygiene:",
    description:
      "With hands-free operation, automatic sensor glass doors eliminate the need for manual opening, making them a hygienic option, especially in high-traffic areas. This feature is particularly beneficial in restaurants, hospitals, and retail settings.",
  },
];

const material = [
  {
    name: "Tempered Glass:",
    description:
      "Tempered glass is a popular choice for automatic sensor doors due to its strength and durability. It is designed to withstand impact and is resistant to thermal stress, making it a safe option for commercial applications.",
  },
  {
    name: "Laminated Glass:",
    description: `Laminated glass consists of two or more layers of glass with an interlayer that holds the pieces together if shattered. This provides added safety, strength, and security, making it ideal for high-risk areas.`,
  },
  {
    name: "Aluminum Frames:",
    description:
      "Automatic sensor glass doors often feature aluminum frames, providing strength and lightweight properties. Aluminum is also resistant to corrosion, making it a durable choice for various weather conditions.",
  },
];

const customization = [
  {
    name: "Sizes and Configurations:",
    description:
      "Automatic sensor glass doors can be customized to fit any entryway, with various sizes and configurations to accommodate your business’s specific needs.",
  },
  {
    name: "Glass Types:",
    description: `Choose from clear, tinted, or frosted glass options to achieve the desired level of visibility, privacy, durability, and security while enhancing the aesthetics of your entrance.`,
  },
  {
    name: "Frame Finishes:",
    description:
      "Select from a range of frame finishes, including anodized aluminum, painted, or powder-coated options, to match your business’s branding and architectural style.",
  },
  {
    name: "Sensor Technology:",
    description:
      "Automatic sensor glass doors can be equipped with various sensor types, including infrared, radar, or touchless sensors, providing flexibility in operation and convenience.",
  },
];

const gates = [
  {
    name: "Traffic Flow:",
    description:
      "Evaluate the expected traffic flow at your entrance to determine the appropriate type of door (sliding, swinging, or telescopic) and size to accommodate high volumes of visitors.",
  },
  {
    name: "Design Preferences:",
    description:
      "Choose a design that aligns with your business’s branding and aesthetic goals. Consider glass types, frame finishes, and overall appearance to create an inviting atmosphere.",
  },
  {
    name: "Security Requirements:",
    description:
      "Assess your security needs to ensure that the door you choose includes advanced locking mechanisms and is compatible with access control systems if necessary.",
  },
  {
    name: "Budget:",
    description:
      "Automatic sensor glass doors come in a range of price points. Establish a budget that considers both initial installation costs and long-term maintenance expenses while maximizing value.",
  },
];

const useRolling = [
  {
    heading: "Sliding Automatic Glass Doors:",
    description:
      "These doors slide open horizontally, providing a wide entrance that is perfect for busy retail environments or commercial buildings. They are easy to operate and save space compared to traditional swinging doors.",
  },
  {
    heading: "Swinging Automatic Glass Doors:",
    description:
      "Swinging doors open outward or inward, providing an elegant solution for entrances where space allows. They are ideal for hotels and upscale retail stores, offering both functionality and style.",
  },
  {
    heading: "Telescopic Automatic Glass Doors:",
    description:
      "Telescopic doors feature multiple panels that slide open in a compact manner, allowing for even wider openings. They are perfect for high-traffic areas that require maximum accessibility.",
  },
];

export const Automaticsensorglass = () => {
  const [showSticky, setShowSticky] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const goingDown = currentScroll > lastScrollY.current;

        if (currentScroll <= 0 || (!goingDown && currentScroll < 100)) {
          setShowSticky(false);
        } else if (goingDown && currentScroll > 100) {
          setShowSticky(true);
        }

        lastScrollY.current = currentScroll;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen relative bg-background">
      <div
        className={`transition-opacity duration-300 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
      </div>
      {showSticky && <StickyHeader />}
      <div className="relative w-full">
        <img
          src="/automatic-sensor-glass-door.jpg"
          alt="About Us Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940]  opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-7xl text-white font-bold">
            AUTOMATIC SENSOR GLASS DOORS
          </div>
        </div>
        <div className="absolute  z-10 top-[450px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 lg:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; SERVICE &nbsp; - &nbsp;AUTOMATIC SENSOR GLASS
              DOORS
            </h2>
          </div>
        </div>
      </div>

      <section className="bg-[#f8f8f8] mt-10 pt-10">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 p-10 gap-10 ">
          {/* Text Content */}
          <div className="py-12">
            <h2 className="text-[40px] font-[500] mb-4 text-[#181614]">
              Automatic Sensor Glass Door
            </h2>
            <h3 className="text-2xl font-[400] text-[#181614]  mb-4">
              Enhance Your Business's Accessibility and Style with Automatic
              Sensor Glass Doors
            </h3>
            <p
              className="text-[16px] font-[400] leading-relaxed"
              style={{ lineHeight: "30px" }}
            >
              Automatic sensor glass doors are an ideal solution for businesses
              seeking to enhance accessibility, improve energy efficiency, and
              create an inviting atmosphere. Equipped with advanced motion
              sensors, these doors automatically open and close as customers
              approach, providing a seamless entry experience. Suitable for a
              variety of commercial settings, including retail stores, hotels,
              offices, and hospitals, automatic sensor glass doors offer a
              modern touch while ensuring security and convenience. Elevate your
              business’s entrance with sleek, functional automatic sensor glass
              doors.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/automatic-sensor-glass-door.jpg" // Change to your image path
              alt="Manual Rolling Shutters"
              className=" shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl ">
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            What is an Automatic Sensor Glass Door?
          </div>
          <div style={{ lineHeight: "30px" }}>
            An automatic sensor glass door is a type of entrance system that
            utilizes motion sensors to detect approaching individuals. Once
            motion is detected, the door opens automatically, allowing for
            hands-free access. These doors are typically made of glass,
            providing visibility and an open feel while enhancing the overall
            aesthetic of your building. Ideal for high-traffic areas, automatic
            sensor glass doors are both functional and stylish, making them a
            popular choice for businesses looking to modernize their entrances.
          </div>
          <div className="text-[23px] font-semibold my-4 text-[#181614;] ">
            Benefits of Installing Automatic Sensor Glass Doors
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {arr?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.heading}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Materials Used for Automatic Sensor Glass Doors
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {material?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg">
                <div className="my-4 font-semibold text-lg text-[#000;]">
                  {ele.name}
                </div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Customization Options for Automatic Sensor Glass Doors
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {customization?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            How to Choose the Right Automatic Sensor Glass Door for Your
            Business
          </div>
          <div className="grid frid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {gates?.map((ele) => (
              <div className="shadow-md bg-white p-4 rounded-lg text-[#000]">
                <div className="my-4 font-semibold text-lg">{ele.name}</div>
                <div
                  className="text-[15px] font-[400]"
                  style={{ lineHeight: "28px" }}
                >
                  {ele.description}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[23px] font-semibold my-10 text-[#181614;]">
            Installation & Maintenance of Automatic Sensor Glass Doors
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Professional Installation:
          </div>
          <div className="text-[15px] font-[400] my-2">
            To ensure optimal performance and safety, automatic sensor glass
            doors should be installed by qualified professionals. Proper
            installation guarantees smooth operation and compliance with safety
            regulations.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Routine Maintenance:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Regular maintenance is essential for keeping your automatic sensor
            glass doors in optimal condition. This includes checking sensor
            functionality, lubricating moving parts, and inspecting seals for
            wear.
          </div>
          <div className="text-lg font-semibold mt-4 text-[#000]">
            Safety Inspections:
          </div>
          <div className="text-[15px] font-[400] my-2">
            Conduct routine safety inspections to ensure that all safety
            features, such as automatic reversal and sensor sensitivity, are
            functioning correctly. Regular checks can prevent accidents and
            enhance the lifespan of the doors.
          </div>
          <div className="text-[23px] font-semibold my-2 text-[#181614;]">
            Types of Automatic Sensor Glass Doors
          </div>

          {useRolling?.map((ele) => (
            <>
              <div className="font-semibold mt-8 mb-4 text-[#000] ">
                {ele?.heading}
              </div>
              <div className="mb-2">{ele?.description}</div>
            </>
          ))}
          <div className="text-[23px] font-semibold my-8 text-[#181614;]">
            Conclusion
          </div>
          <div className=" font-[400px] mt-8 mb-20 ">
            Automatic sensor glass doors provide an exceptional blend of
            accessibility, energy efficiency, and modern aesthetics for any
            business. By investing in these advanced entrance systems, you can
            create a welcoming environment for your customers while ensuring
            safety and convenience. Upgrade your business’s entrance with
            automatic sensor glass doors and experience the benefits of modern
            technology and design.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
