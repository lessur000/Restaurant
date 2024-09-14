// Import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import image
import Clients from "../../assets/images/Clients.png";
import "../Home/Slider.css";

const Testimonials = () => {
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
    <div className="bg-[#292E36] ">
      <div className="container mx-auto py-10 space-y-20">
        <div className="space-y-2">
          <h1 className="uppercase border-y-2 border-[#a59f97] w-[200px] text-center text-white font-Cormorant text-2xl">
            Testimonials
          </h1>
          <h2 className="text-white font-Cormorant text-4xl">
            What our clients say
          </h2>
          <p className="text-white font-Cormorant text-lg">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        <div
          className="slider-container"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Slider {...settings} className="pb-20">
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 1 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Manila
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 2 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Taguig
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 3 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Caloocan
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 4 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Bulacan
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 5 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Makati
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 6 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Pasig
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 7 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Valenzuela
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#343942] max-w-[300px] h-[300px] mx-auto">
                {/* Clients 8 */}
                <div className="space-y-4 mt-5 pt-5">
                  <div className="flex gap-3 items-center">
                    <img src={Clients} />
                    <div className="space-y-2">
                      <h1 className="text-white text-2xl font-Cormorant font-bold">
                        Russel Olaco
                      </h1>
                      <span className="text-[#E1B168] font-Cormorant">
                        Malabon
                      </span>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-500"></div>
                  <p className="text-white font-Cormorant text-xl">
                    It is professional, considers everyones time, can think
                    about the There are many variations of passages whole probls
                    small niche, friendly.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
