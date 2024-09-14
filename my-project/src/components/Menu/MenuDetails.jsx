import { useContext } from "react";
import { useParams } from "react-router-dom";
//import item context
import { ItemContext } from "../Home/ItemContext";
import Header from "../Home/Header";
import { CartContext } from "./CartContext";

const MenuDetails = () => {
  const {addToCart} = useContext(CartContext);
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
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          {/* Food Image */}
          <img
            src={food.image}
            alt={food.name}
            className="md:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
          />

          {/* Food Details */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-4xl font-Cormorant font-bold">{food.name}</h1>
            <p className="text-lg">Price: ₱ {food.price}</p>
            <p className="text-gray-700">{food.description}</p>
            <button onClick={() => addToCart(food, food.id)} className="rounded bg-[#E1B168] w-fit py-2 px-5 text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDetails;
