import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../Home/ItemContext";
import Header from "../Home/Header";
//import icons
import { MdWork, MdPhoneCallback, MdLocationOn, MdMail } from "react-icons/md";
//import socialmedia icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Reservation from "../Home/Reservation";
import Footer from "../Home/Footer";

const Chefdetails = () => {
 // Get the chef's id from the URL using useParams hook
  const { id } = useParams();
  console.log(id);

  // Access the chefs data from the context
  const { chefs } = useContext(ItemContext);

  /// Get the single chef based on the id from the URL
  const chef = chefs.find((item) => {
    return item.id == parseInt(id); // Find the chef with the matching id
  });
  // If chef is not found, display a loading message
  if (!chef) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading.....
      </section>
    );
  }
  

    // Destructure chef object to get individual properties
  const { name, description, image, position, video } = chef;

  return (
    <div>
      <Header />
      {/* Section1 */}
      <section className="flex justify-center items-center m-5">
        <div className="md:flex items-center gap-10 lg:gap-32 py-20">
          <img src={image} className="mx-auto" />
          <div className="space-y-5 text-center md:text-left">
            <h1 className="font-Cormorant text-3xl font-bold">{name}</h1>
            <h4 className="font-Josefins text-xl text-[#E1B168]">{position}</h4>
            <p className="lg:max-w-[600px] font-Josefins">{description}</p>
            {/* Contacts & icons */}
            {/* Contacts */}
            <div className="flex flex-col md:flex-row items-center lg:gap-20 ">
              {/* Column left */}
              <div className="flex flex-col space-y-3 lg:space-y-10 justify-center">
                <div className="flex items-center gap-5">
                  <MdWork size={50} />
                  <div>
                    <h1 className="text-[#292E36] font-semibold text-2xl text-left">
                      Experience
                    </h1>
                    <h5 className="text-[#4A4A4A] font-Josefins text-xl text-left">
                      10 Years of Experience
                    </h5>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <MdPhoneCallback size={50} />
                  <div>
                    <h1 className="text-[#292E36] font-semibold text-2xl text-left">
                      Contact Us
                    </h1>
                    <div className="text-[#4A4A4A] font-Josefins text-xl text-left">
                      09******
                    </div>
                  </div>
                </div>
              </div>
              {/* Column right */}
              <div className="flex flex-col space-y-3 lg:space-y-10">
                <div className="flex items-center gap-5">
                  <MdMail size={50} />
                  <div>
                    <h1 className="text-[#292E36] font-semibold text-2xl text-left">
                      Experience
                    </h1>
                    <h5 className="text-[#4A4A4A] font-Josefins text-xl">
                      10 Years of Experience
                    </h5>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <MdLocationOn size={50} />
                  <div>
                    <h1 className="text-[#292E36] font-semibold text-2xl text-left">
                      Locate Us
                    </h1>
                    <div className="text-[#4A4A4A] font-Josefins text-xl text-left">
                      Taguig
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 justify-center md:justify-normal">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section className="py-20">
        <div className="bg-[#292E36] h-[200px] md:h-[500px]">
          <div className="text-center space-y-5 py-10">
            <div className="border-y-2 border-[#E1B168] inline-block">
              <h1 className="text-white font-Cormorant uppercase">Promo</h1>
            </div>
            <h1 className="text-3xl font-Cormorant font-semibold text-white">
              My Promo Video
            </h1>
          </div>
        </div>
        {/* Video outside of section */}
        <video className="h-[200px] sm:h-[300px] md:h-[500px] mx-auto -mt-[50px] md:-mt-[350px] drop-shadow-2xl" controls>
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <Reservation />
      <Footer />
    </div>
  );
};

export default Chefdetails;
