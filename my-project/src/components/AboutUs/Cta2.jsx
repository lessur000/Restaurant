//import image
import Chefs from "../AboutUs/Images/chefs.png";
const Cta2 = () => {
  return (
    <div className="bg-[#292E36]">
      <div className="container mx-auto">
        <div className="md:flex items-center justify-center gap-20 pt-10">
          {/* Column left */}
          <div className="space-y-5">
            <h4 className="border-y-2 border-[#E1B168] inline-block text-white uppercase font-Cormorant">
              Best Chefs
            </h4>
            <h1 className="text-white  font-Cormorant text-3xl">
              Only Skilled Team
            </h1>
            <p className="text-[#E1B168] font-Josefins max-w-[600px]">
              Bring tothe table survival strategies to ensured proactived
              domination At the end of the day, going forward, a new normal that
              has evolved from generation X is on the runway heading towards a
              streamlined touchpoints for offshoring.
            </p>

            {/* Progress bar */}
            <div className="space-y-4">
              <h1 className="text-white font-Cormorant text-2xl font-bold">
                Experienced
              </h1>
              <div className="max-w-[600px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#E1B168] h-2.5 rounded-full w-[70%]"></div>
              </div>

              <h1 className="text-white font-Cormorant text-2xl font-bold">
                Professionalism
              </h1>
              <div className="max-w-[600px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#E1B168] h-2.5 rounded-full w-[70%]"></div>
              </div>

              <h1 className="text-white font-Cormorant text-2xl font-bold">
                Creative
              </h1>
              <div className="max-w-[600px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#E1B168] h-2.5 rounded-full w-[70%]"></div>
              </div>
            </div>
            <div className="pt-10">
              <button className="text-xl font-Josefins font-semibold border border-[#E1B168] py-2 px-5 text-[#E1B168] ">
                See all dishes
              </button>
            </div>
          </div>
          {/* Column right */}
          <img
            src={Chefs}
            className="hidden md:block w-[60%] lg:w-auto  drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta2;
