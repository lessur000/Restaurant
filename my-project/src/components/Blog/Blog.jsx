import { useContext } from "react";
import Header from "../Home/Header";
import { ItemContext } from "../Home/ItemContext";
import { Link } from "react-router-dom";
import Reservation from "../Home/Reservation";
import Footer from "../Home/Footer";

const Blog = () => {
  // Get foods from ItemContext (accessing the context that provides food items)
  const { foods } = useContext(ItemContext);

  // Log foods data to verify (useful for debugging)
  //   console.log(foods);

  return (
    <>
      {/* Render the Header component */}
      <Header />

      {/* Blog page title section */}
      <div className="bg-[#292E36] flex justify-center py-12">
        <h1 className="border-y-2 border-[#E1B168] text-white inline px-10 py-2 font-Cormorant text-3xl">
          Blog
        </h1>
      </div>

      {/* Main blog content section */}
      <div className="container mx-auto py-40 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col text-center justify-center space-y-3">
          <h5 className="border-y-2 border-[#E1B168] text-[#292E36] px-5 py-1 font-Cormorant w-fit mx-auto">
            Blog
          </h5>
          <h1 className="text-[#292E36] text-3xl font-Cormorant font-bold">
            Be First Who Read News
          </h1>
          <p className="text-[#555555]">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as <br /> opposed to using Content here, content making.
          </p>
        </div>

        {/* Display the first 4 food items in a grid */}
        <div className="grid md:grid-cols-2 justify-items-center gap-10 max-w-5xl mx-auto">
          {foods.slice(0, 4).map((food, index) => (
            <div
              key={index}
              className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Display food image */}
              <div className="relative ">
                <img
                  className="w-[900px] h-[250px] object-cover"
                  src={food.image}
                />

                {/* Overlay for 'Read More' button that shows on hover */}
                <div className="absolute top-0 h-full w-full group hover:bg-gray-500/70">
                  <Link
                    to={`/Blog/${food.name}`}
                    className="flex justify-center items-center h-full"
                  >
                    <h4 className="border py-4 px-10 border-[#E1B168] text-[#DEDEDE] font-Josefins text-xs hidden group-hover:block">
                      Read More
                    </h4>
                  </Link>
                </div>
              </div>

              {/* Food information section */}
              <div className="m-5 space-y-5">
                <div className="flex gap-5">
                  <h5 className="border-y-2 border-[#E1B168] uppercase w-fit text-[#292E36] font-Josefins text-xs">
                    Recipes
                  </h5>
                  <h5 className="border-y-2 border-[#E1B168] uppercase w-fit text-[#292E36] font-Josefins text-xs">
                    Sept 9, 2024
                  </h5>
                </div>

                {/* Display food title */}
                <h1 className="font-Cormorant font-bold text-2xl">
                  {food.title}
                </h1>

                {/* Display food description */}
                <p className="font-Josefins text-[#555555]">
                  {food.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reservation />
      <Footer />
    </>
  );
};

export default Blog;
