//import images
import Adobo from "../../assets/images/Adobo.jpg";
import Kaldereta from "../../assets/images/Kaldereta.jpg";

const Blog = () => {
  return (
    <div className="container mx-auto mt-28 space-y-10 py-10">
      <div className="text-center space-y-5">
        <h4 className="uppercase border-y-2 border-[#E1B168] mx-auto text-center inline-block font-Cormorant text-3xl font-semibold">
          Blog
        </h4>
        <h1 className="font-Cormorant text-4xl font-bold">
          Be First Who Read News
        </h1>
        <p className="font-Cormorant text-xl max-w-[600px] mx-auto">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content making.
        </p>
      </div>
      <div
        className="md:flex justify-center gap-10 space-y-5 md:space-y-0"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Adobo */}
        <div className="border border-gray-400 ">
          <div className="relative flex items-center justify-center group">
            <img src={Adobo} className="h-[300px] w-full object-cover" />
            <div className="bg-[#292E36]/70 hidden group-hover:block absolute w-full h-full top-0"></div>
            <button className="text-[#E1B168] border-2 border-[#E1B168] py-2 px-10 absolute hidden group-hover:block font-bold">
              View More
            </button>
          </div>

          <div className="m-5 space-y-5 py-5">
            <div className="flex gap-10">
              <h1 className="font-Cormorant border-y-2 border-[#E1B168] inline-block font-semibold text-xl">
                Restaurants
              </h1>
              <h1 className="font-Cormorant border-y-2 border-[#E1B168] inline-block font-semibold text-xl">
                August 29 2022
              </h1>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-[350px] text-3xl font-Cormorant font-semibold">
                The Most Popular Delicious Food Of Mediterranean Cuisine
              </h1>
              <p className="max-w-[400px] text-[#555555] font-Cormorant font-semibold">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
        </div>
        {/* Kaldereta */}
        <div className="border border-gray-400">
          <div className="relative flex items-center justify-center group">
            <img src={Kaldereta} className="h-[300px] w-full object-cover" />
            <div className="bg-[#292E36]/70 hidden group-hover:block absolute w-full h-full top-0"></div>
            <button className="text-[#E1B168] border-2 border-[#E1B168] py-2 px-10 absolute hidden group-hover:block font-bold">
              View More
            </button>
          </div>
          <div className="m-5 space-y-5 py-5">
            <div className="flex gap-10">
              <h1 className="font-Cormorant border-y-2 border-[#E1B168] inline-block font-semibold text-xl">
                Restaurants
              </h1>
              <h1 className="font-Cormorant border-y-2 border-[#E1B168] inline-block font-semibold text-xl">
                August 29 2022
              </h1>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-[350px] text-3xl font-Cormorant font-semibold">
                Elegant Dessert: 10 Tips How to Make It at Home
              </h1>
              <p className="max-w-[400px] text-[#555555] font-Cormorant font-semibold">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
