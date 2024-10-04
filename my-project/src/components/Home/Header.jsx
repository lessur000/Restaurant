import { useContext, useState } from "react";
//import images
import Logo from "../../assets/images/Logo.png";
//import icons
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

//import link
import { Link } from "react-router-dom";
import { SidebarContext } from "../Menu/SidebarContext";
//import cart context
import { CartContext } from "../Menu/CartContext";

const Header = () => {
  //header state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //hamburger
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#292E36] py-4">
      <div className="space-y-10 ">
        <img src={Logo} className="mx-auto" />
        <nav className="border-y-4 border-[#6C6767] py-4 px-10 container mx-auto flex items-center justify-between">
          <div className="hidden md:block">
            {/* Navbar */}
            <ul className="flex items-center text-white gap-5 font-Josefins text-xl">
              <Link to={`/`}>
                <li>Homes</li>
              </Link>
              <Link to={`/About`}>
                <li>About</li>
              </Link>
              <Link to={`/Menu`}>
                <li>Menu</li>
              </Link>
              <Link to={`/Reserve`}>
                <li>Reservation</li>
              </Link>
              <Link to={`/Gallery`}>
                <li>Gallery</li>
              </Link>
              <Link to={`/Blog`}>
                <li>Blog</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/* Hamburger */}
          <div className="md:hidden block">
            {nav ? (
              <AiOutlineClose
                size={30}
                onClick={handleNav}
                className="fill-white"
              />
            ) : (
              <AiOutlineMenu
                size={30}
                onClick={handleNav}
                className="fill-white"
              />
            )}
            {nav && (
              <div className="fixed mt-12 left-0 bg-[#292E36] w-full z-20">
                <nav className="py-10">
                  {/* Navbar */}
                  <ul className="flex flex-col items-center text-white gap-5">
                    <Link to={`/`}>
                      <li>Homes</li>
                    </Link>
                    <Link to={`/About`}>
                      <li>About</li>
                    </Link>
                    <Link to={`/Menu`}>
                      <li>Menu</li>
                    </Link>
                    <Link to={`/Reserve`}>
                      <li>Reservation</li>
                    </Link>
                    <Link to={`/Gallery`}>
                      <li>Gallery</li>
                    </Link>
                    <Link to={`/Blog`}>
                      <li>Blog</li>
                    </Link>
                    <Link>
                      <li>Contact</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          {/* cart/book-button */}
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer">
              <CiShoppingCart
                onClick={() => setIsOpen(!isOpen)}
                size={30}
                className="fill-white cursor-pointer"
              />
              <div className="bg-red-500 absolute -right-1 -top-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
            <Link to={`/Reserve`}>
              <button className="bg-[#E1B168] py-4 px-4 rounded-2xl font-Josefins">
                Reservation
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
