import offers from "../../assets/images/offer.png";
//import images
import Adobo from "../../assets/images/Adobo.jpg";
import Kaldereta from "../../assets/images/Kaldereta.jpg";
import KareKare from "../../assets/images/KareKare.jpg";

const Offers = () => {
  return (
    <div className="container mx-auto py-20 space-y-20">
      <div className="space-y-20">
        <div className="text-center">
          <h1 className="font-Cormorant font-bold text-xl">
            Our special Offer dishes
          </h1>
          <p className="font-Cormorant text-base font-semibold max-w-[500px] mx-auto">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content making.
          </p>
        </div>
        <img src={offers} className="mx-auto" />
      </div>
      {/*Menu Popular dishes */}
      <div className="space-y-5">
        <h1 className="text-center border-y-2 border-[#E1B168] max-w-[200px] mx-auto font-bold font-Cormorant text-3xl">
          Menu
        </h1>
        <h1 className="text-center font-semibold font-Cormorant text-5xl">
          Popular Disher
        </h1>
        <p className="text-center max-w-[500px] mx-auto">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content making.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center pt-20  gap-5"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {/* Adobo */}
          <div className="space-y-5">
            <img src={Adobo} className="h-[335px]" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-Cormorant font-bold text-3xl">Adobo</h1>
                <span className="font-Cormorant font-bold text-3xl">₱140</span>
              </div>
              <div className="border border-gray-300"></div>
              <p className="font-Cormorant font-semibold text-xl text-[#555555]">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* Kaldereta */}
          <div className="space-y-5">
            <img src={Kaldereta} className="h-[335px]" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-Cormorant font-bold text-3xl">Kaldereta</h1>
                <span className="font-Cormorant font-bold text-3xl">₱150</span>
              </div>
              <div className="border border-gray-300"></div>
              <p className="font-Cormorant font-semibold text-xl text-[#555555]">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
          {/* KareKare */}
          <div className="space-y-5">
            <img src={KareKare} className="h-[335px]" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-Cormorant font-bold text-3xl">KareKare</h1>
                <span className="font-Cormorant font-bold text-3xl">₱160</span>
              </div>
              <div className="border border-gray-300"></div>
              <p className="font-Cormorant font-semibold text-xl text-[#555555]">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 py-3 px-16 border-[#E1B168] text-[#E1B168] max-w-[250px] mx-auto text-center cursor-pointer">
        <button className=" font-Cormorant font-bold">See all dishes</button>
      </div>
    </div>
  );
};

export default Offers;
