//import image
import Restaurant from "../../assets/images/Restaurant.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
const Discover = () => {
  return (
    <div className="bg-[#292E36] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-5 lg:space-y-0">
        <div
          className="space-y-10 text-center lg:text-left"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 className="text-white font-Cormorant text-3xl md:text-8xl lg:max-w-[500px]">
            Welcome to Restaurant
          </h1>
          <p className="text-white font-Josefins font-normal lg:max-w-[500px]  lg:text-xl">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry’s standard dummy.
          </p>
          <button className="text-white border-4 border-[#E1B168] font-Josefins py-3 px-10">
            View Menu
          </button>
        </div>
        <img
          src={Restaurant}
          className="mx-auto lg:mx-0 lg:ml-10"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default Discover;
