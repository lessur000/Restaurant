import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../Home/ItemContext";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Blogtips = () => {
  // Get the Foods name from the URL using useParams hook
  const { name } = useParams();
  // Access the foods data from the context
  const { foods } = useContext(ItemContext);
  /// Get the single foods based on the name from the URL
  const food = foods.find((item) => {
    return item.name == name; //find the foods with the matching name
  });

  // If food is not found, display a loading message
  if (!food) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading.....
      </section>
    );
  }

  return (
    <>
      <Header />
      <section className="container mx-auto py-28 space-y-10">
        <div className="flex justify-center gap-5">
          <h5 className="border-y-2 border-[#E1B168] w-fit font-Josefins">
            Recipes
          </h5>
          <h5 className="border-y-2 border-[#E1B168] w-fit font-Josefins">
            Feb 22, 2022
          </h5>
        </div>
        <h1 className="text-6xl font-Cormorant font-bold text-center mx-auto max-w-3xl">
          {food.title}
        </h1>
        <p className="font-Josefins text-center max-w-lg mx-auto text-[#555555]">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content making.
        </p>
        <img
          className="w-[1000px] mx-auto h-[500px] object-cover"
          src={food.image}
          alt={food.title}
        />
        <div className="space-y-10 max-w-2xl mx-auto text-left">
          <p className="font-Josefins text-[#555555] mt-4 text-left max-w-2xl mx-auto">
            {food.description}
          </p>

          <div className="space-y-3">
            <h1 className="text-[#292E36] font-Cormorant font-bold text-2xl">
              Perfect Food for all Hungry Livings
            </h1>
            <p className="text-left max-w-2xl mx-auto ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="text-center">
              <ul className="inline-block list-disc text-left">
                <li>
                  Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                  auctor
                </li>
                <li>
                  Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                  auctor
                </li>
                <li>
                  Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                  auctor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogtips;
