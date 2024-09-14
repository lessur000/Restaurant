import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cartitem = ({ item }) => {
  const { increaseAmount, decreaseAmount, removeFromCart } =
    useContext(CartContext);
  //destructure item
  const { image, id, name, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-Cormorant font-bold text-gray-500">
      <div className="flex items-center gap-x-4 w-full min-h-[150px]">
        {/* Image */}
        <Link to={`/Menu`}>
          <img className="max-w-[100px]" src={image} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between">
            {/* title & remove icon */}
            <Link className="text-xl">{name}</Link>
            {/* Remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-lg">
            {/* qty */}
            <div className="flex justify-center items-center cursor-pointer h-full">
              {/* Minus icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              ₱ {price}
            </div>
            {/* finial price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-gray-500 font-bold">
              {`₱ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
