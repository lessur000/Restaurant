import Header from "../Home/Header";
import Footer from "../Home/Footer";
//import image
import Reserved from "../Reservation/Images/Reserved.png";
import Table from "../Reservation/Images/table.png";
//import icons
import Pizza from "../Reservation/Icons/Fresh.svg";
import Quality from "../Reservation/Icons/Quality.png";
import Service from "../Reservation/Icons/service.svg";
import Truck from "../Reservation/Icons/track.svg";
const Reservation = () => {
  return (
    <>
      <Header />
      <div className="bg-[#292E36] py-10">
        <h1 className="border-y-2 border-[#E1B168] font-Cormorant text-3xl w-fit mx-auto text-white">
          Booking
        </h1>
      </div>
      {/* Section Form */}
      <form className="m-3">
        <div className="container mx-auto max-w-6xl lg:flex justify-center items-center gap-10 py-20 space-y-5 lg:space-y-0">
          <div>
            <h5 className="border-y-2 border-[#E1B168] font-Josefins w-fit">
              Reservation
            </h5>
            <h1 className="text-[#292E36] font-Cormorant text-3xl">
              Book your table now
            </h1>
            <p className="font-Josefins text-base max-w-lg">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
            {/* Name/ Email */}
            <div className="md:grid grid-cols-2 gap-10 space-y-3 md:space-y-0">
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative mb-5">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            {/* Phone / Date */}
            <div className="md:grid grid-cols-2 gap-10 space-y-3 md:space-y-0 mt-4">
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Date"
                  required
                />
              </div>
            </div>
            {/* Time / Person */}
            <div className="md:grid grid-cols-2 gap-10 space-y-3 md:space-y-0 mt-4">
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Time"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pl-2 border border-gray-500/50 w-full"
                  placeholder="Person"
                  required
                />
              </div>
            </div>
            <button className="border border-[#E1B168] py-2 px-5 mt-10 text-[#E1B168]">
              Book a Table
            </button>
          </div>
          <img
            src={Reserved}
            className="h-[500px] mx-auto w-full lg:w-[500px] object-cover"
          />
        </div>
      </form>
      {/* Section 2 */}
      <div className="m-3">
        <div className="container mx-auto max-w-6xl lg:flex justify-center items-center gap-10 py-20">
          <img
            src={Table}
            className="h-[500px] mx-auto w-full lg:w-[500px] object-cover"
          />
          <div className="space-y-5 text-center lg:text-left">
            {/* Text */}
            <div className="space-y-5">
              <h5 className="border-y-2 border-[#E1B168] text-[#292E36] font-Josefins py-1 uppercase text-lg w-fit mx-auto lg:mx-0">
                Why Choose Us
              </h5>
              <h1 className="text-[#292E36] font-Cormorant text-4xl font-bold">
                Why We Are The Best?
              </h1>
              <p className="font-Josefins text-[#555555] text-base lg:max-w-xl mx-auto">
                Bring the table winwin survival strateges ensure proactive the
                domination the end of the day going forward new normal that has
                evolved froms generation on the runway heading towards
                streamlined cloud solution generated content in real times will
                have multiple touchpoints.
              </p>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-5">
              {/* Pizza icon */}
              <div className="border border-gray-500/50 w-fit gap-2 py-3 px-5 md:px-10 mx-auto 2xl:mx-auto">
                <div className="flex items-center gap-2 text-left">
                  <img src={Pizza} />
                  <h5>Fresh Food</h5>
                </div>
              </div>
              {/* Truck icon */}
              <div className="border border-gray-500/50 w-fit gap-2 py-3 px-5 md:px-10 mx-auto 2xl:mx-auto">
                <div className="flex items-center gap-2 text-left">
                  <img src={Truck} />
                  <h5>Fresh Food</h5>
                </div>
              </div>
              {/* Quality icon */}
              <div className="border border-gray-500/50 w-fit gap-2 py-3 px-5 md:px-10 mx-auto 2xl:mx-auto">
                <div className="flex items-center gap-2 text-left">
                  <img src={Quality} />
                  <h5>Fresh Food</h5>
                </div>
              </div>
              {/* Fresh icon */}
              <div className="border border-gray-500/50 w-fit gap-2 py-3 px-5 md:px-10 mx-auto 2xl:mx-auto">
                <div className="flex items-center gap-2 text-left">
                  <img src={Service} />
                  <h5>Fresh Food</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
