import { useContext } from "react";
import Header from "../Home/Header";
import { ItemContext } from "../Home/ItemContext";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Menu = () => {
  // Get foods from ItemContext (accessing the context that provides food items)
  const { foods } = useContext(ItemContext);
  // console.log(foods);

  //import cartContext
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 justify-items-center gap-10 max-w-7xl mx-auto py-20">
        {foods.map((food) => (
          <div
            key={food.id}
            className="border border-gray-500/50 overflow-hidden bg-amber-300"
          >
            <div className="relative group">
              <img
                src={food.image}
                className="w-[900px] h-[250px] object-cover"
              />
              <div className="absolute top-0 w-full h-full bg-gray-500/70 hidden group-hover:block">
                <Link
                  to={`/Menu/${food.name}`}
                  className="flex justify-center items-center h-full"
                >
                  <button className="bg-[#E1B168] py-2 px-5 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
            <div className="m-3">
              <h5 className="font-Cormorant text-xl">{food.name}</h5>
              <div className="flex justify-between items-center">
                <h2 className="font-bold font-Cormorant text-xl">
                  ₱ {food.price}
                </h2>
                <button
                  onClick={() => addToCart(food, food.id)}
                  className="rounded bg-slate-500 py-2 px-2 text-white font-Cormorant"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
