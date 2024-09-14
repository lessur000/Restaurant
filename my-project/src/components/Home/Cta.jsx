//import images
import Food from "../../assets/images/filipinofood.jpg";
//import Foodsitems
import ChickenAdobo from "../../assets/Foods/Adobo.png";
import Kaldereta from "../../assets/Foods/Kaldereta.png";
import KareKare from "../../assets/Foods/Karekare.png";
import Menudo from "../../assets/Foods/Menudo.png";
import Pinakbet from "../../assets/Foods/Pinakbet.png";
import Tofu from "../../assets/Foods/Tofu.png";
import Sisig from "../../assets/Foods/Sisig.png";
import Sinigang from "../../assets/Foods/Sinigang.png";
import Bbq from "../../assets/Foods/BBQ.png";
import Flan from "../../assets/Foods/LecheFlan.png";
import HaloHalo from "../../assets/Foods/Halo-Halo.png";
import Pandan from "../../assets/Foods/BukoPandan.png";
import BiloBilo from "../../assets/Foods/Bilo-Bilo.png";

const Cta = () => {
  return (
    <div className="container mx-auto py-10 lg:flex justify-between px-0 lg:px-20">
      {/* left Column */}
      <div className="space-y-5 flex flex-col justify-center" data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000">
        <h1 className=" border-y-4 border-[#E1B168] max-w-[50px] text-center font-semibold mx-auto lg:mx-0">
          Menu
        </h1>
        <p className="max-w-[400px] text-center lg:text-left mx-auto lg:mx-0">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content making it look like
          readable English.
        </p>
        <img src={Food} className="" />
        <button className=" max-w-[200px] mx-auto lg:mx-0 border-2 border-[#E1B168] text-center py-4 px-10 font-Josefins text-[#E1B168] font-semibold">
          See all dishes
        </button>
      </div>
      {/* right Column */}
      {/* Menu */}
      <div className="mt-10 md:mt-0 space-y-4" data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000">
        {/* BestSellers */}
        <h1 className="text-center lg:text-left text-[#E12828] text-2xl font-bold font-Cormorant">
          Best Sellers
        </h1>
        {/* Adobo */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={ChickenAdobo} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Kaldereta */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Kaldereta} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Kare-kare */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={KareKare} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Menudo */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Menudo} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Pinakbet */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Pinakbet} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Main Dish */}
        <h1 className="text-center lg:text-left font-bold text-black font-Cormorant text-xl">
          Main Dish
        </h1>
        {/* Tofu */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Tofu} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Sisig */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Sisig} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Sinigang */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Sinigang} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Bbq */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Bbq} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Desserts */}
        <h1 className="text-center lg:text-left font-Cormorant text-black text-xl font-bold">
          Dessert
        </h1>
        {/* Lecheflan */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Flan} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Halo-Halo */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={HaloHalo} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Buko pandan */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={Pandan} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>

        {/* Bilo-bilo */}
        <div className="flex justify-center items-center gap-5 ">
          <img src={BiloBilo} />
          <h5>Chicken Adobo</h5>
          <span className="text-gray-500">....................</span>
          <span>₱ 140</span>
        </div>
      </div>
    </div>
  );
};

export default Cta;
