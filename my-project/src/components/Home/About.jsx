//import icons
import Locate from "../../assets/icons/locate.png";
import Hours from "../../assets/icons/Time.png";
import Book from "../../assets/icons/Reservation.png";
//import images
import Table from "../../assets/images/table.png";

const About = () => {
  return (
    <div className="bg-[#FFF8F5]">
      <div className=" container mx-auto py-10">
        {/* icons */}
        <div
          className="md:flex justify-around items-center space-y-4 md:space-y-0"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="3000"
        >
          <div className="flex items-center gap-2">
            <img src={Locate} />
            <div>
              <h5>Locate Us</h5>
              <p>Manila</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={Hours} />
            <div>
              <h5>Open Hours</h5>
              <p>Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={Book} />
            <div>
              <h5>Reservation</h5>
              <p>RusselOlac@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto md:flex justify-evenly items-center py-10 md:py-20"
          data-aos="zoom-out"
          data-aos-delay="100"
          data-aos-duration="3000"
        >
          <img src={Table} className="self-center" />
          <span className="border border-gray-500 h-[400px] hidden md:block"></span>
          <div className="space-y-5">
            <div className="flex flex-col">
              <h4 className="font-Cormorant text-3xl font-bold">The Story</h4>
              <p className="font-Josefins text-[16px] font-normal max-w-[400px]">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using Content here, content gfshere,
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-Cormorant text-3xl font-bold">1996</h4>
              <p className="font-Josefins text-[16px] font-normal">
                Lorem Ipsum is that it has a more-or-less normal distribution{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-Cormorant text-3xl font-bold">2021</h4>
              <p className="font-Josefins text-[16px] font-normal">
                Lorem Ipsum is that it has a more-or-less normal Content content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
