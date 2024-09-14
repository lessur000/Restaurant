//import icons
import Calendar from "../../assets/icons/Calendar.svg";
import Menu from "../../assets/icons/Menus.svg";
import Delivery from "../../assets/icons/Bike.svg";

const Services = () => {
  return (
    <div className="bg-[#323841] py-10">
      <div className="container mx-auto">
        <div className="lg:flex items-center justify-evenly space-y-10">
          <div className="max-w-[300px] space-y-4 mt-10 mx-auto lg:mx-0">
            <h1 className="uppercase text-white border-y-2 border-[#E1B168] max-w-[150px] text-center mx-auto">
              What we offer
            </h1>
            <h1 className="text-white font-Cormorant font-bold text-3xl text-center">
              Our Great Services
            </h1>
            <p className="text-white font-Cormorant text-center">
              Lorem Ipsum is that it has a more-or-less normal distribution
              content making it look like readable English.{" "}
            </p>
          </div>
          {/* icons services */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-10">
            {/* Calender */}
            <div className="bg-[#292E36] block py-12 px-12">
              <img src={Calendar} className="mx-auto" />
              <h1 className="text-white font-Cormorant font-bold text-center">
                Opened 24/7
              </h1>
            </div>

            {/* Special Menus */}
            <div className="bg-[#292E36] block py-12 px-12">
              <img src={Menu} className="mx-auto" />
              <h1 className="text-white font-Cormorant font-bold text-center">
                Special Menus
              </h1>
            </div>

            {/* Home Delivery */}
            <div className="bg-[#292E36] block py-12 px-12">
              <img src={Delivery} className="mx-auto" />
              <h1 className="text-white font-Cormorant font-bold text-center">
                Home Delivery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
