//import image
import background from "../../assets/images/bgForm.jpg";

const Reservation = () => {
  return (
    <div
      className="bg-no-repeat bg-cover  bg-bottom relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-[#292E36]/60 absolute top-0 w-full h-full"></div>
      <div className="container mx-auto py-20">
        <div className="bg-[#292E36]/95 mx-auto relative py-20  max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-[800px]">
          <div className="text-center space-y-4">
            <h1 className="text-white border-y-2 border-[#E1B168] text-center mx-auto inline-block  font-Cormorant text-xl font-semibold uppercase tracking-widest">
              Reservation
            </h1>
            <h2 className="text-white text-3xl font-Cormorant mx-auto text-center">
              Book your table now
            </h2>
            <form action="/">
              <div className="space-y-5 px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Name */}
                  <input
                    className="border-2 border-gray-500 bg-transparent placeholder-opacity-50 text-white py-2 pl-2"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Name"
                  />
                  {/* Email */}
                  <input
                    className="border-2 border-gray-500 bg-transparent placeholder-opacity-50 text-white py-2 pl-2"
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Person */}
                  <input
                    className="border-2 border-gray-500 bg-transparent placeholder-opacity-50 text-white py-2 pl-2"
                    type="name"
                    id="Person"
                    name="Person"
                    placeholder="Person"
                  />
                  {/* Timing */}
                  <input
                    className="border-2 border-gray-500 bg-transparent placeholder-opacity-50 text-white py-2  pl-2"
                    type="name"
                    id="Person"
                    name="Person"
                    placeholder="Timing"
                  />
                  {/* Date */}
                  <input
                    className="border-2 border-gray-500 bg-transparent placeholder-opacity-50 text-white py-2  pl-2"
                    type="date"
                    id="Person"
                    name="Person"
                    placeholder="Person"
                  />
                </div>

                <button className="bg-white py-5 px-20 font-Cormorant font-semibold text-xl">
                  Book a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
