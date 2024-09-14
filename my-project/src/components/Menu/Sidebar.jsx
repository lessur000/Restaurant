//import sidebar context
import { SidebarContext } from "./SidebarContext";
import { useContext } from "react";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//
import { CartContext } from "./CartContext";
import Cartitem from "./Cartitem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div>Shopping Bag({itemAmount})</div>
        {/* Icon */}
        <IoMdArrowForward onClick={handleClose} className="text-2xl" />
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[700px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <Cartitem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={clearCart} className="cursor-pointer">
            <FiTrash2 size={30}/>
          </div>
        </div>
        <div className=" py-6">
          <Link to={`/`}>
            <button className="bg-gray-700 flex p-4 justify-center items-center text-white w-full font-Cormorant">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
