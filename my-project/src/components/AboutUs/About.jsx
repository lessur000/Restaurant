import Header from "../Home/Header";
//import images
import background from "../AboutUs/Images/pic1.png";
//import icons
import stars from "../AboutUs/icons/Star.svg";
import Cta from "./Cta";
import Team from "./Team";
import Cta2 from "./Cta2";
import Reservation from "../Home/Reservation";
import Footer from "../Home/Footer";
import { useContext } from "react";
import { ItemContext } from "../Home/ItemContext";
//import slider
import Slider from "react-slick";
import "../AboutUs/Slider.css";

const About = () => {
  //get chefs from itemContext
  const { chefs } = useContext(ItemContext);
  // console.log(chefs);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <></>,
    prevArrow: <></>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="bg-[#292E36] p-16 flex justify-center">
        <div className="border-y-2 border-[#E1B168] inline-block">
          <h1 className="text-white  font-Cormorant text-4xl ">About Us</h1>
        </div>
      </div>
      {/* About */}
      <div className="container mx-auto md:flex justify-evenly items-center py-24 space-y-10 md:space-y-0">
        {/* Column left */}
        <div className="space-y-5">
          <h1 className="text-[#555555] font-Cormorant font-semibold text-xl border-y-2 border-[#E1B168] inline-block">
            About us
          </h1>
          <h1 className="font-Cormorant text-3xl font-semibold">
            Quality and Tradition
          </h1>
          <p className="font-Josefins text-base text-[#555555] w-[500px]">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </p>
          <h5 className="font-Josefins">Russel Olaco</h5>
          <button className="border-2 border-[#E1B168] py-2 px-10 text-[#E1B168]">
            See More
          </button>
        </div>
        {/* Column Right */}
        <div className="relative">
          <img src={background} />
          <div className="bg-white max-w-[200px] md:max-w-[200px] lg:max-w-[250px] shadow-lg py-5 absolute -bottom-24 lg:-bottom-12 lg:-left-10">
            <div className="space-y-3 m-2">
              <h1 className="text-[#555555] font-Josefins  text-2xl">Russel</h1>
              <h4 className="text-[#4A4A4A] text-lg">CEO & Founder</h4>
              <p>Capitalize on low hanging fruit to identify a ballpark</p>
              <img src={stars} />
            </div>
          </div>
        </div>
      </div>
      <Cta />
      {/* Team.jsx */}
      <div className="flex flex-col justify-center py-10 bg-[#FFF8F5]">
        <div className="border-y-2 border-[#E1B168] mx-auto">
          <h2 className="text-[#292E36] font-Cormorant text-2xl ">Team</h2>
        </div>
        <h1 className="text-[#292E36] font-Cormorant text-4xl text-center mt-5">
          Meet Our Professional Chefs
        </h1>
        <Slider {...settings}>
          {chefs.map((chef) => {
            return <Team chef={chef} key={chef.id} />;
          })}
        </Slider>
      </div>
      <Cta2 />
      <Reservation />
      <Footer />
    </>
  );
};

export default About;
