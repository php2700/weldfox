import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyHeader from "./sticky-header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Toast } from "./ui/toast";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const checkboxArray = [
  "Entrance Gates",
  "Garage Doors",
  "Rolling Shutters",
  "Motorised Skylights",
  "Boom Barriers",
  "Fire Rated Shutters & Doors",
  "Loading Bay Equipments",
  "Sectional Overhead Doors",
  "Sliding Doors",
  "Heavy Hangar Doors",
  "Turnstiles",
  "High Speed Doors",
  "Others",
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "1234 Industrial Way",
        "Manufacturing District",
        "Cityville, ST 12345",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@arkfabrications.com", "quotes@arkfabrications.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon-Fri: 7:00 AM - 6:00 PM",
        "Sat: 8:00 AM - 4:00 PM",
        "24/7 Emergency Service",
      ],
    },
  ];

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

  const handleProducts = (ele) => {
    let newProducts = [...products];
    if (newProducts.includes(ele)) {
      newProducts = newProducts.filter((item) => item != ele);
    } else {
      newProducts.push(ele);
    }
    setProducts(newProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!products?.length) {
    //   return;
    // }
    let obj = {
      name,
      email,
      address,
      state,
      country,
      mobile,
      company,
      city,
      message,
      isAgree,
      products,
    };

    axios
      .post(`${API_BASE_URL}mail`, obj)
      .then((res) => {
        console.log(res?.data);
        setName("");
        setEmail("");
        setAddress("");
        setState("");
        setCompany("");
        setCity("");
        setIsAgree(false);
        setMessage("");
        setProducts([]);
        setCountry("");
        setMobile("");
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

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
          src="/Contact-us1.jpg"
          alt="About Us Banner"
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl font-[900] text-white">CONTACT </div>
        </div>
        <div className="absolute z-10 top-[200px] left-1/2 -translate-x-1/2  flex justify-center px-4 w-full md:w-auto ">
          <div className="bg-[#fcc729] w-full md:w-auto shadow-lg p-4 md:p-6 text-center rounded-lg ">
            <h2 className="text-[14px] md:text-[14px] font-bold  mb-2 text-white">
              HOME &nbsp; - &nbsp; Contact
            </h2>
          </div>
        </div>
      </div>

      <section id="contact" className="pb-12 my-20 bg-muted/50">
        <div className="container mx-auto max-w-6xl px-6 ">
          <div className=" mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <p
              className="text-[16px] text-muted-foreground mx-auto font-[400]"
              style={{ lineHeight: "31px" }}
            >
              We invite you to share your project details with us using this
              form, so we can better understand how to assist you. Providing
              this information will help us gain an initial insight into your
              project, enabling us to assign the right team swiftly. You can
              simply provide your company name, your name, email, and phone
              number, or you can complete the form with additional details. An
              Metal4craft Automation representative will respond to your inquiry
              promptly. For urgent assistance, please contact us directly. Thank
              you, and we look forward to working with you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-md py-8 px-4 bg-white rounded-lg">
            <div
              className="bg-cover bg-center rounded-lg "
              style={{ backgroundImage: "url('/project-1.jpg')" }}
            >
              <div className="bg-opacity-50 px-6  py-12 rounded-lg">
                <div className="flex  items-center gap-4">
                  <div className="bg-[#fcc729] text-black px-4 py-2 rounded-md font-semibold inline-block mb-4">
                    Corporate Office
                  </div>
                  {/* <div className="bg-white hover:bg-[#fcc729] text-black px-4 py-2 rounded-md font-semibold inline-block mb-4">
                    Our Reach
                  </div> */}
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Bengaluru - Office and Plant
                </h2>

                <p className="text-white text-[19px]  my-4 font-[500]">
                  Address :
                </p>
                <p className="text-white text-[21px] my-4 font-[500]">
                  Metal4craft Automation
                </p>
                <p className="text-white font-[400] ">
                  Metal4craft Automation Pvt. Ltd. Site No 9, Attur Village,
                  yelahanka, Near Best Shot Badminton Academy, Yelahanka New
                  Town, Bengaluru, Karnataka 560064
                </p>

                <p className="text-white my-4 text-[19px] font-[500]">
                  Mobile Number
                </p>
                <p className="text-white text-[18px]">+91 63630 91384</p>

                <p className="text-white my-4 text-[19px] font-[500]">Email</p>
                <p className="text-white text-[18px]">info@metal4craft.com</p>

                <p className="text-white my-4 text-[19px] font-[500]">
                  Website
                </p>
                <p className="text-white text-[18px]">metal4craft.com</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text"
                    placeholder="Name"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>

                <div>
                  <label>Email</label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder="Email"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label>Mobile</label>

                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    type="text"
                    placeholder="Mobile"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>

                <div>
                  <label>Company</label>

                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    type="text"
                    placeholder="Company Name"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>

                <div>
                  <label>Address</label>

                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    type="text"
                    placeholder="Full Address"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label>City</label>

                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    type="text"
                    placeholder="City"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label>State</label>

                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    type="text"
                    placeholder="State"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label>Country</label>

                  <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    type="text"
                    placeholder="Country"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
              </div>

              <div className="my-4">
                <label className="block font-semibold mb-2 ">
                  Select Products
                </label>
                <div className="grid grid-cols-2 gap-2 ">
                  {checkboxArray?.map((ele) => (
                    <label>
                      <input
                        checked={products.includes(ele)}
                        type="checkbox"
                        onChange={() => {
                          handleProducts(ele);
                        }}
                      />{" "}
                      {ele}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Message"
                  className="border rounded-lg p-2 w-full "
                ></textarea>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isAgree}
                    onChange={(e) => setIsAgree(e.target.checked)}
                    required
                  />{" "}
                  I agree to the terms and conditions.
                </label>{" "}
              </div>
              <button
                type="submit"
                className="bg-[#fcc729] w-full text-white font-bold py-2 px-4 rounded-lg mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
