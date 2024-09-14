import Header from "../Home/Header";
// Import images for foods
import adobo from "../Gallery/FoodsIMG/adobo.png";
import kaldereta from "../Gallery/FoodsIMG/Kaldereta.jpg";
import KareKare from "../Gallery/FoodsIMG/KareKare.png";
import Menudo from "../Gallery/FoodsIMG/Menudo.jpg";
import Pinakbet from "../Gallery/FoodsIMG/Pinakbet.jpg";
import Sisig from "../Gallery/FoodsIMG/sisig.png";
// Import other images
import reserved from "../Gallery/images/Reserverd.png";
import ingredients from "../Gallery/images/fresh.jpg";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Title Section */}
      <div className="bg-[#292E36] flex justify-center py-10">
        <h1 className="border-y-2 border-[#E1B168] px-5 py-2 text-white text-3xl inline-block">
          Gallery
        </h1>
      </div>

      {/* Section 1: Displaying food images */}
      <div className="py-5">
        <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-center gap-4 space-y-2 md:space-y-20 lg:space-y-0 lg:gap-15 mt-[5%]">
          
          {/* Left Column: Kare-Kare and two smaller dishes */}
          <div className="space-y-4 lg:space-y-5">
            <div className="relative">
              <img
                className="w-full lg:max-w-[415px] object-cover"
                src={KareKare}
                alt="Kare Kare"
              />
              <div className="absolute top-0 h-full w-full group hover:bg-[#292E36]/70">
                <div className="hidden text-center group-hover:block mt-[22%]">
                  <h1 className="text-white font-Cormorant text-3xl font-semibold">
                    Kare-Kare
                  </h1>
                  {/* Link to Kare-Kare recipe */}
                  <Link className="text-[#E1B168] font-Josefins">Recipes</Link>
                </div>
              </div>
            </div>

            {/* Row of two smaller dishes: Menudo and Pinakbet */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative">
                <img
                  className="w-full lg:w-[200px] h-[300px] object-cover"
                  src={Menudo}
                  alt="Menudo"
                />
                <div className="absolute top-0 h-full w-full group hover:bg-[#292E36]/70">
                  <div className="hidden text-center group-hover:block mt-[50%]">
                    <h1 className="text-white font-Cormorant text-3xl font-semibold">
                      Menudo
                    </h1>
                    {/* Link to Menudo recipe */}
                    <Link className="text-[#E1B168] font-josefins">
                      Recipes
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="w-full lg:w-[200px] h-[300px] object-cover"
                  src={Pinakbet}
                  alt="Pinakbet"
                />
                <div className="absolute top-0 h-full w-full group hover:bg-[#292E36]/70">
                  <div className="hidden text-center group-hover:block mt-[50%]">
                    <h1 className="text-white font-Cormorant text-3xl font-semibold">
                      Pinakbet
                    </h1>
                    {/* Link to Pinakbet recipe */}
                    <Link className="text-[#E1B168] font-Josefins">
                      Recipes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sisig and two smaller dishes */}
          <div className="space-y-4 lg:space-y-5">
            <div className="relative">
              <img
                className="w-full lg:max-w-[415px] object-cover"
                src={Sisig}
                alt="Sisig"
              />
              <div className="absolute top-0 h-full w-full group hover:bg-[#292E36]/70">
                <div className="hidden text-center group-hover:block mt-[22%]">
                  <h1 className="text-white font-Cormorant text-3xl font-semibold">
                    Sisig
                  </h1>
                  {/* Link to Sisig recipe */}
                  <Link className="text-[#E1B168] font-Josefins">Recipes</Link>
                </div>
              </div>
            </div>

            {/* Row of two smaller dishes: Kaldereta and Adobo */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative">
                <img
                  className="w-full lg:w-[200px] h-[300px] object-cover"
                  src={kaldereta}
                  alt="Kaldereta"
                />
                <div className="absolute top-0 w-full h-full group hover:bg-[#292E36]/70">
                  <div className="hidden text-center group-hover:block mt-[50%]">
                    <h1 className="text-white font-Cormorant text-3xl font-semibold">
                      Kaldereta
                    </h1>
                    {/* Link to Kaldereta recipe */}
                    <Link className="text-[#E1B168] font-Josefins">
                      Recipes
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="w-full lg:w-[200px] h-[300px] object-cover"
                  src={adobo}
                  alt="Adobo"
                />
                <div className="absolute top-0 w-full h-full group hover:bg-[#292E36]/70">
                  <div className="hidden text-center group-hover:block mt-[50%]">
                    <h1 className="text-white font-Cormorant text-3xl font-semibold">
                      Adobo
                    </h1>
                    {/* Link to Adobo recipe */}
                    <Link className="text-[#E1B168] font-Josefins">
                      Recipes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button to view all dishes */}
        <Link>
          <button className="border border-[#E1B168] py-3 px-7 flex mx-auto mt-20 lg:mt-10">
            <h1 className="text-[#E1B168] font-Cormorant text-xl">
              See all dishes
            </h1>
          </button>
        </Link>
      </div>

      {/* Section 2: Reservation feature */}
      <div
        className="bg-center mt-20"
        style={{ backgroundImage: `url(${reserved})` }}
      >
        <div className="space-y-5 py-10 container mx-auto">
          <div className="border-y-2 border-[#E1B168] text-white inline-block">
            Reservation
          </div>
          <h1 className="text-white font-Cormorant text-5xl font-semibold">
            This evening
            <br /> will be great!
          </h1>
          <p className="text-white font-Josefins">
            Lorem Ipsum is that it has a more-or-less normal look like readable
            English.{" "}
          </p>
          <div className="flex gap-10">
            {/* Buttons for booking and getting in touch */}
            <button className="font-Josefins text-[#E1B168] border border-[#E1B168] py-3 px-4">
              Book a Table
            </button>
            <button className="text-white font-Josefins">Get in touch</button>
          </div>
        </div>
      </div>

      {/* Feature section: Fresh ingredients */}
      <div className="container mx-auto py-40">
        {/* Top row: Description and button */}
        <div className="flex flex-col md:flex-row space-y-3  justify-center items-center">
          <div className="space-y-5">
            <h5 className="border-y-2 border-[#E1B168] text-[#292E36] inline-block uppercase font-Josefins">
              feature
            </h5>
            <h1 className="text-6xl text-[#292E36] font-Cormorant">
              Always fresh <br /> ingredients
            </h1>
            <p className="text-[#555555] font-Josefins max-w-[450px]">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
            <button className="border border-[#E1B168] text-[#E1B168] py-2 px-7">
              View Menu
            </button>
          </div>
          {/* Image of fresh ingredients */}
          <img
            src={ingredients}
            className="h-[400px] md:h-[320px] lg:h-[400px] object-contain pt-10 md:pt-0"
          />
        </div>

        {/* Bottom row: Adobo image and description */}
        <div className="flex flex-col-reverse md:flex-row space-y-3 gap-16 justify-center items-center mt-10 md:mt-0">
          <img src={adobo} className="h-[400px] w-[450px] object-cover" />
          <div className="space-y-5">
            <h5 className="border-y-2 border-[#E1B168] text-[#292E36] inline-block uppercase font-Josefins">
              feature
            </h5>
            <h1 className="text-5xl lg:text-6xl text-[#292E36] font-Cormorant">
              We invite you to <br />
              visit our restaurant
            </h1>
            <p className="text-[#555555] font-Josefins max-w-[450px]">
              Every time you perfectly dine with us, it should happy for great
              inspired food in an environment designed with individual touches
              unique to the local area.
            </p>
            <button className="border border-[#E1B168] text-[#E1B168] py-2 px-7">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Gallery;
