//import image
import image1 from "../AboutUs/Images/Background.png";
//import icons
import icons1 from "../AboutUs/icons/chef.svg";
import icons2 from "../AboutUs/icons/cuisine.svg";
import icons3 from "../AboutUs/icons/drinks.svg";
import icons4 from "../AboutUs/icons/fresh.svg";

const Cta = () => {
  return (
    <div className="bg-cover bg-bottom" style={{ backgroundImage: `url(${image1})` }}>
      <div className="py-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 space-y-10 lg:space-y-0">
        {/* Fresh Product */}
        <div className=" flex mx-auto">
          <div className="text-center space-y-3">
            <img src={icons4} className="mx-auto" />
            <h1 className="text-white font-Cormorant text-xl">Fresh Product</h1>
            <p className="text-white font-Josefins">
              Professional consider everyone
              <br />
              probls small niche friendly
            </p>
            <button className="text-[#E1B168] font-Josefins">See more</button>
          </div>
          <span className="border-r-2 border-gray-500 pl-20 hidden xl:block"></span>
        </div>
        {/* Skilled Chefs */}
        <div className=" flex mx-auto">
          <div className="text-center space-y-3">
            <img src={icons1} className="mx-auto" />
            <h1 className="text-white font-Cormorant text-xl">Fresh Product</h1>
            <p className="text-white font-Josefins">
              Professional consider everyone
              <br />
              probls small niche friendly
            </p>
            <button className="text-[#E1B168] font-Josefins">See more</button>
          </div>
          <span className="border-r-2 border-gray-500 pl-20 hidden xl:block"></span>
        </div>
        {/* Drinks & Juices */}
        <div className=" flex mx-auto">
          <div className="text-center space-y-3">
            <img src={icons3} className="mx-auto" />
            <h1 className="text-white font-Cormorant text-xl">Fresh Product</h1>
            <p className="text-white font-Josefins">
              Professional consider everyone
              <br />
              probls small niche friendly
            </p>
            <button className="text-[#E1B168] font-Josefins">See more</button>
          </div>
          <span className="border-r-2 border-gray-500 pl-20 hidden xl:block"></span>
        </div>
        {/* Vegan Cuisine */}
        <div className=" flex mx-auto">
          <div className="text-center space-y-3">
            <img src={icons2} className="mx-auto" />
            <h1 className="text-white font-Cormorant text-xl">Fresh Product</h1>
            <p className="text-white font-Josefins">
              Professional consider everyone
              <br />
              probls small niche friendly
            </p>
            <button className="text-[#E1B168] font-Josefins ">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
