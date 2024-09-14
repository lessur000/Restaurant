//import image
import Logo from "../../assets/images/Logo.png";
//import icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1F242C]">
      <div className="container mx-auto py-10">
        {/* Logo & icons */}
        <div className="flex flex-col space-y-3">
          <img src={Logo} className="mx-auto" />
          <div className="flex gap-5 mx-auto">
            <FaFacebook size={30} className="fill-white" />
            <FaInstagram size={30} className="fill-white" />
            <FaTwitter size={30} className="fill-white" />
          </div>
        </div>
        <div className="">
          <div className="md:flex text-center items-center justify-center  lg:justify-evenly  mt-10 space-y-10 md:space-y-0 gap-10">
            <div className="md:text-left">
              <h1 className="border-y-2 inline-block border-[#E1B168] text-white font-Cormorant font-semibold w-[60px] text-center">
                Contact
              </h1>
              <div className="mt-5 md:text-left">
                <h5 className="text-white">Manila</h5>
                <h5 className="text-white">
                  <span className="text-[#E1B168]">Call</span> - 09******
                </h5>
                <h5 className="text-[#E1B168]">RusselOlac@gmail.com</h5>
              </div>
            </div>
            {/*Email & Button*/}
            <div className="space-y-5 flex flex-col justify-center text-center">
              <h1 className="text-white font-Cormorant font-semibold text-xl md:max-w-[250px] text-center">
                Join our mailin list for updates, Get news & offers events.
              </h1>
              <div className="flex justify-center">
                <input
                  type="email"
                  value="Email"
                  className="bg-transparent text-white border border-gray-500 py-2"
                />
                <button className="bg-white px-4 font-Cormorant font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            {/* working hours */}
            <div className="lg:text-right">
              <h1 className="border-y-2 inline-block border-[#E1B168] text-white font-Cormorant font-semibold ">
                Working Hours
              </h1>
              <div className="mt-5">
                <h5 className="text-white font-Cormorant">
                  <span className="text-[#E1B168]">Mon - Fri</span>:7.00am -
                  6.00pm
                </h5>
                <h5 className="text-white font-Cormorant">
                  <span className="text-[#E1B168]">Sat</span>:7.00am - 6.00pm
                </h5>
                <h5 className="text-white font-Cormorant">
                  <span className="text-[#E1B168]">Sun</span>:7.00am - 6.00pm
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CopyRights */}
      <div className="space-y-5">
      <div className="border-t-2 border-gray-500 "></div>
      <h5 className="text-center text-white font-Cormorant py-3">© Copyright - Restaurant</h5>
      </div>
    </div>
  );
};

export default Footer;
